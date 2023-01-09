import React, { useState, useEffect } from 'react'
import {ArrowUturnLeftIcon, EllipsisHorizontalIcon} from "@heroicons/react/24/solid"
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon as UserCircleIconS } from '@heroicons/react/24/solid'
import { useNavigate, useParams } from 'react-router-dom'
import { arrayUnion, doc, onSnapshot, serverTimestamp, Timestamp, updateDoc, date } from "firebase/firestore";
import { db } from '../../../firebase' 
import { useAuthContext } from '../../../context/AuthContext'
import { v4 as uuid } from "uuid";
import { useRef } from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')

const adminPhone = "0912382173"

const convertTimestamp = (timestamp) => {
	let date = timestamp.toDate();

	return timeAgo.format(date);
}

const ChatPanel = ({selectUser,setRefreshLastMessage}) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("")
  const {user} = useAuthContext()
  const {chatId} = useParams() 
  const navigate = useNavigate()
  const messagesRef = useRef()

  const handleSendMessage = async (e) => {
    e.preventDefault()

    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: user.phone,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", chatId), {
      lastMessage: text,
      date: serverTimestamp(),
    });
    setText("");
  }

  useEffect(() => {
    let unSub = () => {}
    if(chatId){
       unSub = onSnapshot(doc(db, "chats", chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
    }

    return () => {
      unSub();
    };
  }, [chatId])

  useEffect(() => {
    if(user && !user.is_staff) navigate(`/messages/${adminPhone + user.phone}`)
  }, [user])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          })
    }
    setRefreshLastMessage(prev => !prev)

  },
  [messages])

  return (
    <div className='flex-[45%] flex flex-col justify-between h-[100vh]'>
        {user.is_staff ? (<>
          {selectUser ? (
            <>
              <div className='flex px-4 items-center justify-between h-[70px] bg-mainPurple'>
                <h1 className='text-2xl font-semibold text-mainCream'>{selectUser.name}</h1>
                {/* <span><EllipsisHorizontalIcon className='h-8 w-8 text-mainCream withHover'/></span> */}
            </div>

        <div className= 'h-[90vh] overflow-y-scroll py-10 px-3'  >
            {messages && messages.map((message,i) => (
               <div ref={i === messages.length - 1 ? messagesRef : null} className={`flex ${message.senderId === user.phone ? 'flex-row-reverse' : ''} gap-2 mb-2`}>
                <div>
                  {message.senderId === user.phone ? (
                    <UserCircleIconS className='h-20 w-20' />
                  ) : (
                    <UserCircleIcon className='h-20 w-20' />
                  )}
                </div>
                <div className='flex flex-col gap-1 bg-mainCream rounded-2xl py-2 px-4'>
                      <p className='text-lg md:text-xl  max-w-xs tablet:max-w-md break-all'>{message.text}</p>
                      <p className='text-md text-mainPurple italic'>{convertTimestamp(message.date)}</p>
                  </div>
           </div>
            ))}
           
        </div>

        <form onSubmit={handleSendMessage}>
          <div className='flex'>
              <div className='w-[94%]'>
                <input value={text} onChange={(e) => setText(e.target.value)} className='outline-none w-[100%] h-[60px] p-2 text-xl bg-mainBrown placeholder:text-mainPurple' placeholder='Type something' />
              </div>
              <button onClick={handleSendMessage} type="submit" className='flex items-center justify-center withHover bg-mainPurple flex-1'>
                  <ArrowUturnLeftIcon className='h-8 w-8 text-mainCream' />
              </button>
          </div>
        </form>          
       
            </>
        ) : (
          <h1 className='mt-20 text-center text-4xl font-semibold text-mainPurple'>Choose a conversation!</h1>
        )}
        </>) : (
           <>
           <div className='flex px-4 items-center justify-between h-[70px] bg-mainPurple'>
             <h1 className='text-2xl font-semibold text-mainCream'>Chat with admin</h1>
             {/* <span><EllipsisHorizontalIcon className='h-8 w-8 text-mainCream withHover'/></span> */}
         </div>

          <div className= 'h-[90vh] overflow-y-scroll py-10 px-3' >
              {messages && messages.map((message,i) => (
                  <div ref={i === messages.length - 1 ? messagesRef : null} className={`flex ${message.senderId === user.phone ? 'flex-row-reverse' : ''} gap-2 mb-2`}>
                  <div>
                    {message.senderId === user.phone ? (
                      <UserCircleIconS className='h-20 w-20' />
                    ) : (
                      <UserCircleIcon className='h-20 w-20' />
                    )}
                  </div>
                  <div className='flex flex-col gap-1 bg-mainCream rounded-2xl py-2 px-4'>
                        <p className='text-base md:text-xl max-w-xs tablet:max-w-md break-all'>{message.text}</p>
                        <p className='text-md text-mainPurple italic'>{convertTimestamp(message.date)}</p>
                    </div>
              </div>
              ))}
              
          </div>

          <form onSubmit={handleSendMessage}>
            <div className='flex'>
                <div className='w-[85%] tablet:w-[94%]'>
                  <input value={text} onChange={(e) => setText(e.target.value)} className='outline-none w-[100%] h-[60px] p-2 text-xl bg-mainBrown placeholder:text-mainPurple' placeholder='Type something' />
                </div>
                <button onClick={handleSendMessage} type="submit" className='flex items-center justify-center withHover bg-mainPurple flex-1'>
                    <ArrowUturnLeftIcon className='h-8 w-8 text-mainCream' />
                </button>
            </div>
          </form>          
    
         </>
        )}
        
    </div>
  )
}

export default ChatPanel