import { Link } from "react-router-dom";

export default function WormGameCaseStudy() {
  return (
    <div className="case-study">

      {/* BACK BUTTON */}
      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Back to homepage
        </Link>
      </div>

      {/* HERO */}
      <div className="case-hero">
        <h1>Worm Catching Game (2024)</h1>

        <div className="case-meta">
          <span>🎮 Web Game</span>
          <span>⚛️ JavaScript</span>
          <span>📅 2024</span>
        </div>

        <p className="case-intro">
          A browser-based game built as part of a web development assignment
          during my Bachelor of Computing Systems at Unitec.
        </p>
      </div>

      {/* TECHNOLOGIES */}
      <h2>Technologies Used</h2>

      <div className="case-card">
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      {/* CASE STUDY */}
      <h2>Case Study</h2>

      <div className="case-card">
        <p>
          Case study in progress.
        </p>
      </div>

    </div>
  );
}