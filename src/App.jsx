import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const featuredProjects = [
    {
      title: "SchoolHIVE Marketplace Launches at Otara Music and Arts Centre (November 2025)",
      description:
        "The SchoolHIVE Marketplace officially launches at the Otara Music and Arts Centre in November 2025.",
      image: "/rnz schoolhive.png",
      link: "https://www.rnz.co.nz/news/ldr/578864/otara-rangatahi-lead-digital-solution-to-school-costs"
    },
    {
      title: "Team QAK 404 Capstone Project Wins 1st Place at Unitec Whānau Day Showcase (November 2025)",
      description:
        "Team QAK404, developers of the SchoolHIVE Marketplace, win first place at the Unitec Whānau Day Showcase on November 20th, 2025.",
      image: "/whanaudaywin.jpg",
    },
    {
      title: "Gillanders Brothers Graduate from Unitec!",
      description:
        "Quinton Gillanders and Alex Gillanders graduate from Unitec on April 1st, 2026.",
      image: "/graduation.png",
      link: "#",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(
        (prev) => (prev + 1) % featuredProjects.length
      );
    }, 10000); // Change news story every 10 seconds

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero-split">

        {/* LEFT SIDE */}
          <div className="hero-left">

            <img
              src="/me.png"
              alt="Quinton Gillanders"
              className="hero-avatar"
            />

            <h1 className="hero-name">Quinton Gillanders</h1>

            <p className="hero-text">
              I'm a software developer with a Bachelor of Computing
              Systems from Unitec (2025). Recently completed a capstone
              project developing the SchoolHIVE Marketplace NZ platform as
              part of a collaborative team. Experienced in building
              responsive user interfaces using React.js, CSS and MUI.
            </p>

            <a
              href="/Quinton Gillanders CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View My CV
            </a>

          </div>

        {/* RIGHT SIDE - AUTO SCROLLING FEATURED PROJECT */}
        <div className="hero-right">

          <div className="featured-box">

           <div className="featured-image-wrapper">
            {featuredProjects.map((project, index) => (
              <img
                key={index}
                src={project.image}
                alt={project.title}
                className={`featured-image ${
                  index === currentProject ? "active" : ""
                }`}
              />
            ))}
          </div>

           <div className="featured-content">


              <h2>
                {featuredProjects[currentProject].title}
              </h2>

              <p>
                {featuredProjects[currentProject].description}
              </p>

              <div className="carousel-dots">

              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    index === currentProject ? "active" : ""
                  }`}
                  onClick={() => setCurrentProject(index)}
                />
              ))}

            </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
        <section id="skills" className="skills">

          <h2>Skills</h2>

          <p className="skills-text">
            I work primarily with JavaScript and React to build responsive, interactive web applications. 
            I also have experience with Mobile Development (Android Studio), Firebase, Material UI and version control using Git.
            Other Languages and tools I'm familiar with include Python, Java, and C#.
          </p>

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
                Built as part of my Unitec Capstone Project using React, Firebase, Material UI and JavaScript. 
                Developed alongside two students and featured on the Unitec website and RNZ.
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
                A hazard identification and tracking tool built to help
                streamline safety reporting and risk management workflows. Coming soon!
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
              <img
                src="/6420 web dev assignment.png"
                alt="Web Game project"
              />
            </div>

            <div className="card-content">

              <h3>Worm Catching Game (2024)</h3>
              <h3>(Not playable on mobile)</h3>

              <p>
                A browser-based game built using JavaScript, HTML and CSS
                as part of a web development assignment for my Bachelor of
                Computing Systems at Unitec.
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