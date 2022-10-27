import {
  HomeIcon,
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ChartBarSquareIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const Sidebar = () => {
  const [admin, setAdmin] = useState(true);
  return (
    <div className="flex flex-col gap-[30px] p-[10px] text-black w-[70px] items-center  h-[100vh]">
      <div className="w-14 h-14 my-6 rounded-full bg-blue-400"> </div>
      <div className="flex flex-col gap-[40px] items-center justify-center">
        <HomeIcon className="w-10 h-10 withHover" />
        {admin && (
          <>
            <ChartBarSquareIcon className="w-10 h-10 withHover" />
            <ClipboardDocumentIcon className="w-10 h-10 withHover" />
          </>
        )}
        <ChatBubbleBottomCenterIcon className="w-10 h-10 withHover" />
        <Cog6ToothIcon className="w-10 h-10 withHover" />
        <ArrowLeftOnRectangleIcon className="w-10 h-10 withHover text-mainRed" />
      </div>
    </div>
  );
};

export default Sidebar;
