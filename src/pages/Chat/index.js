import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import ChatPanel from './components/ChatPanel'
import PeopleList from './components/PeopleList'

const Chat = () => {
  const [selectUser, setSelectUser] = useState(null)
  const {user} = useAuthContext()
  const [refreshLastMessages, setRefreshLastMessage] = useState(false)
  return (
    <div className='flex'>
        <ChatPanel setRefreshLastMessage={setRefreshLastMessage} selectUser={selectUser}/>
        {user.is_staff && (
          <PeopleList refreshLastMessages={refreshLastMessages} setSelectUser={setSelectUser}/>
        )}
    </div>
  )
}

export default Chat