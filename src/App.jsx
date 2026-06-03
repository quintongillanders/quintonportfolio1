import "./App.css";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

import { Routes, Route } from "react-router-dom";
import SchoolHive from "./pages/SchoolHive";

function App() {
  return (
    <Routes>

      {/* MAIN PORTFOLIO PAGE */}
      <Route
        path="/"
        element={
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
                Front-end focused software developer with a Bachelor of Computing
                Systems (2025). Recently completed a capstone project developing
                the SchoolHIVE Marketplace NZ platform as part of a collaborative
                team. Experienced in building responsive user interfaces using
                React.js, CSS, and MUI. Strong problem-solving skills with
                experience working in structured team environments and meeting
                project deadlines.
              </p>

            </section>

            {/* TECHNOLOGIES */}
            <section className="skills">

              <h2>Technologies</h2>

              <div className="skills-grid">
                <span>React</span>
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Material UI</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>

            </section>

            {/* PROJECTS */}
            <section id="projects" className="projects">

              <h2>Projects</h2>

              <div className="project-grid">

                {/* SCHOOLHIVE */}
                <div className="card">

                  <div className="card-image">
                    <img src="/schoolhive.png" alt="SchoolHive project" />
                  </div>

                  <div className="card-content">

                    <h3>SchoolHive Marketplace (2025)</h3>

                    <p>
                      Built as part of my Unitec Capstone Project using React,
                      Firebase, Material UI, and JavaScript (2025). Developed a
                      responsive marketplace platform with user authentication and
                      product listings alongside two students. Featured on the
                      Unitec website and RNZ.
                    </p>

                    <div className="project-buttons">

                      <a
                        href="https://www.schoolhive.co.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Website
                      </a>

                      <a
                        href="/schoolhive"
                        className="project-link secondary"
                      >
                        Learn More
                      </a>

                    </div>

                  </div>

                </div>

                {/* HAZARD ID */}
                <div className="card">

                  <div className="card-image">
                    <img src="/hazardid.png.avif" alt="Hazard ID project" />
                  </div>

                  <div className="card-content">

                    <h3>Hazard ID (2026)</h3>

                    <p>
                      A hazard identification and tracking tool built to help streamline
                      safety reporting and risk management workflows. Coming soon!
                    </p>

                    <a
                      href="#"
                      className="project-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      More details coming soon
                    </a>

                  </div>

                </div>

                {/* WEB GAME */}
                <div className="card">

                  <div className="card-image">
                    <img src="/6420 web dev assignment.png" alt="Web Game project" />
                  </div>

                  <div className="card-content">

                    <h3>Worm Catching Game (2024)</h3>

                    <p>
                      A browser-based game built using JavaScript, HTML and CSS as part of
                      a web development assignment for my Bachelor of Computing Systems at
                      Unitec in early 2024. It was a great learning experience for building
                      interactive gameplay and improving my JavaScript skills. Please note that this game is not available on mobile.
                      
                    </p>

                    <a
                      href="https://quintongillanders.github.io/wormcatchinggame.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Play Game 
                    </a>

                  </div>

                </div>

              </div>

            </section>

            {/* GITHUB */}
            <section className="github">

              <h2>GitHub Activity</h2>

              <p>
                I actively build personal projects and continue developing my
                software development skills through hands-on learning and
                experimentation. This screenshot below shows that I have been consistently contributing to my repositories, with 461+ contributions during 2025-2026.
                During my time at Unitec, I have also contributed to the SchoolHIVE project repository, which is a significant part of my portfolio and demonstrates my ability to work
                collaboratively on a real-world project.
              </p>

              <div className="github-card">
                <img
                  src="/Github Contributions.png"
                  alt="GitHub Contributions"
                  className="github-image"
                />
              </div>

              <a
                href="https://github.com/quintongillanders"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub Profile
              </a>

            </section>

            {/* CONTACT */}
            <section id="contact" className="contact">

              <h2>Contact</h2>

              <ul className="contact-links">

                <li>
                  <a href="mailto:quingillanders@gmail.com">
                    <EmailIcon />
                    <span>Email</span>
                  </a>
                </li>

                <li>
                  <a href="tel:+64221604203">
                    <PhoneIcon />
                    <span>Phone</span>
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
        }
      />

      {/* SCHOOLHIVE PAGE */}
      <Route path="/schoolhive" element={<SchoolHive />} />

    </Routes>
  );
}

export default App;