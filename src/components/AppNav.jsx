import { House, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="app-nav">
      <NavLink end to="/" className="app-nav__link">
        <House size={20} strokeWidth={2} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/dashboard" className="app-nav__link">
        <LayoutDashboard size={20} strokeWidth={2} />
        <span>Dashboard</span>
      </NavLink>
    </nav>
  );
}

export default AppNav;
