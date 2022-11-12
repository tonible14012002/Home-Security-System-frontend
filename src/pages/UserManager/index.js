import EButton from '../../components/EButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useEffect } from 'react';
import { getOrdinaryUsers } from '../../services/adminService';
import { useState } from 'react';
import UserItem from './components/UserItem'
import UserItemSkeleton from './components/UserItemSkeleton'
import ReactPaginate from 'react-paginate';
import UserList from './components/UserList';

const UserManager = ({itemsPerPage = 10}) => {

    const ordinaryUsers = useRef([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getUsers = async () => {
            setIsLoading(true)
            const results = await getOrdinaryUsers()
            ordinaryUsers.current = results
            setIsLoading(false)
        }
        getUsers()
    }, []);

    return (
        <div className='w-full h-full'>
            <h3 className='text-3xl font-semibold mt-10 text-center'>Users Management</h3>
            <UserList 
                users={ordinaryUsers.current}
                isLoading={isLoading}
            />
        </div>
    )
}



export default UserManager