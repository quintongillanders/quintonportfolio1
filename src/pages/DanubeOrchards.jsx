import { Link } from "react-router-dom";

export default function DanubeOrchards() {
  return (
    <div className="case-study">

      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Back to homepage
        </Link>
      </div>

      <div className="case-hero">

        <h1>Danube Orchards</h1>

        <div className="case-meta">
          <span>🍓 Family Business</span>
          <span>🌱 Orchard</span>
          <span>📍 Auckland</span>
        </div>

        <p className="case-intro">
          Coming Soon...
        </p>

      </div>

    </div>
  );
}