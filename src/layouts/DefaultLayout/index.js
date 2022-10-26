import Sidebar from '../../components/Sidebar';

const DefaultLayout = ({ children, ...props }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center p-4 gap-10 h-[100vh] w-[100%] max-w-[100px] border-r-2">
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DefaultLayout;
