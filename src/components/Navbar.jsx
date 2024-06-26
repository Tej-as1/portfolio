import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React from "react";
import "./Navbar.css";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="part1">T </div>
        {/* <span className="space"></span> */}
        <div className="part2">S</div>
      </div>
      <div className="navbar_icon">
        <a href="https://www.linkedin.com/in/tejas-sharma-a922761a6/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Tej-as1" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default navbar;
