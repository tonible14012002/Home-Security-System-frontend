import { useContext, useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { OrdinaryUsersContext, UnConfirmOrdUserContext } from "../../../../context/OrdinaryUserContext"
import UserItem from "../UserItem"
import UserFilter from "../UserFilter"
import UserItemSkeleton from "../UserItemSkeleton"
import UserDeleteModal from "../UserDeleteModal"
import UserUpdateModal from "../UserUpdateModal"
import UserAcceptModal from "../UserAcceptModal"


const UserList = ({itemsPerPage=10, unConfirm}) => {

    const {users, loading} = useContext(unConfirm ? UnConfirmOrdUserContext: OrdinaryUsersContext)

    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [currentItems, setCurrentItems] = useState(null) 
    const [showDeleteModal, setShowDeleteModal] = useState({show: false, id: null})
    const [showUpdateModal, setShowUpdateModal] = useState({show: false, id: null})
    const [showAcceptModal, setShowAcceptModal] = useState({show: false, id: null})

    const handleDelete = (id) => {
        setShowDeleteModal({show: true, id:id})
    }
    const handleUpdate = (id) => {
        setShowUpdateModal({show: true, id:id})
    }
    const handleAccept = (id) => {
        setShowAcceptModal({show: true, id:id})
    }
    const handleCloseModal = () => {
        setShowDeleteModal({show: false, id: null})
        setShowUpdateModal({show: false, id:null})
        setShowAcceptModal({show: false, id: null})
    }

    const handlePageClick = (even) => {
        const newOffset = even.selected * itemsPerPage % users.length
        setItemOffset(newOffset)
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(users.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(users.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, users])

    return (
        <div className='flex flex-col laptop:w-[1200px] m-auto mt-10'>
        <div className="flex justify-end gap-4 h-[45px] mb-2">
            <UserFilter ordinary />
        </div>
        <div className='w-full bg-[#EFEFEF] h-[660px] rounded-xl overflow-hidden'>
            <div className='grid grid-cols-[100px_1fr_1fr_200px_200px] w-full'>
                <div className=' bg-[#D9D9D9] text-xl text-[#316B83] h-[60px] font-semibold leading-[60px] text-center'>ID</div>
                <div className=' bg-[#D9D9D9] text-xl text-[#316B83] h-[60px] font-semibold leading-[60px] pl-5'>Fullname</div>
                <div className=' bg-[#D9D9D9] text-xl text-[#316B83] h-[60px] font-semibold leading-[60px] pl-5'>Address</div>
                <div className=' bg-[#D9D9D9] text-xl text-[#316B83] h-[60px] font-semibold leading-[60px] pl-5'>Phone No</div>
                <div className=' bg-[#D9D9D9] text-xl text-[#316B83] h-[60px] font-semibold leading-[60px] text-center'>Actions</div>
            </div>
            {loading? Array(10).fill(null).map((item, index) => <UserItemSkeleton />) 
            :currentItems?.map((user, index) => {
                return (
                    <UserItem 
                        key={index}
                        id={user.id}
                        fullName={user.first_name + ' ' + user.last_name}
                        address={user.address}
                        phone={user.phone}
                        birth={user.birth}
                        className='flex bg-[#e2c7af] transition-all'
                        onDelete={() => handleDelete(user.id)}
                        onUpdate={() => handleUpdate(user.id)}
                        onAccept={() => handleAccept(user.id)}
                        showAccept={unConfirm}
                    />
                )
            })}
        </div>
        <div className='m-5'>
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
        {showDeleteModal.show &&
        <UserDeleteModal 
            onClose={handleCloseModal}
            userId={showDeleteModal.id}
            unConfirm={unConfirm}
        />}
        {showUpdateModal.show &&
        <UserUpdateModal 
            onClose={handleCloseModal}
            userId={showUpdateModal.id}
            unConfirm={unConfirm}
        />}
        {showAcceptModal.show && 
        <UserAcceptModal 
            onClose={handleCloseModal}
            userId={showAcceptModal.id}
            unConfirm={unConfirm}
        />}
    </div>
    )
}


export default UserList