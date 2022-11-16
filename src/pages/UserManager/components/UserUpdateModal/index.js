import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EButton from "../../../../components/EButton"
import Modal from "../../../../components/Modal"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { OrdinaryUsersContext } from "../../../../context/OrdinaryUserContext"

const UserUpdateModal = ({onClose:handleClose}) => {
    const {loading, setLoading} = useContext(OrdinaryUsersContext)
    const [updated, setUpdated] = useState(false)

    const handleSubmit = (values) => {
        if (loading) return
        const updateUser = async () => {
            setLoading(true)
            const result = await new Promise(resolve => setTimeout(()=>resolve(), 1000))
            setUpdated(true)
            setLoading(false)
        }
        updateUser()
    }
    return (
        <Modal className="flex justify-center items-center">
            <div className={`relative w-[400px] min-h-[400px] bg-white rounded-xl`}>
                <EButton className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white shadow-md w-[30px] h-[30px] rounded-full"
                    onClick={handleClose}
                    disabled={loading}
                > 
                    <FontAwesomeIcon icon={faClose} />
                </EButton>
                <h3 className="w-fit text-xl text-center m-auto mt-5 mb-5 font-semibold">Update User</h3>
                <form className="flex flex-col gap-2 p-5">
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="fullname" className="text-sm font-semibold text-[#7D6E83]">Fullname</label>
                            <input name="fullname" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading}
                            />
                        </div>
                        <span className="text-red-500 text-xs pl-2">This is error.</span>
                    </div>
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-[#7D6E83]">Phone No</label>
                            <input name="phone" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading}
                            />
                        </div>
                        <span className="text-red-500 text-xs pl-2">This is error.</span>
                    </div>
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="address" className="text-sm font-semibold text-[#7D6E83]">Addresc</label>
                            <input name="address" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading}
                            />
                        </div>
                        <span className="text-red-500 text-xs pl-2">This is error.</span>
                    </div>
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="birth" className="text-sm font-semibold text-[#7D6E83]">Birth</label>
                            <input name="birth" type="date" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading}
                            />
                        </div>
                        <span className="text-red-500 text-xs pl-2">This is error.</span>
                    </div>

                    <EButton className="bg-[#D0B8AB] font-semibold text-lg text-[#7D6E83] p-4 rounded-md hover:bg-[#bca295] transition-all"
                        disabled={loading}
                        onClick={(e) => {
                            e.preventDefault()
                            if (updated) {
                                setUpdated(false)
                                return
                            }
                            handleSubmit()
                        }}
                    >
                        {loading? 
                        <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
                        :updated?
                        "Updated successfully"
                        :"Update"}
                    </EButton>
                </form>
            </div>

        </Modal>
    )
}

export default UserUpdateModal