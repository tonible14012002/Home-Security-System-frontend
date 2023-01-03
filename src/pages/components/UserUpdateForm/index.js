import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

const UserUpdateForm = ({
    id, 
    title,
    className,
    defaultValues,
    ...props
}) => {

    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm({
        defaultValues: defaultValues|| {
          first_name: '',
          last_name: '',
          phone: '',
          address: '',
          birth: '',
          image: '',
        },
    })

    const handleUpdateUserSubmit = () => {
        const updateUser = async () => {
            setLoading(true)
            setLoading(false)
        }

        updateUser()
    }
    
    return (
        <div className={`max-w-[400px] ${className}`}>
            <h3 className="text-center mb-4 text-2xl font-semibold">User Detail</h3>
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
                            <label htmlFor="address" className="text-sm font-semibold text-[#7D6E83]">Address</label>
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
                        :"Update"}
                    </button>
                </form>
        </div>
    )
}

export default UserUpdateForm