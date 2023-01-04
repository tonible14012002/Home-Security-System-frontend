import Modal from "../../../../components/Modal";
import EButton from "../../../../components/EButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { OrdinaryUsersContext, UnConfirmOrdUserContext } from "../../../../context/OrdinaryUserContext";
import { acceptOrdinaryUser } from "../../../../services/userServices";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useAuthContext } from "../../../../context/AuthContext";

const UserAcceptModal = ({onClose: handleClose, selectUser, unConfirm, ...props}) => {
    const {user} = useAuthContext()
    const [accepted, setAccepted] = useState(false)
    const [countDown, setCountDown] = useState(3)
    const {dispatchUsers} = useContext(unConfirm ? UnConfirmOrdUserContext:OrdinaryUsersContext)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (accepted){
            const timerID = setTimeout(handleClose, 3000);
            const countDownID = setInterval(() => {console.log("interval running"); setCountDown(prev=>prev-1)}, 1000)
            return () => {
                clearTimeout(timerID)
                clearInterval(countDownID)
            }
        }
    }, [accepted, handleClose])

    const handleAcceptUser = async () => {
        setLoading(true)
        const result = await acceptOrdinaryUser(selectUser.id)
        dispatchUsers({type: "delete", payload: selectUser.id})
       
        let combinedId = user.phone + selectUser.phone

        await setDoc(doc(db, "userChats", combinedId), {
            combinedId,
            userInfo:{
                phone: selectUser.phone,
                name: selectUser.first_name + " " + selectUser.last_name
            },
            date: serverTimestamp()
        });
    
        setLoading(false)
        setAccepted(true)
    }

    return (
        <Modal className="flex justify-center items-center" >
            <div className="relative w-[400px] bg-white rounded-xl">
                <EButton className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-white shadow-md w-[30px] h-[30px] rounded-full"
                    onClick={handleClose}
                    disabled={loading}
                >
                    <FontAwesomeIcon icon={faClose} />
                </EButton>
                <h3 className="text-xl font-semibold m-auto w-fit mt-4">Accept user's registeration ?</h3>
                <div className="flex m-5">
                    {loading? 
                    <div className="m-auto p-3">
                        <FontAwesomeIcon className=" animate-spin" icon={faSpinner} />
                    </div>
                    :accepted?
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
                            onClick={handleAcceptUser}
                        >
                            Yes
                        </EButton>
                    </>}
                </div>
            </div>
        </Modal>
    )
}


export default UserAcceptModal