import Modal from "../../../../components/Modal";
import EButton from "../../../../components/EButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { OrdinaryUsersContext } from "../../../../context/OrdinaryUserContext";
import { deleteOrdinaryUser } from "../../../../services/userServices";

const UserDeleteModal = ({onClose:handleClose, userId, ...props}) => {

    const [deleted, setDeleted] = useState(false)
    const [countDown, setCountDown] = useState(3)
    const {dispatchUsers} = useContext(OrdinaryUsersContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (deleted){
            const timerID = setTimeout(handleClose, 3000);
            const countDownID = setInterval(() => {console.log("interval running"); setCountDown(prev=>prev-1)}, 1000)
            return () => {
                clearTimeout(timerID)
                clearInterval(countDownID)
            }
        }
    }, [deleted, handleClose])

    const handleDeleteUser = () => {
        const deleteUser = async () => {
            setLoading(true)
            const result = await deleteOrdinaryUser(userId)
            console.log(result);
            dispatchUsers({type: "delete", payload: userId})
            setLoading(false)
            setDeleted(true)
        }
        deleteUser()
    }

    return (
        <Modal className="flex justify-center items-center">
            <div className="relative w-[400px] bg-white rounded-xl">
                <EButton className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-white shadow-md w-[30px] h-[30px] rounded-full"
                    onClick={handleClose}
                    disabled={loading}
                >
                    <FontAwesomeIcon icon={faClose} />
                </EButton>
                <h3 className="text-xl font-semibold m-auto w-fit mt-4">Are you sure to delete this account ?</h3>
                <div className="flex m-5">
                    {loading? 
                    <div className="m-auto p-3">
                        <FontAwesomeIcon className=" animate-spin" icon={faSpinner} />
                    </div>
                    :deleted?
                    <div className="flex flex-col w-full">
                        <h3 className="text-center w-full">This modal will be automatically close in</h3>
                        <h3 className="text-center text-2xl w-full">{countDown}</h3>
                    </div>
                    :<>
                        <EButton className="w-1/2 p-3 rounded-lg shadow-md font-semibold text-green-600  hover:shadow-lg transition-all mr-3 "
                            focus
                            onClick={handleClose}
                        >
                            No
                        </EButton>
                        <EButton className="w-1/2 p-3 rounded-lg shadow-md font-semibold text-red-400 hover:shadow-lg transition-all "
                            onClick={handleDeleteUser}
                        >
                            Yes
                        </EButton>
                    </>}
                </div>
            </div>
        </Modal>
    )
}

export default UserDeleteModal
