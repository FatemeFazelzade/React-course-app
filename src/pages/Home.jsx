import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">Learn. Grow. Succeed.</span>

          <h1>
            Build with
            <span> Phi.</span>
          </h1>

          <p>
            Learn practical skills through simple, focused, and high-quality
            online courses.
          </p>

          <div className="home-hero__actions">
            <Link to="/dashboard" className="home-button home-button--primary">
              Explore courses
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/dashboard"
              className="home-button home-button--secondary"
            >
              Go to dashboard
            </Link>
          </div>
        </div>

        <div className="home-hero__card">
          <BookOpen size={32} />

          <div>
            <strong>Start learning today</strong>
            <span>Improve your skills step by step.</span>
          </div>
        </div>
      </section>

      <section className="home-features">
        <article className="home-feature">
          <BookOpen size={24} />
          <h2>Practical courses</h2>
          <p>Focus on useful skills you can apply immediately.</p>
        </article>

        <article className="home-feature">
          <Users size={24} />
          <h2>Expert instructors</h2>
          <p>Learn from instructors with real-world experience.</p>
        </article>

        <article className="home-feature">
          <Award size={24} />
          <h2>Track your progress</h2>
          <p>Follow your learning journey from one dashboard.</p>
        </article>
      </section>
    </main>
  );
}

export default Home;
