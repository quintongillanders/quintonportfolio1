import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import SchoolHive from "./pages/SchoolHive";
import WormGameCaseStudy from "./pages/Worm Catching Game";

import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";

function Home() {
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
          Software Developer focused on modern web experiences.
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
          I'm a software developer with a Bachelor of Computing
          Systems from Unitec (2025). Recently completed a capstone project developing
          the SchoolHIVE Marketplace NZ platform as part of a collaborative
          team. Experienced in building responsive user interfaces using
          React.js, CSS, and MUI. Strong problem-solving skills with
          experience working in structured team environments and meeting
          project deadlines.
        </p>

        <a
          href="/Quinton Gillanders CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View My CV
        </a>

      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">

        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill"><JavascriptIcon /><span>JavaScript</span></div>
          <div className="skill"><CodeIcon /><span>React</span></div>
          <div className="skill"><StorageIcon /><span>Firebase</span></div>
          <div className="skill"><HtmlIcon /><span>HTML</span></div>
          <div className="skill"><CssIcon /><span>CSS</span></div>
          <div className="skill"><ApiIcon /><span>Material UI</span></div>

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

              <div className="project-buttons">
                <a
                  href="#"
                  className="project-link"
                  onClick={(e) => e.preventDefault()}
                >
                  More details coming soon
                </a>
              </div>

            </div>

          </div>

          {/* WORM GAME */}
          <div className="card">

            <div className="card-image">
              <img src="/6420 web dev assignment.png" alt="Web Game project" />
            </div>

            <div className="card-content">

              <h3>Worm Catching Game (2024)</h3>
              <h3>(Best played on desktop)</h3>

              <p>
                A browser-based game built using JavaScript, HTML and CSS as part of
                a web development assignment for my Bachelor of Computing Systems at
                Unitec in early 2024. It was a great learning experience for building
                interactive gameplay and improving my JavaScript skills.
              </p>

             
              <div className="project-buttons">

                <a
                  href="https://quintongillanders.github.io/wormcatchinggame.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Play Game
                </a>

                <a
                  href="/wormcatchinggame"
                  className="project-link secondary"
                >
                  Learn More
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolhive" element={<SchoolHive />} />
        <Route path="/wormcatchinggame" element={<WormGameCaseStudy />} />
      </Routes>
    </>
  );
}

export default App;