import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import userApi from '../../api/userApi';
import ReactPaginate from 'react-paginate';
import EButton from '../../components/EButton'
import VisitList from './components/VisitList';

const Admin = ({itemsPerPage=6}) => {

  const { user } = useContext(AuthContext)
  const [count, setCount] = useState(0)
  
  const fullName = (user.first_name + ' ' + user.last_name).trim()

  useEffect(() => {
    const countUser = async () => {
      try {
        const { data: {count} } = await userApi.countUser()
        setCount(count)
      }
      catch (e) { console.log(e) }
    }
    countUser()
  }, [])

  return (
    <div className="px-[200px] py-10 mb-[100px]">
      <h3 className="text-black text-2xl">
        Welcome, <span className="font-bold">{fullName || user.username}</span>
      </h3>
      <div className="mt-16">
        <div className="grid h-72 gird grid-cols-2 mb-10 gap-10">
          <div className="flex flex-col h-full bg-mainCream rounded-lg justify-center">
            <p className="font-bold text-4xl text-center">My Users</p>
            <p className="font-bold text-7xl mt-4 text-center">{count}</p>
          </div>
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              className=' object-cover h-full w-full'
              alt='Camera'
              src='http://10.130.38.75:5000/video_feed'
            />
          </div>
        </div>
        <VisitList />
      </div>
    </div>
  );
};

export default Admin;
