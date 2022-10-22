
import {
    HomeIcon,ChatBubbleBottomCenterIcon,
    Cog6ToothIcon,ArrowLeftOnRectangleIcon,
    ChartBarSquareIcon,ClipboardDocumentIcon

} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const Sidebar = () => {
    const [admin, setAdmin] = useState(true)
  return (
    <div className='flex flex-col gap-[30px] p-[10px] text-black w-[70px] items-center  h-[100vh]'>
        <div className='w-10 h-10 my-6 rounded-full bg-blue-400'> </div>
        <div className='flex flex-col gap-[40px] items-center justify-center'>
        <HomeIcon className="w-8 h-8" />
        {admin && (
            <>
                <ChartBarSquareIcon className="w-8 h-8" />
                <ClipboardDocumentIcon className="w-8 h-8" />


            </>
        )}
        <ChatBubbleBottomCenterIcon className="w-8 h-8" />
        <Cog6ToothIcon className="w-8 h-8" />
        <ArrowLeftOnRectangleIcon className="w-8 h-8" />


        </div>
        
  

    </div>
  )
}

export default Sidebar