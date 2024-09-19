import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="container py-20 mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
