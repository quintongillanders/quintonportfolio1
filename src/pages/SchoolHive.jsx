import { Link } from "react-router-dom";

export default function SchoolHive() {
  return (
    <div className="case-study">

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      {/* HERO IMAGE / MAIN SCREENSHOT */}
      <div className="case-hero">

        <h1>SchoolHive Marketplace NZ</h1>

        {/* added but minimal metadata (safe upgrade) */}
        <div className="case-meta">
          <span>🎓 Capstone Project</span>
          <span>⚛️ React + Firebase</span>
          <span>📅 2025</span>
        </div>

        <p className="case-intro">
          A student-focused marketplace platform built as part of my Unitec
          Bachelor of Computing Systems Capstone Project (2025).
        </p>

        <div className="case-hero-image">
          <img src="/schoolhive.png" alt="SchoolHive dashboard" />
        </div>

      </div>

      <h2>Overview</h2>
      <p>
        In July 2025, industry sponsors presented multiple capstone project ideas
        to our class. One of these was SchoolHIVE Marketplace NZ, presented by
        Swanie Nelson from Community Builders Trust New Zealand (CBNZ).
      </p>

      <p>
        The goal was to solve a real-world issue: many families struggle with the
        high cost of school uniforms and school-related items. The idea was to
        create a centralised marketplace where students and families could buy
        and sell second-hand items in a trusted environment.
      </p>

      <p>
        I worked in a team of three after selecting this project during the
        initial project pitch phase.
      </p>

      <h2>Problem</h2>
      <div className="case-card">
        <p>
          Students were relying on informal channels like group chats and social
          media to trade items, which caused:
        </p>
        <ul>
          <li>Lack of trust between buyers and sellers</li>
          <li>Messy communication</li>
          <li>No central listing system</li>
        </ul>
      </div>

      <h2>Solution</h2>
      <div className="case-card">
        <p>
          We built a structured web-based marketplace that allows users to:
        </p>
        <ul>
          <li>Create secure accounts</li>
          <li>Post and manage listings</li>
          <li>Browse available items</li>
          <li>Interact through a clean, simple UI</li>
        </ul>
      </div>

      <h2>Tech Stack</h2>
      <div className="case-card">
        <ul>
          <li>React.js</li>
          <li>Firebase Authentication</li>
          <li>Firestore Database</li>
          <li>Material UI</li>
          <li>JavaScript</li>
          <li>CSS3</li>
        </ul>
      </div>

      <h2>My Role</h2>
      <div className="case-card">
        <p>
          I focused on frontend development, UI design, and Firebase integration.
          My responsibilities included:
        </p>
        <ul>
          <li>Building reusable React components</li>
          <li>Designing responsive layouts</li>
          <li>Implementing authentication flows</li>
          <li>Connecting frontend to Firebase backend</li>
        </ul>
      </div>

      <h2>Outcome</h2>
      <div className="case-card">

        {/* small enhancement: stats without changing layout */}
        <div className="case-stats">
          <div className="stat">
            <h4>3</h4>
            <p>Team Members</p>
          </div>

          <div className="stat">
            <h4>18</h4>
            <p>Weeks</p>
          </div>

          <div className="stat">
            <h4>2025</h4>
            <p>Delivered</p>
          </div>
        </div>

        <p>
          The project was successfully completed and launched at the Otara Music and Arts Centre on November 11, 2025.
          It was featured on RNZ, and shared on the Unitec website and social media pages.
        </p>

        <div className="case-outcome-images">
          <img src="/rnz schoolhive.png" alt="SchoolHive launch showcase" />
          <img src="/schoolhive facebook.png" alt="SchoolHive team presentation" />
        </div>

      </div>

      <h2>Links</h2>
      <a
        href="https://www.schoolhive.co.nz/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Live Website →
      </a>

    </div>
  );
}