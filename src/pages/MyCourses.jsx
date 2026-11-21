import { useState } from "react";

const tabData = [
  { id: 1, title: "All" },
  { id: 2, title: "Active" },
  { id: 3, title: "Completed" },
  { id: 4, title: "Upcoming" },
];

const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    imageUrl: "/images/img1.jpg",
    rate: "4.5",
    tags: ["languages"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    imageUrl: "/images/img2.jpg",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your business safely without fear of new projects",
    imageUrl: "/images/img3.jpg",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Active",
  },
];

function MyCourses() {
  const [activeTabId, setActiveTabId] = useState(1);

  const activeTabTitle =
    tabData.find((tab) => tab.id === activeTabId)?.title || "All";

  const filteredCourses =
    activeTabTitle === "All"
      ? courses
      : courses.filter(
          (course) =>
            course.status.toLowerCase() === activeTabTitle.toLowerCase(),
        );

  return (
    <>
      <Header
        activeTabId={activeTabId}
        onSelectTab={setActiveTabId}
        totalCourses={filteredCourses.length}
      />

      <CourseList courses={filteredCourses} />

      <Footer />
    </>
  );
}

function Header({ activeTabId, onSelectTab, totalCourses }) {
  return (
    <div>
      <h1>My Courses ({totalCourses})</h1>
      <NavBar activeTabId={activeTabId} onSelectTab={onSelectTab} />
    </div>
  );
}

function NavBar({ activeTabId, onSelectTab }) {
  return (
    <div className="course-status">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onSelectTab(tab.id)}
          className={activeTabId === tab.id ? "active" : ""}
        >
          <span>{tab.title}</span>
          <span className="tab-indicator"></span>
        </button>
      ))}
    </div>
  );
}

function CourseList({ courses }) {
  if (courses.length === 0) {
    return (
      <p style={{ padding: "1rem" }}>هیچ دوره‌ای در این وضعیت یافت نشد.</p>
    );
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__image">
        <img src={course.imageUrl} alt={`image-${course.id}`} />
      </div>

      <div className="course-item__detail">
        <CourseCardBody
          title={course.title}
          description={course.description}
          rate={course.rate}
        />

        <CourseCardFooter
          tags={course.tags}
          start={course.start}
          status={course.status}
        />
      </div>
    </div>
  );
}

function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>

      <span className="rate">⭐️{rate}</span>
    </div>
  );
}

function CourseCardFooter({ tags, start, status }) {
  const startedAt = new Date(start).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="badge badge--secondary">
            {tag}
          </span>
        ))}
      </div>

      <div className="caption">
        <div className="date">{startedAt}</div>

        <span
          className={`badge ${
            status === "Active"
              ? "badge--primary"
              : status === "Upcoming"
                ? "badge--danger"
                : "badge--secondary"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      You have successfully passed <strong>33%</strong> of your courses!
      <div className="footer-credit">Made with coffee by Phi</div>
    </div>
  );
}

export default MyCourses;
