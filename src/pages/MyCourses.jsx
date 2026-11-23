import { useState } from "react";
import "./DashboardPages.css";

const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "Language lessons with the most popular teachers",
    rate: "4.5",
    tags: ["languages"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description: "Lesson on planning design concept and proper work structure",
    rate: "4.8",
    tags: ["design"],
    start: "2021-09-01T20:46:30.615Z",
    status: "Active",
  },
  {
    id: 3,
    title: "React Advanced Patterns",
    description: "Deep dive into modern React architecture and hooks",
    rate: "4.9",
    tags: ["development"],
    start: "2021-10-01T20:46:30.615Z",
    status: "Upcoming",
  },
];

function NavBar({ activeTabId, onSelectTab }) {
  const tabs = [
    { id: 1, title: "All" },
    { id: 2, title: "Active" },
    { id: 3, title: "Completed" },
    { id: 4, title: "Upcoming" },
  ];

  return (
    <div className="course-status">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={activeTabId === tab.id ? "active" : ""}
          onClick={() => onSelectTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}

function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p className="muted-text">No courses found in this category.</p>;
  }

  return (
    <div className="course-list-grid" style={{ marginTop: "1rem" }}>
      {courses.map((course) => (
        <div
          key={course.id}
          className="content-card"
          style={{ padding: "1rem", marginBottom: "0.75rem" }}
        >
          <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>
            {course.title}
          </h3>
          <p
            style={{
              margin: 0,
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
            }}
          >
            {course.description}
          </p>
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.75rem",
              color: "var(--primary)",
            }}
          >
            Status: {course.status}
          </div>
        </div>
      ))}
    </div>
  );
}

function MyCourses() {
  const [activeTabId, setActiveTabId] = useState(1);

  const active = courses.filter((course) => course.status === "Active").length;
  const completed = courses.filter(
    (course) => course.status === "Completed",
  ).length;

  const completion = courses.length
    ? Math.round((completed / courses.length) * 100)
    : 0;

  const summary = [
    {
      label: "Total Courses",
      value: courses.length,
      color: "blue",
      icon: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z M4 17.5A2.5 2.5 0 0 1 6.5 15H20 M12 3v12",
    },
    {
      label: "Active Courses",
      value: active,
      color: "purple",
      icon: "M8 5v14l11-7z",
    },
    {
      label: "Completed Courses",
      value: completed,
      color: "green",
      icon: "m4 12 5 5L20 6",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    if (activeTabId === 1) return true;
    if (activeTabId === 2) return course.status === "Active";
    if (activeTabId === 3) return course.status === "Completed";
    if (activeTabId === 4) return course.status === "Upcoming";

    return true;
  });

  return (
    <section className="dashboard-page my-courses-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">LEARNING</span>
          <h1>My Courses</h1>
          <p>Browse your courses and track your learning progress.</p>
        </div>
      </div>

      <div className="payment-summary">
        {summary.map(({ label, value, color, icon }) => (
          <article className="summary-card" key={label}>
            <div className={`summary-icon ${color}`}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={icon} />
              </svg>
            </div>

            <div>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="content-card">
        <div className="card-header">
          <div>
            <h2>Course Library</h2>
            <p>
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>
        </div>

        <NavBar activeTabId={activeTabId} onSelectTab={setActiveTabId} />
        <CourseList courses={filteredCourses} />

        <p className="muted-text">
          Learning progress: <strong>{completion}%</strong> completed
        </p>
      </div>
    </section>
  );
}

export default MyCourses;
