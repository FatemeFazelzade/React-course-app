import { useState } from "react";

const tabData = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Active",
  },
  {
    id: 3,
    title: "Completed",
  },
  {
    id: 4,
    title: "Upcoming",
  },
];

function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <NavBar />
    </div>
  );
}

export default Header;

function NavBar() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={`course-status`}>
      {tabData.map((tab) => (
        <button
          onClick={() => setActiveTab(tab.id)}
          key={tab.id}
          className={activeTab === tab.id ? "active" : ""}
        >
          {" "}
          <span>{tab.title}</span>
          <span className="tab-indicator"></span>
        </button>
      ))}
    </div>
  );
}
