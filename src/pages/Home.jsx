import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>صفحه اصلی (Home)</h1>
      <p>به برنامه خوش آمدید.</p>
      <Link to="/dashboard">رفتن به داشبورد</Link>
    </div>
  );
}

export default Home;
