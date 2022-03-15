import React, { useState } from "react";
import { Link } from "react-router-dom";
import figmaIcon from "../../assets/icons/figma.svg";
import githubIcon from "../../assets/icons/github.svg";
import MenuButton from "../MenuButton/MenuButton";
import "./Navbar.css";

function Navbar() {
  let [showNav, setShowNav] = useState(false);

  let handleToggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      {" "}
      <nav className="navigation">
        <div className="nav-brand">
          <Link to="/">R</Link>
        </div>

        <div className="menu" onClick={handleToggleNav}>
          <MenuButton />
        </div>
        <div className={`nav-links ${showNav ? "nav-links-mobile" : "hide"} `}>
          <Link to="/">Home</Link>

          <Link to="/">Skills</Link>

          <Link to="/">Projects</Link>

          <Link to="/">Contact</Link>
        </div>
        <div className="nav-social">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            <img src={githubIcon} alt="" />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            title="figma"
          >
            <img src={figmaIcon} alt="" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
