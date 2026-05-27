import "./App.css";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

function App() {
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">

        <div className="hero-top">
          <img
            src="/me.png"
            alt="Quinton Gillanders"
            className="hero-avatar"
          />

          <h1>Quinton Gillanders</h1>
        </div>

        <p>
          Frontend Developer focused on React, Firebase,
          and modern web experiences.
        </p>

        <a href="#about" className="scroll-indicator">
          <div className="arrow">↓</div>
          <span>Scroll to find out more about me!</span>
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          Front-end focused software developer with a Bachelor of Computing Systems (2025).
          Recently completed a capstone project developing the SchoolHIVE Marketplace NZ platform
          as part of a collaborative team. Experienced in building responsive user interfaces using
          React.js, CSS, and MUI. Strong problem-solving skills with experience working in structured
          team environments and meeting project deadlines.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-grid">

          {/* SCHOOLHIVE */}
          <div className="card small-card">
            <div className="card-image">
              <img src="/schoolhive.png" alt="SchoolHive project" />
            </div>

            <div className="card-content">
              <h3>SchoolHive Marketplace</h3>

              <p>
                Built as part of my Unitec Capstone Project using React, Firebase,
                Material UI, and JavaScript (2025). Developed a responsive marketplace
                platform with user authentication and product listings alongside two students.
                Featured on the Unitec website and RNZ.
              </p>

              <a
                href="https://www.schoolhive.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Website →
              </a>
            </div>
          </div>

          {/* HAZARD ID */}
          <div className="card small-card">
            <div className="card-image">
              <img src="/hazardid.png.avif" alt="Hazard ID project" />
            </div>

            <div className="card-content">
              <h3>Hazard ID</h3>

              <p>
                A hazard identification and tracking tool built to help streamline
                safety reporting and risk management workflows.
              </p>

              <a
                href="#"
                className="project-link"
                onClick={(e) => e.preventDefault()}
              >
                More details coming soon →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact</h2>

        <ul className="contact-links">

          <li>
            <a href="mailto:quingillanders@gmail.com">
              <EmailIcon />
              <span>quingillanders@gmail.com</span>
            </a>
          </li>

          <li>
            <a href="tel:+64221604203">
              <PhoneIcon />
              <span>+64 22 160 4203</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/quintongillanders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/quinton-gillanders-335985297/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </li>

        </ul>
      </section>

    </div>
  );
}

export default App;