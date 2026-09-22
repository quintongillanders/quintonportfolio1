import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SchoolIcon from "@mui/icons-material/School";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import slides from "./aiLabSlides.json";
import "./SuccessTutoringLinks.css";

const presentationPath = "/AI%20Lab%20Presentation%2C%20All%20Lessons-3.pptx";

export default function SuccessTutoringLinks() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = slides[slideIndex];
  const goTo = (index) => setSlideIndex(Math.max(0, Math.min(slides.length - 1, index)));

  function handleKeyDown(event) {
    if (event.target.tagName === "SELECT") return;
    const destinations = {
      ArrowLeft: slideIndex - 1,
      ArrowRight: slideIndex + 1,
      Home: 0,
      End: slides.length - 1,
    };
    if (event.key in destinations) {
      event.preventDefault();
      goTo(destinations[event.key]);
    }
  }

  return (
    <div className="case-study ai-lab-page">
      <div className="back-button-container">
        <Link to="/success-tutoring" className="back-button">
          <ArrowBackRoundedIcon fontSize="small" /> Back to Success Tutoring
        </Link>
      </div>

      <header className="case-hero">
        <h1>AI Lab Presentation</h1>
        <div className="case-meta">
          <span><SmartToyIcon /> AI Education</span>
          <span><SchoolIcon /> Success Tutoring New Lynn</span>
        </div>
        <p className="case-intro">
          Explore the ideas, activities and lessons from our AI workshops, one slide at a time.
        </p>
      </header>

      <section
        className="ai-lab-viewer"
        aria-label="AI Lab presentation. Use left and right arrow keys to change slides."
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="ai-lab-viewer-header">
          <strong>AI Lab Presentation</strong>
          <div className="ai-lab-slide-count" aria-live="polite" aria-atomic="true">
            Slide {slideIndex + 1} of {slides.length}
          </div>
        </div>
        <div className="ai-lab-stage">
          <img
            src={slide.src}
            alt={`Slide ${slideIndex + 1}. ${slide.text}`}
            width="1920"
            height="1080"
          />
        </div>
        <div className="ai-lab-progress" aria-hidden="true">
          <div style={{ width: `${((slideIndex + 1) / slides.length) * 100}%` }} />
        </div>
        <div className="ai-lab-controls">
          <button className="back-button" type="button" onClick={() => goTo(slideIndex - 1)} disabled={slideIndex === 0}>
            <ChevronLeftRoundedIcon /> Previous
          </button>
          <label className="ai-lab-jump">
            <span>Go to slide</span>
            <select value={slideIndex} onChange={(event) => goTo(Number(event.target.value))}>
              {slides.map((_, index) => <option key={index} value={index}>{index + 1}</option>)}
            </select>
          </label>
          <button className="back-button" type="button" onClick={() => goTo(slideIndex + 1)} disabled={slideIndex === slides.length - 1}>
            Next <ChevronRightRoundedIcon />
          </button>
        </div>
      </section>
      <p className="ai-lab-keyboard-hint">Use the arrows above, or focus the viewer and press ← / → on your keyboard.</p>

      <footer className="ai-lab-resources">
        <div>
          <strong>Keep exploring</strong>
          <p>Take the full presentation with you.</p>
        </div>
        <div className="ai-lab-resource-actions">
          <a href="/ai-lab-presentation.pdf" className="back-button" target="_blank" rel="noopener noreferrer">Open PDF ↗</a>
          <a href={presentationPath} className="back-button" download>
            <DownloadRoundedIcon fontSize="small" /> Download PowerPoint
          </a>
        </div>
      </footer>
    </div>
  );
}
