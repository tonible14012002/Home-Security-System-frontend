import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import userApi from '../../api/userApi';
import ReactPaginate from 'react-paginate';

const Admin = ({itemsPerPage=6}) => {

  const { user } = useContext(AuthContext)
  const [count, setCount] = useState(0)
  
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState(null) 
  const [visits, setVisits] = useState([])
  
  const fullName = (user.first_name + ' ' + user.last_name).trim()

  const handlePageClick = (even) => {
    const newOffset = even.selected * itemsPerPage % visits.length
    setItemOffset(newOffset)
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(visits.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(visits.length / itemsPerPage))
  }, [visits, itemOffset, itemsPerPage])

  useEffect(() => {
    const getVisits = async () => {
      try {
        const { data: userVisits } = await userApi.getAllVisits()
        setVisits(userVisits)
      }
      catch (e) {
        console.log(e)
      }
    }
    getVisits()
  }, [])

  useEffect(() => {
    const countUser = async () => {
      try {
        const { data: {count} } = await userApi.countUser()
        setCount(count)
      }
      catch (e) { console.log(e) }
    }
    countUser()
  }, [])

  return (
    <div className="px-[200px] py-10 mb-[100px]">
      <h3 className="text-black text-2xl">
        Welcome, <span className="font-bold">{fullName || user.username}</span>
      </h3>
      <div className="mt-16">
        <div className="grid h-72 gird grid-cols-2 mb-10 gap-10">
          <div className="flex flex-col h-full bg-mainCream rounded-lg justify-center">
            <p className="font-bold text-4xl text-center">My Users</p>
            <p className="font-bold text-7xl mt-4 text-center">{count}</p>
          </div>
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              className=' object-cover h-full w-full'
              alt='Camera'
              src='http://127.0.0.1:5000/video_feed'
            />
          </div>
        </div>
        <div className="bg-mainCream text-black px-10 py-5 rounded-xl w-full mb-6">
          <h3 className='text-2xl font-semibold mb-5'>Recent Activities</h3>
          <div className='px-10 flex flex-col text-mainPurple min-h-[200px]'> 
            {currentItems?.map((item, index) => {
              const uFullName = (item.user.first_name + ' ' + item.user.last_name).trim()
              console.log(item)
              return (
                <VisitItem 
                  id={index}
                  key={index}
                  timestamp={item.time}
                  fullName={uFullName || item.user.username}
                  uid={item.user.id}
                />
              )
            })}
          </div>
        </div>
        <ReactPaginate 
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="previous"
            pageClassName="rounded-md"
            pageLinkClassName="bg-[#ebd1bb] hover:bg-[#e2c7af] transition-all rounded-md w-[40px] h-[40px] block flex justify-center items-center"
            previousLinkClassName="bg-[#ebd1bb] hover:bg-[#e2c7af] transition-all rounded-md w-fit pl-3 pr-3 h-[40px] block flex justify-center items-center"
            nextLinkClassName="bg-[#ebd1bb] hover:bg-[#e2c7af] transition-all rounded-md w-fit pl-3 pr-3 h-[40px] block flex justify-center items-center"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="flex justify-between w-fit ml-auto gap-5 font-semibold"
            activeClassName="outline outline-2"
            renderOnZeroPageCount={null}
          />
      </div>
    </div>
  );
};

export default Admin;


const VisitItem = ({id, timestamp, fullName, uid, ...props}) => {
  const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const time = new Date(timestamp)
  return (
    <div className="flex h-[30px] font-semibold">
      <div className="mr-20 font-semibold">{id}</div>
      <div className="w-full text-lg mr-24">{weekDay[time.getDay()]} {time.toLocaleString("en-US")}</div>
      <div className="mr-20 text-lg font-semibold">{uid}</div>
      <div className="w-full text-lg">{fullName}</div>
    </div>
  )
}