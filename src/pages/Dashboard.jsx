import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}
export default Dashboard;
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Phi</h2>

      <nav className="sidebar-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>📚</span>
          <span>My Courses</span>
        </NavLink>

        <NavLink
          to="payments"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>💳</span>
          <span>Payments</span>
        </NavLink>

        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>👤</span>
          <span>Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
}
