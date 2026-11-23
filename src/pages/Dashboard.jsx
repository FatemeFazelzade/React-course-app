import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

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
