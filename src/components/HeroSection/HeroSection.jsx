import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import figmaIcon from "../../assets/icons/figma.svg";
import githubIcon from "../../assets/icons/github.svg";
import phoneImg1 from "../../assets/images/phone-img-1.jpg";
import phoneImg2 from "../../assets/images/phone-img-2.jpg";
import MenuButton from "../MenuButton/MenuButton";

function HeroSection() {
  let [showNav, setShowNav] = useState(false);

  let handleToggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <section className="hero-section">
        <div className="hero-left-section">
          <div className="line-vertical-left"></div>
          <div className="node-bottom-left"></div>
          <div className="line-vertical-right"></div>
          <div className="node-top-right"></div>
        </div>
        <nav className="navigation">
          <div className="nav-brand">
            <Link to="/">R</Link>
          </div>

          <div className="menu" onClick={handleToggleNav}>
            <MenuButton/>
          </div>
          <div
            className={`nav-links ${showNav ? "nav-links-mobile" : "hide"} `}
          >
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

        <div className="name">
          <h6>Ryan Mwakio</h6>
        </div>
        <div className="title-1">
          <h1>software</h1>
        </div>
        <div className="mobile-graphic-1">
          <div className="phone">
            <div className="phone-outer-frame">
              <div className="phone-left-btn-1"></div>
              <div className="phone-left-btn-2"></div>
              <div className="phone-left-btn-3"></div>
              <div className="phone-right-btn-1"></div>
              <div className="phone-inner-frame">
                <div className="phone-status-bar">
                  <div className="phone-info">
                    <div className="phone-dot"></div>
                    <div className="phone-dot"></div>
                    <div className="phone-dot"></div>
                  </div>
                  <div className="phone-camera"></div>
                  <div className="phone-speaker"></div>
                  <div className="phone-battery">
                    <span className="phone-percentage">100%</span>
                    <div className="phone-bar"></div>
                    <div className="phone-mini-bar"></div>
                  </div>
                </div>

                <div className="phone-content">
                  <img src={phoneImg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-graphic-2">
          <div className="phone">
            <div className="phone-outer-frame">
              <div className="phone-left-btn-1"></div>
              <div className="phone-left-btn-2"></div>
              <div className="phone-left-btn-3"></div>
              <div className="phone-right-btn-1"></div>
              <div className="phone-inner-frame">
                <div className="phone-status-bar">
                  <div className="phone-info">
                    <div className="phone-dot"></div>
                    <div className="phone-dot"></div>
                    <div className="phone-dot"></div>
                  </div>
                  <div className="phone-camera"></div>
                  <div className="phone-speaker"></div>
                  <div className="phone-battery">
                    <span className="phone-percentage">100%</span>
                    <div className="phone-bar"></div>
                    <div className="phone-mini-bar"></div>
                  </div>
                </div>

                <div className="phone-content object-cover">
                  <img src={phoneImg1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="title-2">
          <h1>developer</h1>
        </div>

        <div className="hero-cta btn">
          <Link to="/">my work</Link>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
