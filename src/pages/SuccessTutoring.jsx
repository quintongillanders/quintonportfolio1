import { Link } from "react-router-dom";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function SuccessTutoring() {
  return (
    <div className="case-study">

      {/* Back Button */}
      <div className="back-button-container">
        <Link to="/" className="back-button">
          Back to homepage
        </Link>
      </div>

      {/* Hero */}
      <div className="case-hero">
        <h1>Success Tutoring New Lynn</h1>

        <div className="case-meta">
          <span><SmartToyIcon /> AI Education</span>
          <span><SchoolIcon /> AI Tutor</span>
          <span><CalendarMonthIcon /> 2026</span>
        </div>

        <p className="case-intro">
         <p className="case-intro">
          In July 2026, I was invited to teach two AI workshops at Success Tutoring
          New Lynn for a group of young students. Over two weeks, I introduced
          them to Artificial Intelligence through interactive activities, discussions,
          and hands-on demonstrations designed to make complex ideas easy to understand. 
          More information may be added to this page in the future.
      </p>
        </p>
      </div>

      {/* Gallery */}
      <section>
        <h2>Gallery</h2>

        <p>While it was only once a week for two weeks, it was a really fun experience</p>

        <div className="case-gallery">
          <img
            src="/success-tutoring1.jpg"
            alt="Teaching an AI lesson"
          />

          <img
            src="/success-tutoring2.jpg"
            alt="Students participating in activities"
          />

          <img
            src="success-tutoring3.jpg"
            alt="AI workshop presentation"
          />

          <img
            src="success-tutoring4.jpg"
            alt="AI workshop presentation"
          />


        </div>
      </section>

      {/* Special Thanks */}
      <section className="case-thanks">
        <h2>Special Thanks</h2>

        <p>
         Thank you to my friend Gurvishal Sandhu at Success Tutoring New Lynn for this fun oppurtunity. 
         I hope to be able to teach here again soon!
        </p>
      </section>

    </div>
  );
}
