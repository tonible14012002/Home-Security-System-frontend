import EButton from "../../../../components/EButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import UserDeleteModal from "../UserDeleteModal"
import UserUpdateModal from "../UserUpdateModal"

const UserItem = ({
    id,
    fullName, 
    address,
    phone,
}) => {
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    
    const showUpdateModal = () => {
        setShowUpdate(true)
    }

    const showDeleteModal = () => {
        setShowDelete(true)
    }

    const handleCloseModal = () => {
        setShowDelete(false)
        setShowUpdate(false)
    }

    return (
        <div className='grid grid-cols-[100px_1fr_1fr_200px_200px] w-full text-[#9F8772]'>
            <div className='h-[60px] font-semibold leading-[60px] text-center'>{id || '__'}</div>
            <EButton to="/user-management" className='h-[60px] w-fit hover:text-[#79573a] hover:underline transition-all font-semibold leading-[60px] pl-5'>{fullName || '__'}</EButton>
            <div className='h-[60px] font-semibold leading-[60px] pl-5'>{address || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] pl-5'>{phone || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] text-center'>
                <EButton
                    onClick={showDeleteModal}
                >
                    <FontAwesomeIcon 
                        icon={faTrash}
                    />
                </EButton>
                <EButton className='ml-6'
                    onClick={showUpdateModal}
                >
                    <FontAwesomeIcon 
                        icon={faEdit}
                    />
                </EButton>
            </div>
            {showDelete &&
            <UserDeleteModal 
                onClose={handleCloseModal}
            />}
            {showUpdate &&
            <UserUpdateModal 
                onClose={handleCloseModal}
            />}
        </div>
    )
}

export default UserItem