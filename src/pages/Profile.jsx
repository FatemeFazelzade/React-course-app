import "./DashboardPages.css";

function Profile() {
  return (
    <section className="dashboard-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">ACCOUNT</span>
          <h1>Profile</h1>
          <p>Manage your personal information and account settings.</p>
        </div>

        <button className="primary-button">Save Changes</button>
      </div>

      <div className="profile-grid">
        <div className="content-card profile-card">
          <div className="profile-cover">
            <div className="profile-avatar">F</div>
          </div>

          <div className="profile-info">
            <h2>Fateme Fazelzade</h2>
            <p>Frontend Developer</p>
            <span className="member-since">Member since October 2026</span>
          </div>

          <button className="outline-button">Change Photo</button>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div>
              <h2>Personal Information</h2>
              <p>Update your personal details</p>
            </div>
          </div>

          <form className="profile-form">
            <label>
              Full Name
              <input type="text" defaultValue="Fateme Fazelzade" />
            </label>

            <label>
              Email Address
              <input type="email" defaultValue="fateme@example.com" />
            </label>

            <label>
              Job Title
              <input type="text" defaultValue="Frontend Developer" />
            </label>

            <label>
              Location
              <input type="text" defaultValue="Tehran, Iran" />
            </label>

            <label className="full-width">
              About
              <textarea
                rows="4"
                defaultValue="I am learning and building modern web applications with React."
              />
            </label>

            <div className="form-actions">
              <button type="button" className="secondary-button">
                Cancel
              </button>
              <button type="submit" className="primary-button">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="content-card account-settings">
        <div className="card-header">
          <div>
            <h2>Account Settings</h2>
            <p>Manage your account preferences</p>
          </div>
        </div>

        <div className="setting-row">
          <div>
            <strong>Email Notifications</strong>
            <span>Receive updates about your courses and payments.</span>
          </div>

          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-row">
          <div>
            <strong>Weekly Learning Reminder</strong>
            <span>Get a reminder to continue your learning journey.</span>
          </div>

          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Profile;
