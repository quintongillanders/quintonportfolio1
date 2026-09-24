import { Link } from "react-router-dom";
import "./CV.css";

const cvUrl = "/QuintonCV2026.pdf";

export default function CV() {
  return (
    <main className="case-study cv-page">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to homepage
        </Link>
      </div>

      <header className="case-hero">
        <h1>CV</h1>
        <p className="case-intro">
          Read about my experience, education, and skills below, or download a
          copy of my CV.
        </p>
        <a href={cvUrl} download className="project-link">
          Download CV
        </a>
      </header>

      <div className="cv-document">
        <div className="cv-viewer">
          <iframe
            src={`${cvUrl}#view=FitH&toolbar=0&navpanes=0`}
            title="Quinton Gillanders CV"
          />
        </div>
      </div>
      <p className="cv-fallback">
        Trouble viewing? <a href={cvUrl}>Open the PDF directly</a> or download a
        copy above.
      </p>
    </main>
  );
}
