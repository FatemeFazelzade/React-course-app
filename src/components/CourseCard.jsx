function CourseCard({ course }) {
  return (
    <div>
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
    </div>
  );
}

export default CourseCard;

function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}

function CourseCardFooter({ tags, start, status }) {
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
        <div className="date">
          {new Date(start).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <span className="badge badge--primary">{status}</span>
      </div>
    </div>
  );
}
