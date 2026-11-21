import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <AppNav />
      <Outlet />
    </div>
  );
}

export default Layout;
