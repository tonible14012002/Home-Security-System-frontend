import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EButton from "../../../../components/EButton";
import Modal from "../../../../components/Modal";

const UserImageModal = ({selectUser, onClose:handleClose }) => {

    return (
        <Modal className="flex justify-center items-center" >
            
            <div className="relative w-[700px] bg-mainCream/80 h-[700px] rounded-xl">
                <div className="absolute right-2 top-1 withHover">
                    <EButton
                    onClick={handleClose}
                    >
                        <FontAwesomeIcon 
                            icon={faXmark}
                            size={'2xl'}
                            color={'#7D6E83'}
                        />
                    </EButton>
                </div>
                <img className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] h-[90%] object-cover" alt="" src={selectUser.image} />
            </div>
        </Modal>
    )
}


export default UserImageModal