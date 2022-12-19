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
import { useAuthContext } from '../../context/AuthContext';

const Sidebar = ({closeSidebar}) => {
  const {user, logoutClient} = useAuthContext()
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== activeLink){
      setActiveLink(location.pathname);
      closeSidebar()
    } 
  }, [location]);

  return (
    <div className="flex flex-col gap-[30px] p-[10px] text-black w-[70px] items-center  h-[100vh]">
      <div className="w-[4.5rem] h-[4.5rem] my-6 rounded-full positive border overflow-hidden"> 
        <img className='absoulte w-[100%] h-[100%] object-fit' alt='' src='https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-home-security-design-concept-png-image_5310483.png' /> 
      </div>
      <div className="flex flex-col gap-[40px] items-center justify-center">
        <Link to={user.is_staff ? '/admin' : '/'}>
          {activeLink === '/' || activeLink === '/admin' ? (
            <HomeIconS className="w-10 h-10 withHover" />
          ) : (
            <HomeIcon className="w-10 h-10 withHover" />
          )}
        </Link>

        {user.is_staff && (
          <>
            <Link to="/user-management/confirm">
              {activeLink === '/user-management/confirm' ? (
                <ChartBarSquareIconS className="w-10 h-10 withHover" />
              ) : (
                <ChartBarSquareIcon className="w-10 h-10 withHover" />
              )}
            </Link>
            <Link to="/user-management/unconfirm">
              {activeLink === '/user-management/unconfirm' ? (
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
        <ArrowLeftOnRectangleIcon onClick={logoutClient} className="w-10 h-10 withHover text-mainRed" />
      </div>
    </div>
  );
};

export default Sidebar;
