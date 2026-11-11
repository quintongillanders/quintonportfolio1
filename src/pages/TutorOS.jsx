import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function TutorOS() {
  return (
    <div className="case-study">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to homepage
        </Link>
      </div>

      <div className="case-hero">
        <h1>TutorOS</h1>
        <div className="case-meta">
          <span><SchoolIcon /> Tutoring Management Tool</span>
          <span><BuildIcon /> Completed Prototype</span>
          <span><CalendarMonthIcon /> November 2026</span>
        </div>
        <p className="case-intro">
          TutorOS is a web app I developed in collaboration with Success Tutoring New Lynn to help tutors manage students
          and tutoring sessions in one place.
        </p>
        <div className="case-hero-image">
          <img src="/tutoros.png" alt="TutorOS prototype homepage" />
        </div>
      </div>

      <h2>What is TutorOS?</h2>
      <div className="case-card">
        <p>
          TutorOS brings student information and session records together,
          helping tutors stay organised with their day-to-day tutoring work.
          The goal is to make it easier to keep track of students and the
          sessions they attend.
        </p>
      </div>

      <h2>Project outcome</h2>
      <div className="case-card">
        <p>
          The project was completed as a prototype in November 2026 in
          collaboration with Success Tutoring New Lynn. TutorOS will not be
          released to the public.
        </p>
      </div>
      <div className="back-button-container">
        <Link to="/success-tutoring" className="back-button">
          My work with Success Tutoring
        </Link>
      </div>
    </div>
  );
}
