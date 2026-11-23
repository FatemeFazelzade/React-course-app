import "./DashboardPages.css";

const transactions = [
  {
    id: "#PAY-1024",
    course: "React Advanced Patterns",
    date: "November 12, 2026",
    amount: "$49.00",
    status: "Paid",
  },
  {
    id: "#PAY-1018",
    course: "JavaScript Fundamentals",
    date: "October 28, 2026",
    amount: "$35.00",
    status: "Paid",
  },
  {
    id: "#PAY-1007",
    course: "UI Design Essentials",
    date: "October 10, 2026",
    amount: "$29.00",
    status: "Paid",
  },
];

function Payments() {
  return (
    <section className="dashboard-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">ACCOUNT</span>
          <h1>Payments</h1>
          <p>Manage your payments and view your purchase history.</p>
        </div>

        <button className="primary-button">Download Report</button>
      </div>

      <div className="payment-summary">
        <article className="summary-card">
          <div className="summary-icon purple">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <div>
            <span>Total Spent</span>
            <strong>$113.00</strong>
          </div>
        </article>

        <article className="summary-card">
          <div className="summary-icon blue">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" />
              <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
              <path d="M12 3v12" />
            </svg>
          </div>
          <div>
            <span>Purchased Courses</span>
            <strong>3</strong>
          </div>
        </article>

        <article className="summary-card">
          <div className="summary-icon green">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <span>Successful Payments</span>
            <strong>3</strong>
          </div>
        </article>
      </div>

      <div className="content-card">
        <div className="card-header">
          <div>
            <h2>Payment History</h2>
            <p>Your recent transactions</p>
          </div>

          <button className="secondary-button">View All</button>
        </div>

        <div className="table-wrapper">
          <table className="payments-table">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Course</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="transaction-id">{transaction.id}</td>
                  <td>{transaction.course}</td>
                  <td className="muted-text">{transaction.date}</td>
                  <td className="amount">{transaction.amount}</td>
                  <td>
                    <span className="status-badge success">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-card payment-method-card">
        <div className="card-header">
          <div>
            <h2>Payment Method</h2>
            <p>Your default payment method</p>
          </div>

          <button className="secondary-button">Edit</button>
        </div>

        <div className="payment-method">
          <div className="credit-card-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <div>
            <strong>Visa ending in 4242</strong>
            <span>Expires 12/28</span>
          </div>
          <span className="default-label">Default</span>
        </div>
      </div>
    </section>
  );
}

export default Payments;
