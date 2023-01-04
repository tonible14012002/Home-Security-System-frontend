import { UserCircleIcon } from "@heroicons/react/24/outline"
import {
  collection, doc, getDoc, getDocs,
  setDoc
} from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import { useMemo } from "react"
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../context/AuthContext'
import { db } from '../../../firebase'


const PeopleList = ({setSelectUser, refreshLastMessages}) => {
  const [select, setSelect] = useState(null)
  const { user } = useAuthContext();
  const navigate = useNavigate()
  const [chats, setChats] = useState([])
  const [search, setSearch] = useState('');

  const filteredUser = useMemo(() => {
    return chats.filter((chat) =>
      chat.userInfo.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [chats, search]);
 
  const handleSelect = async (combinedId, userInfo) => {
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }

      navigate(`/messages/${combinedId}`)
      setSelect(combinedId)
      setSelectUser(userInfo)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const getChats = async () => {
      const querySnapshot = await getDocs(collection(db, "userChats"));
      let tempChats = []
      querySnapshot.forEach((doc) => {
        tempChats.push(doc.data())
      });
      setChats(tempChats)
      };
     user && user.is_staff && getChats();
  }, [user, refreshLastMessages]);

  return (
    <div className='flex-1 bg-mainCream'>
      <div className='pt-8'>  
        <h1 className='text-4xl font-semibold text-center'>Chat with {user.is_staff ? 'users' : 'admins'}</h1>

        <div className='mt-16'>
          <input value={search} onChange={e => setSearch(e.target.value)} className='h-16 px-2 bg-transparent w-[100%] outline-none placeholder:text-mainPurple' placeholder='Find users'/>
          <div>
              {filteredUser && filteredUser.map(chat => (
                 <div className={`${select === chat.combinedId ? 'bg-mainBrown' : ''} flex p-2 gap-2 items-center withHover`} onClick={() => handleSelect(chat.combinedId, chat.userInfo)}>
                    <div>
                      <UserCircleIcon className='h-20 w-20' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h1 className='text-2xl'>{chat.userInfo.name}</h1>
                      <p className='text-lg text-mainPurple'>{chat.lastMessage.length > 30 ? chat.lastMessage.substring(0,30) + "..." : chat.lastMessage}</p>
                    </div>
               </div>
              ))}
             
          </div>

        </div>
      </div>
    </div>
  )
}

export default PeopleList