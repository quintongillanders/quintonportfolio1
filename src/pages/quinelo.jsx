import { Link } from "react-router-dom";

import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";

export default function Quinelo() {
  return (
    <div className="case-study">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to homepage
        </Link>
      </div>

      {/* HERO: Add a project image here later if needed. */}
      <div className="case-hero">
        <h1>quinelo</h1>

        <div className="case-meta">
          <span><SchoolIcon /> Education Tool</span>
          <span><BuildIcon /> In Development</span>
          <span><CalendarMonthIcon /> Date TBC</span>
        </div>

        <p className="case-intro">
          "quinelo" is an education tool in development designed to help teachers
          save time when preparing quizzes.
        </p>
      </div>


      <img
          src="/quinelo.png"
          alt="quinelo project screenshot"
          className="case-image"
        />



      {/* OVERVIEW: Replace this text as the project develops. */}
      <section className="case-section">
        <h2>Overview</h2>
        <p>
          This is an upcoming project of mine. I had this idea in July 2026.
          The goal is to help teachers save time by generating quiz PDFs for their classrooms.
          More information on this site will be added the closer I get to releasing.
        </p>
      </section>

      {/* DETAILS: Add features or screenshots inside this card later. */}
      <section className="case-section">
        <h2>Project Details</h2>
        <div className="case-card">
          <p>Coming soon...</p>
        </div>
      </section>

      {/* LINKS: Add a live project or repository link here when available. */}
    </div>
  );
}
