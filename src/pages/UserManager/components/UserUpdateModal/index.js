import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EButton from "../../../../components/EButton"
import Modal from "../../../../components/Modal"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { OrdinaryUsersContext } from "../../../../context/OrdinaryUserContext"
import userApi from "../../../../api/userApi"
import { useForm } from "react-hook-form"

const UserUpdateModal = ({onClose:handleClose, userId}) => {
    const {loading, setLoading, setRefetch} = useContext(OrdinaryUsersContext)
    const [updated, setUpdated] = useState(false)
    const [user, setUser] = useState()

    const { register, handleSubmit , setValue} = useForm({
        defaultValues: {
          first_name: '',
          last_name: '',
          phone: '',
          address: '',
          birth: '',
        },
      })

    const handleUpdateUserSubmit = async (values) => {
        try {
            setLoading(true)
            await userApi.updateUserById({id: user.id,...values })
            handleClose()
            setRefetch({})
          } catch (error) {
            console.log(error)
          }
          setLoading(false)
    }

    const getUserById = async () => {
        try {
            const res = await userApi.getUserById(userId)
            if(res && res.data) setUser(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(userId) {
            getUserById()
        }
    }, [userId])

    useEffect(() => {
        if(user){
          setValue('first_name', user.first_name)
          setValue('last_name', user.last_name)
          setValue('phone', user.phone)
          setValue('address', user.address)
          setValue('birth', user.birth)
        }
      }, [user])

      console.log({user})

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
                <form onSubmit={handleSubmit(handleUpdateUserSubmit)} className="flex flex-col gap-2 p-5">
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="first_name" className="text-sm font-semibold text-[#7D6E83]">First Name</label>
                            <input {...register("first_name")} name="first_name" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading} required
                            />
                        </div>
                        </div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="last_name" className="text-sm font-semibold text-[#7D6E83]">Last Name</label>
                            <input {...register("last_name")} name="last_name" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading} required
                            />
                        </div>
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-[#7D6E83]">Phone No</label>
                            <input {...register("phone")} name="phone" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="address" className="text-sm font-semibold text-[#7D6E83]">Addresc</label>
                            <input {...register("address")} name="address" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#F8EDE3] flex flex-col rounded-md pl-4 pr-4 pt-2 pb-2">
                            <label htmlFor="birth" className="text-sm font-semibold text-[#7D6E83]">Birth</label>
                            <input {...register("birth")} name="birth" type="date" className={`text-md font-semibold text-[#b29782] bg-transparent outline-none ${loading&&""}`} 
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <button className="bg-[#D0B8AB] font-semibold text-lg text-[#7D6E83] p-4 rounded-md hover:bg-[#bca295] transition-all"
                        disabled={loading}
                        type="submit"
                    >
                        {loading? 
                        <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
                        :updated?
                        "Updated successfully"
                        :"Update"}
                    </button>
                </form>
            </div>

        </Modal>
    )
}

export default UserUpdateModal