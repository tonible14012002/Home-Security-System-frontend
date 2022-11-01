import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import ModalLayout from '../../layouts/ModalLayout';
import EditProfile from '../../components/Editprofile';
import EButton from '../../components/EButton'



const UserManager = () => {
    return (
        <div className='w-full h-full'>
            <h3 className='text-3xl font-semibold mt-10 text-center'>Users Management</h3>
            <div className='flex flex-col w-[1200px] m-auto mt-10'>
                <div className='table bg-zinc-300 h-[700px]'></div>
                <div className='m-5'>
                    <EButton className='bg-[#9F8772] rounded-full 
                        w-[45px] h-[45px] hover:bg-[#8d7263] transition-all'>
                        asdf
                    </EButton>
                </div>
            </div>
        </div>
    )
}

export default UserManager