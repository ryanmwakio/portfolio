import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import TypeIt from "typeit-react";

//import phoneImg1 from "../../assets/images/phone-img-1.jpg";
import phoneImg1 from "../../assets/images/hero-img-1.jpg";
import phoneImg2 from "../../assets/images/hero-img-2.jpg";
import { HashLink } from "react-router-hash-link";

function HeroSection() {
  let [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageYOffset]);

  let handleScroll = () => {
    let scrollHeight = window.scrollY;
    setPageYOffset(scrollHeight);
  };
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-left-section">
          <div className="line-vertical-left"></div>
          <div className="node-bottom-left"></div>
          <div className="line-vertical-right"></div>
          <div className="node-top-right"></div>
        </div>
        <div className="name">
          <h6>Ryan Mwakio</h6>
        </div>
        <div className="title-1">
          <h1>software</h1>
        </div>
        <div
          className="mobile-graphic-1"
          style={{ transform: `translateY(${pageYOffset * 0.08}px)` }}
        >
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

                <div
                  className="phone-content"
                  style={{ background: `url( ${phoneImg2})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mobile-graphic-2"
          style={{ transform: `translateY(-${pageYOffset * 0.08}px)` }}
        >
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

                <div
                  className="phone-content"
                  style={{ background: `url( ${phoneImg1})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="title-2">
          <h1>
            <Typist
              sentences={["developer", "artisan", "whizz"]}
              loop={true}
              typingSpeed={100}
              pauseTime={1500}
              deletingSpeed={80}
              startDelay={30}
              cursorSmooth={true}
            />
          </h1>
        </div> */}

        <div className="title-2">
          <h1>
            <TypeIt
              options={{
                loop: true,
                strings: ["developer", "artisan", "whizz"],
                speed: 100,
                waitUntilVisible: true,
                breakLines: false,
              }}
            />
          </h1>
        </div>

        <div className="hero-cta btn">
          <HashLink to="/#projects" smooth>
            my work
          </HashLink>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
