import { Link } from "react-router-dom";

export default function NZI() {
  return (
    <div className="case-study">

      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Back to homepage
        </Link>
      </div>

      <div className="case-hero">

        <h1>New Zealand Insulators</h1>

        <div className="case-meta">
          <span>🏭 Manufacturing</span>
          <span>📦 Warehouse</span>
          <span>📅 2017 - 2023</span>
        </div>

        <p className="case-intro">
          Information on this role coming soon
        </p>

      </div>

    </div>
  );
}