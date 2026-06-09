import { useState } from "react";

import "./Navbar.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#chatbot">Get to know me</a>
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
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">

          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#chatbot" onClick={closeMenu}>Get to know me</a>

          <div className="mobile-icons">

            <a href="mailto:quingillanders@gmail.com"><EmailIcon /></a>
            <a href="tel:+64221604203"><PhoneIcon /></a>
            <a href="https://github.com/quintongillanders" target="_blank"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/quinton-gillanders-335985297/" target="_blank"><LinkedInIcon /></a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;