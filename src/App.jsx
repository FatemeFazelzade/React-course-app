import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MyCourses />} />
            <Route path="payments" element={<Payments />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="*"
            element={<h2 style={{ padding: "2rem" }}>صفحه پیدا نشد (404)</h2>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
