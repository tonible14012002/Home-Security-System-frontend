import Sidebar from '../../components/Sidebar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const DefaultLayout = ({ children, ...props }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex h-[100vh] w-[100vw] overflow-hidden">
      <div
        className="absolute right-2 top-2 tablet:hidden "
        onClick={() => setOpenSidebar(true)}
      >
        <Bars3Icon className="w-10 h-10 withHover" />
      </div>

      <div
        className={`${
          openSidebar ? 'translate-x-0' : 'hidden tablet:flex'
        } tablet:translate-x-0 tablet:relative absolute right-0 z-30 bg-white max-w-[35vw] flex flex-col items-center p-4 h-[100vh] w-[100%] tablet:max-w-[100px] border-r-2`}
      >
        <Sidebar />
        {openSidebar && (
          <div
            className="tablet:hidden absolute right-2 top-2"
            onClick={() => setOpenSidebar(false)}
          >
            <XMarkIcon className="w-10 h-10" />
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default DefaultLayout;
