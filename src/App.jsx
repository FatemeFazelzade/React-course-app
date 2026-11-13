import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={<h2 style={{ padding: "2rem" }}>صفحه پیدا نشد (404)</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
