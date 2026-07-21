import { Link } from "react-router-dom";

export default function SuccessTutoring() {
  return (
    <div className="case-study">

      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Back to homepage
        </Link>
      </div>

      <div className="case-hero">

        <h1>Success Tutoring New Lynn</h1>

        <div className="case-meta">
          <span>🤖 AI Education</span>
          <span>🎓 Tutor</span>
          <span>📅 2026</span>
        </div>

        <p className="case-intro">
          Information on this role coming soon
        </p>

      </div>

    </div>
  );
}