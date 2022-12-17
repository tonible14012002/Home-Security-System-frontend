import UserList from './components/UserList';
import { OrdinaryUserProvider, UnConfirmOrdUserProvider } from '../../context/OrdinaryUserContext';
import { useParams } from 'react-router-dom';

const UserManager = ({itemsPerPage = 10}) => {
    const { status } = useParams()
    const showConfirmedUsers = status === 'confirmed'

    return (
        <div className='w-full h-full mb-[100px]'>
            <h3 className='text-3xl font-semibold mt-10 text-center text-[#806252]'>User Management</h3>
            <OrdinaryUserProvider>
                <UnConfirmOrdUserProvider>
                    <UserList 
                        unConfirm={!showConfirmedUsers}
                    />
                </UnConfirmOrdUserProvider>
            </OrdinaryUserProvider>

        </div>
    )
}

export default UserManager