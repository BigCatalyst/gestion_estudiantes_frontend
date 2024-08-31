import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navigation from "./Navigation";
import { FaSchool } from "react-icons/fa";

const Layout = () => {
  return (
    <div className="layout">
      <aside className="menu">
        <FaSchool className="icon" />
        <h1>ESBU</h1>
        <Navigation />
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
