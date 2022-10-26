import Button from "../../components/Button"
import InputField from '../../components/InputField';
import {
    UserCircleIcon

} from '@heroicons/react/24/outline'
const Home = () => {

    return (
        <div className ='text-black mx-[150px] mt-[40px] text-xl' > 
        Welcome, <span className = 'font-bold'>User!</span>   
           
            <div className='flex flex-col items-center justify-center ml-[250px] mr-[250px] mt-[70px] leading-normal'> 
            <p className='font-bold text-2xl mb-[20px]'>My information</p>
            <InputField field="Full Name" type="text" />
            <InputField field="Phone No" type="text" />
            <InputField field="Address" type="text" />
            <InputField field="Date of Birth" type="text" />
            <InputField field="Date of Birth" type="text" />
            
            
            <div class="flex w-full mt-[15px] ">
            <UserCircleIcon className=" w-20 h-20" />
            <div> 
            <Button primary text="Change Avatar" />
            </div>
            </div>
            <Button primary text="Update" />
            </div> 
                
        </div>
    )
}

export default Home