import "./App.css";

function App() {
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">

        <div className="hero-top">
          <img
            src="/me.jpg.png"
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
          team environments and meeting project deadlines. What excites me about front-end
          development is building user interfaces from concept to completion and seeing ideas
          transformed into functional, responsive applications.
        </p>
      </section>

      {/* PROJECTS */}
        <section id="projects" className="projects">
          <h2>Projects</h2>

          <div className="project-grid">

            {/* SCHOOLHIVE CARD */}
            <div className="card small-card">

              <div className="card-image">
                <img
                  src="/schoolhive.png"
                  alt="SchoolHive project"
                />
              </div>

              <div className="card-content">
                <h3>SchoolHive Marketplace</h3>

                <p>
                  Built as part of my Unitec Capstone Project using React, Firebase, Material UI and JavaScript. (July 2025 - November 2025)
                  Collaborated with 2 other students to design and develop the platform, implementing features such as user authentication, and product listings.
                  The project was completed on time and received positive feedback for its user-friendly interface and functionality.
                  It was also featured on the Unitec website, as well as media outlets such as RNZ.
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

            {/* HAZARD ID CARD */}
            <div className="card small-card">

              <div className="card-image">
                <img
                  src="/hazardid.png.avif"
                  alt="Hazard ID project"
                />
              </div>

              <div className="card-content">
                <h3>Hazard ID</h3>

                <p>
                  A hazard identification and tracking tool built to help streamline safety reporting and risk management workflows.
                  Designed and developed as a personal project with real-world application use cases in mind.
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

        <p>
          Email:{" "}
          <a href="mailto:quingillanders@gmail.com">
            quingillanders@gmail.com
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/quintongillanders"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/quintongillanders
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/quinton-gillanders-335985297/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/quinton-gillanders
          </a>
        </p>
      </section>

    </div>
  );
}

export default App;