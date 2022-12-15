import {
  HomeIcon,
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ChartBarSquareIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';

import {
  HomeIcon as HomeIconS,
  ChatBubbleBottomCenterIcon as ChatBubbleBottomCenterIconS,
  Cog6ToothIcon as Cog6ToothIconS,
  ArrowLeftOnRectangleIcon as ArrowLeftOnRectangleIconS,
  ChartBarSquareIcon as ChartBarSquareIconS,
  ClipboardDocumentIcon as ClipboardDocumentIconS,
} from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [admin, setAdmin] = useState(true);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== activeLink) setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="flex flex-col gap-[30px] p-[10px] text-black w-[70px] items-center  h-[100vh]">
      <div className="w-14 h-14 my-6 rounded-full bg-blue-400"> </div>
      <div className="flex flex-col gap-[40px] items-center justify-center">
        <Link to="/">
          {activeLink === '/' ? (
            <HomeIconS className="w-10 h-10 withHover" />
          ) : (
            <HomeIcon className="w-10 h-10 withHover" />
          )}
        </Link>

        {admin && (
          <>
            <Link to="/user-management">
              {activeLink === '/user-management' ? (
                <ChartBarSquareIconS className="w-10 h-10 withHover" />
              ) : (
                <ChartBarSquareIcon className="w-10 h-10 withHover" />
              )}
            </Link>
            <Link to="/user-registeration">
              {activeLink === '/user-registeration' ? (
                <ClipboardDocumentIconS className="w-10 h-10 withHover" />
              ) : (
                <ClipboardDocumentIcon className="w-10 h-10 withHover" />
              )}
            </Link>
          </>
        )}
        <Link to="/messages">
          {activeLink === '/messages' ? (
            <ChatBubbleBottomCenterIconS className="w-10 h-10 withHover" />
          ) : (
            <ChatBubbleBottomCenterIcon className="w-10 h-10 withHover" />
          )}
        </Link>
        <Link to="/settings">
          {activeLink === '/settings' ? (
            <Cog6ToothIconS className="w-10 h-10 withHover" />
          ) : (
            <Cog6ToothIcon className="w-10 h-10 withHover" />
          )}
        </Link>
        <ArrowLeftOnRectangleIcon className="w-10 h-10 withHover text-mainRed" />
      </div>
    </div>
  );
};

export default Sidebar;
