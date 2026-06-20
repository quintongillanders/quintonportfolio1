import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const navigateToSection = (sectionId) => {
    navigate(`/#${sectionId}`);

    setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    closeMenu();
  };

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <a href="/" className="logo" onClick={closeMenu}>
          Quinton Gillanders
        </a>
      </div>

      {/* CENTER (DESKTOP) */}
      <div className="nav-center">

        <button
          className="nav-link-button"
          onClick={() => navigateToSection("about")}
        >
          About
        </button>

        <button
          className="nav-link-button"
          onClick={() => navigateToSection("skills")}
        >
          Skills
        </button>

        <button
          className="nav-link-button"
          onClick={() => navigateToSection("projects")}
        >
          Projects
        </button>

        <button
          className="nav-link-button"
          onClick={() => navigateToSection("chatbot")}
        >
          Get to know me
        </button>

      </div>

      {/* RIGHT (DESKTOP ICONS) */}
      <div className="nav-right">

        <a href="mailto:quingillanders@gmail.com" aria-label="Email">
          <EmailIcon />
        </a>

        <a href="tel:+64221604203" aria-label="Phone">
          <PhoneIcon />
        </a>

        <a
          href="https://github.com/quintongillanders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/quinton-gillanders-335985297/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>

      </div>

      {/* HAMBURGER ICON (MOBILE) */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">

          <button
            className="nav-link-button"
            onClick={() => navigateToSection("about")}
          >
            About
          </button>

          <button
            className="nav-link-button"
            onClick={() => navigateToSection("skills")}
          >
            Skills
          </button>

          <button
            className="nav-link-button"
            onClick={() => navigateToSection("projects")}
          >
            Projects
          </button>

          <button
            className="nav-link-button"
            onClick={() => navigateToSection("chatbot")}
          >
            Get to know me
          </button>

          <div className="mobile-icons">

            <a href="mailto:quingillanders@gmail.com">
              <EmailIcon />
            </a>

            <a href="tel:+64221604203">
              <PhoneIcon />
            </a>

            <a
              href="https://github.com/quintongillanders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/quinton-gillanders-335985297/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;