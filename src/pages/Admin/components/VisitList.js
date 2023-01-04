import { useState, useEffect, useContext, useCallback } from "react"
import userApi from "../../../api/userApi"
import ReactPaginate from "react-paginate"
import VisitItem from "./VisitItem"
import { WebSocketContext } from "../../../context/SocketContext"
import EButton from "../../../components/EButton"
import { toast } from "react-toastify"

const VisitList = ({itemsPerPage=6}) => {
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [currentItems, setCurrentItems] = useState(null) 
    const [visits, setVisits] = useState([])
    const { session } = useContext(WebSocketContext)
  
    const handlePageClick = (even) => {
      const newOffset = even.selected * itemsPerPage % visits.length
      setItemOffset(newOffset)
    }

    const handleOffsetChange = () => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(visits.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(visits.length / itemsPerPage))
    }

    const handleFetchVisits = () => {
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
    }

    const handleNotification = useCallback((e) => {
      setVisits((oldVisits) => {
        const newVisit = { isRecent: true, ...oldVisits[0]}
        return [newVisit, ...oldVisits]
      })
      toast.success(e.data)
    }, [])

    const addWebSocketEvent = () => {
      if (!session) return
      session.addEventListener('message', handleNotification)
      return () => session.removeEventListener('message', handleNotification)
    }

    useEffect(handleOffsetChange, [visits, itemOffset, itemsPerPage])
    useEffect(handleFetchVisits, [])
    useEffect(addWebSocketEvent, [session, handleNotification])

    return (
        <>
        <div className="bg-mainCream text-black px-10 py-5 rounded-xl w-full mb-6">
          <h3 className='text-2xl font-semibold'>Recent Activities</h3>
          <div className='grid grid-cols-[50px_150px_300px_1fr_1fr] gap-3 mt-2 mb-4 text-mainPurple font-semibold text-xl'>
            <div></div>
            <h3>Order</h3>
            <h3>Time Visit</h3>
            <h3>User</h3>
            <h3>User Phone</h3>
          </div>
          <div className='flex flex-col text-mainPurple min-h-[200px]'> 
            {currentItems?.map((item, index) => {
              const uFullName = (item.user.first_name + ' ' + item.user.last_name).trim()
              return (
                <VisitItem 
                  id={itemOffset + index}
                  key={index}
                  timestamp={item.time}
                  fullName={uFullName || item.user.username}
                  phone={item.user.phone}
                  uid={item.user.id}
                  isRecent={item.isRecent || false}
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
          <EButton
            className="px-4 py-2 bg-blue-400 rounded text-white shadow-md transition hover:bg-blue-500"
            onClick={() => {session.send('sadasdas')}}
          >
            send
          </EButton>
        </>
    )
}

export default VisitList