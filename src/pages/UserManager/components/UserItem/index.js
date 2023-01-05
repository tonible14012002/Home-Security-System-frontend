import EButton from "../../../../components/EButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faSquareCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons"

const UserItem = ({
    id,
    fullName, 
    address,
    phone,
    onDelete,
    onUpdate,
    onAccept,
    onImage,
    showAccept,
    image,
    ...props
}) => {

    return (
        <div className='grid grid-cols-[100px_1fr_1fr_200px_200px] w-full text-[#9F8772]' >
            <div className='h-[60px] font-semibold leading-[60px] text-center'>{id || '__'}</div>
            <EButton to={`/user-details/${id}`} className='h-[60px] w-fit hover:text-[#79573a] hover:underline transition-all font-semibold leading-[60px] pl-5'>{fullName || '__'}</EButton>
            <div className='h-[60px] font-semibold leading-[60px] pl-5'>{address || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] pl-5'>{phone || '__'}</div>
            <div className='h-[60px] font-semibold leading-[60px] text-center'>
                <EButton
                    onClick={onDelete}
                >
                    <FontAwesomeIcon 
                        icon={faTrash}
                    />
                </EButton>
                {showAccept &&
                <EButton className='ml-6'>
                    <FontAwesomeIcon 
                        icon={faUserCircle}
                        onClick={onImage}
                    />
                </EButton>}
                {!showAccept && (
                <EButton className='ml-6'
                onClick={onUpdate}
                >
                    <FontAwesomeIcon 
                        icon={faEdit}
                    />
                </EButton>
                )}
                {showAccept &&
                <EButton className='ml-6'>
                    <FontAwesomeIcon 
                        icon={faSquareCheck}
                        onClick={onAccept}
                    />
                </EButton>}
            </div>
        </div>
    )
}

export default UserItem