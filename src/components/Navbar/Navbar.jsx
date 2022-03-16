import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import figmaIcon from "../../assets/icons/figma.svg";
import githubIcon from "../../assets/icons/github.svg";
import MenuButton from "../MenuButton/MenuButton";
import "./Navbar.css";
import { links } from "./data";

function Navbar() {
  let [showNav, setShowNav] = useState(false);
  let [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageYOffset]);

  let handleToggleNav = () => {
    setShowNav(!showNav);
  };

  let handleScroll = () => {
    let scrollHeight = window.scrollY;
    setPageYOffset(scrollHeight);
  };

  return (
    <>
      {" "}
      <nav
        className={`navigation container ${
          pageYOffset > 63 ? "nav-absolute" : "nav-absolute"
        }`}
      >
        <div className="nav-brand">
          <Link to="/">R</Link>
        </div>

        <div className="menu" onClick={handleToggleNav}>
          <MenuButton />
        </div>
        <div className={`nav-links ${showNav ? "nav-links-mobile" : "hide"} `}>
          {links.map((link) => {
            return (
              <NavHashLink to={`/${link.url}`} key={link.id} smooth>
                {link.text}
              </NavHashLink>
            );
          })}
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
