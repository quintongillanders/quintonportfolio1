import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

export default function TutorOS() {
  return (
    <div className="case-study">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to homepage
        </Link>
      </div>

      <div className="case-hero">
        <h1>Tutor OS</h1>
        <div className="case-meta">
          <span><SchoolIcon /> Tutoring Management Tool</span>
          <span><HourglassEmptyIcon /> Coming soon</span>
        </div>
        <p className="case-intro">
          Tutor OS is a web app I am developing in collaboration with Success Tutoring New Lynn to help tutors manage students
          and tutoring sessions in one place.
        </p>
      </div>

      <h2>What is Tutor OS?</h2>
      <div className="case-card">
        <p>
          Tutor OS brings student information and session records together,
          helping tutors stay organised with their day-to-day tutoring work.
          The goal is to make it easier to keep track of students and the
          sessions they attend.
        </p>
      </div>

      <h2>Coming soon</h2>
      <div className="case-card">
        <p>
          This project is still in development. More details and the full case
          study are coming soon. A public release date has not been announced yet.
        </p>
      </div>
    </div>
  );
}
