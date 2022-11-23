import UserList from './components/UserList';
import { OrdinaryUserProvider } from '../../context/OrdinaryUserContext';

const UserManager = ({itemsPerPage = 10}) => {
    return (
        <div className='w-full h-full mb-[100px]'>
            <h3 className='text-3xl font-semibold mt-10 text-center text-[#806252]'>User Management</h3>
            <OrdinaryUserProvider>
                <UserList/>
            </OrdinaryUserProvider>
        </div>
    )
}

export default UserManager