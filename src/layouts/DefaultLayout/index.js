import Sidebar from "../../components/Sidebar";

const DefaultLayout = ({ children, ...props }) => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">Content</div>
    </div>
  );
};

export default DefaultLayout;
