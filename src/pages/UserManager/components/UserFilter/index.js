import EButton from "../../../../components/EButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { OrdinaryUsersContext } from "../../../../context/OrdinaryUserContext"
import { getOrdinaryUsers } from "../../../../services/userServices"

const UserFilter  = ({show, ...props}) => {

    const [showFilter, setShowFilter] = useState(false)
    const handleClick = () => {
        setShowFilter(prev => !prev)
    }

    return (
        <div className="flex justify-end gap-3">
            <UserSearch/>
            <div className="relative" > 
                <EButton className="bg-[#e2c7af] h-[45px] w-[45px] rounded-xl shadow-md hover:rotate-3"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faFilter}/> 
                </EButton>
                <FilterMenu hidden={!showFilter}/>
            </div>
        </div>
    )
}

const FilterMenu = ({hidden, ...props}) => {
    const {handleSubmit, register} = useForm()
    const {setLoading, dispatchUsers } = useContext(OrdinaryUsersContext)

    const onSubmit = async (data) => {
        console.log(data)
        setLoading(true)
        const newData = await getOrdinaryUsers(data)
        dispatchUsers({type: 'list', payload: newData})
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${hidden && 'hidden'} absolute bg-white shadow-md min-w-[200px] right-[-50px] top-[60px] rounded-lg overflow-hidden`}>
            <div className="flex flex-col w-full gap-2 px-4 py-3 ">
                <div className="flex flex-col w-full">
                    <h3 className="text-xl font-semibold">Ordering</h3>

                    <div htmlFor="" className="flex gap-1 items-center">
                        <input type="checkbox" 
                            id="firstname"
                            {...register('ordering')}
                            value='first_name'
                        />
                        <label htmlFor="firstname" className="p-1 font-normal">First name</label>
                    </div>

                    <div htmlFor="" className="flex gap-1 items-center">
                        <input type="checkbox" 
                            id="email"
                            {...register('ordering')}
                            value='email'
                        />
                        <label htmlFor="email" className="p-1 font-normal">Email</label>
                    </div>

                    <div className="flex gap-1 items-center">
                        <input type="checkbox" 
                            id="address"
                            {...register('ordering')}
                            value='address'
                        />
                        <label htmlFor="address" className="p-1 font-normal">Address</label>
                    </div>

                    <div className="flex gap-1 items-center">
                        <input type="checkbox" 
                            id="visits"
                            {...register('ordering')}
                            value='visits'
                        />
                        <label htmlFor="visits" className="p-1 font-normal">Recently visit</label>
                    </div>

                    <div className="flex gap-1 items-center">
                        <input type="checkbox" 
                            id="most-visits"
                            {...register('ordering')}
                            value='most_visits'
                        />
                        <label htmlFor="most-visits" className="p-1 font-normal">Most visit</label>
                    </div>
                </div>

            </div>
            <EButton className="w-full bg-[#e2c7af] font-semibold  h-[35px] hover:bg-[#d8bfa9] transition-all ">
                Filter
            </EButton>
        </form>
    )
}

const UserSearch = () => {

    const { register, handleSubmit, watch} = useForm();
    const {setLoading} = useContext(OrdinaryUsersContext)

    const onSubmit = (data)=> {

        if (!watch('search')) {
            return
        }

        const searchUser = async () => {
            if (0) return
            setLoading(true)
            const result = await new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, 1000);
            })

            setLoading(false)
        }
        searchUser()

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="group shadow-md rounded-xl overflow-hidden">
            <input className="w-0 focus:px-3 focus:w-[200px] group-hover:px-3 group-hover:w-[200px] transition-all h-[45px]  bg-white shadow-md outline-none"
                {...register('ordering')}
            />
            <EButton className="w-[45px] h-[45px] bg-[#e2c7af]">
                <FontAwesomeIcon icon={faSearch} />
            </EButton>
        </form>
    )
}


export default UserFilter 