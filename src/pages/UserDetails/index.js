import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserUpdateForm from '../components/UserUpdateForm';
import userApi from '../../api/userApi';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const UserDetails = () => {
  const {id} = useParams()
  const [user, setUser] = useState() 
  const [visits, setVisits] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUserDetail = async () => {
      try{
        const {data: uInfo} = await userApi.getUserById(id)
        setUser(uInfo)
        const { visits: userVisits } = uInfo
        setVisits(userVisits)
      }
      catch (e) {
        console.log(e)
      }
    }
    getUserDetail()
  }, [id])

  return (
    <div className='mt-14 px-10 grid grid-cols-[500px_1fr]'>
      {user &&
      <UserUpdateForm 
        className="px-4 max-w-[500px]"
        title="User Detail"
        id={id}
        defaultValues={user}
      />}

      <ActivityHistory 
        visits={visits}
      />
    </div>
  );
};

export default UserDetails;


const ActivityHistory = ({
  className,
  visits=[],
  itemsPerPage=10,
  ...props
}) => {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState(null) 

  const handlePageClick = (even) => {
      const newOffset = even.selected * itemsPerPage % visits.length
      setItemOffset(newOffset)
  }
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(visits.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(visits.length / itemsPerPage))
  }, [visits, itemOffset, itemsPerPage])

  return (
    <div className={`mx-14 ${className}`}>
      <div className='float-right'>
        <h3 className='font-semibold text-2xl text-center mb-9'>Visit History</h3>
        <div className='flex flex-col gap-5'>
          <div className='min-h-[400px] max-h-[400px] flex flex-col justify-between bg-mainCream rounded-2xl px-10 py-8'>
            {currentItems?.map((item, index) => {
              return (
                <Visit 
                  id={index}
                  timestamp={item.time}
                  key={index}
                />
              )
            })}
          </div>
          <div>
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
      </div>
    </div>
  )
}

const Visit = ({timestamp, id, ...props}) => {
  const time = new Date(timestamp)
  const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  return (
    <div className='h-[40px] text-mainPurple text-xl flex justify-between items-center'>
      <div className=''>
        {id}
      </div>
      <div className=''>
        {weekDay[time.getDay()]} {time.toLocaleString("en-Us")}
      </div>
    </div>
  )
}