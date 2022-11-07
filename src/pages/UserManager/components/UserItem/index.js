import EButton from "../../../../components/EButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"

const UserItem = ({
    id,
    fullName, 
    address,
    phone, 
}) => {
    return (
        <div className='grid grid-cols-[100px_1fr_1fr_200px_200px] w-full text-[#9F8772]'>
            <div className='h-[60px] font-semibold leading-[60px] text-center'>{id || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] pl-5'>{fullName || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] pl-5'>{address || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] pl-5'>{phone || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] text-center'>
                <EButton>
                    <FontAwesomeIcon 
                        icon={faTrash}
                    />
                </EButton>
                <EButton className='ml-6'>
                    <FontAwesomeIcon 
                        icon={faEdit}
                    />
                </EButton>
            </div>
        </div>
    )
}

export default UserItem