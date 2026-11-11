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
        <p className="case-intro">
          This case study is still being worked on. More screenshots and details will be added soon.
        </p>
        <div className="case-meta">
          <span><SchoolIcon /> Tutoring Management Tool</span>
          <span><BuildIcon /> Completed Prototype</span>
          <span><CalendarMonthIcon /> November 2026</span>
        </div>
        <p className="case-intro">
          TutorOS is a web app I developed in collaboration with Success Tutoring
          New Lynn to help tutors manage students and tutoring sessions in one place.
        </p>
        <div className="case-hero-image">
          <img src="/tutoros.png" alt="TutorOS prototype homepage" />
        </div>
      </div>

      <h2>Overview</h2>
      <div className="case-card">
        <p>
          The goal was to make everyday tutoring tasks easier by bringing student
          records, lesson notes, and learning plans together. Tutors can track
          progress, flag concerns, and prepare parent updates from their session notes.
        </p>
      </div>

      <h2>Tech Stack</h2>
      <div className="tech-stack">
        <div className="tech-item">
          <img src="/react.png" alt="React" />
          <span>React</span>
        </div>
        <div className="tech-item">
          <img src="/css.png" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="tech-item">
          <img src="/firebase.png" alt="Firebase" />
          <span>Firebase</span>
        </div>
        <div className="tech-item">
          <img
            src="/openai.svg"
            alt="OpenAI"
            style={{ padding: 8, boxSizing: "border-box", borderRadius: 12, background: "#ffffff" }}
          />
          <span>OpenAI</span>
        </div>
      </div>

      <h2>Key Features</h2>
      <div className="case-card">
        <ul>
          <li>Student profiles and tutoring session records</li>
          <li>Curriculum tracking and individual learning plans</li>
          <li>Student flags and support plans for follow-up</li>
          <li>AI-assisted parent updates, reviewed before approval</li>
        </ul>
      </div>

      {/* Replace these placeholder sources with screenshots added to public/. */}
      {[
        "Student profiles",
        "Tutoring sessions and learning plans",
        "Parent updates",
      ].map((title) => (
        <div key={title}>
          <h2>{title}</h2>
          <figure className="case-image">
            <img
              src="/tutoros-screenshot-placeholder.svg"
              alt={`${title} screenshot placeholder`}
              loading="lazy"
            />
          </figure>
        </div>
      ))}

      <h2>Project Outcome</h2>
      <div className="case-card">
        <p>
          TutorOS was completed as a prototype in November 2026 and will not be
          released to the public. The project gave me experience building connected
          workflows with React, Firebase, and AI-assisted communication.
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
