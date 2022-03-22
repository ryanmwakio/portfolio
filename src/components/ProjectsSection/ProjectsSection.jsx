import React, { useState, useEffect } from "react";
import "./ProjectsSection.css";
import project1img from "../../assets/images/project-1.jpg";
import project2img from "../../assets/images/project-2.jpg";
import project3img from "../../assets/images/project-3.jpg";
import { Fade } from "react-reveal";

function ProjectsSection() {
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
      <div className="projects-section" id="projects">
        <div className="line-vertical-right"></div>
        <div className="my-16">
          <Fade bottom>
            <div
              className="project"
            >
              <img src={project1img} alt="" className="project-img" />

              <div className="project-overlay"></div>
              <h3 className="project-name">Dashboard UI</h3>
              <div className="project-dots">
                <span className="project-rounded-graphic dot-bg-purple"></span>
                <span className="project-rounded-graphic dot-bg-purple"></span>
                <span className="project-rounded-graphic dot-bg-purple"></span>
              </div>
              <div className="project-description">
                <div className="project-description-content">
                  <div className="border-left bg-primarypurple"></div>
                  <div className="project-links text-primarypurple">
                    <span>web app</span>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      live
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      github
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      design
                    </a>
                  </div>

                  <div className="project-description-text">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae id neque porro inventore, consequuntur sint
                      adipisci voluptatibus nemo aliquam commodi distinctio
                      eaque nulla possimus rem perspiciatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="project">
              <img src={project2img} alt="" className="project-img" />

              <div className="project-overlay"></div>
              <h3 className="project-name">Naidelivery</h3>
              <div className="project-dots">
                <span className="project-rounded-graphic dot-bg-orange"></span>
                <span className="project-rounded-graphic dot-bg-orange"></span>
                <span className="project-rounded-graphic dot-bg-orange"></span>
              </div>
              <div className="project-description">
                <div className="project-description-content">
                  <div className="border-left bg-primaryorange"></div>
                  <div className="project-links text-primaryorange">
                    <span>mobile app</span>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      live
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      github
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      design
                    </a>
                  </div>

                  <div className="project-description-text">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae id neque porro inventore, consequuntur sint
                      adipisci voluptatibus nemo aliquam commodi distinctio
                      eaque nulla possimus rem perspiciatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="project">
              <img src={project3img} alt="" className="project-img" />

              <div className="project-overlay"></div>
              <h3 className="project-name">e-med system UI</h3>
              <div className="project-dots">
                <span className="project-rounded-graphic dot-bg-green"></span>
                <span className="project-rounded-graphic dot-bg-green"></span>
                <span className="project-rounded-graphic dot-bg-green"></span>
              </div>
              <div className="project-description">
                <div className="project-description-content">
                  <div className="border-left bg-primarygreen"></div>

                  <div className="project-links text-primarygreen">
                    <span>web app</span>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      live
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      github
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      design
                    </a>
                  </div>

                  <div className="project-description-text">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae id neque porro inventore, consequuntur sint
                      adipisci voluptatibus nemo aliquam commodi distinctio
                      eaque nulla possimus rem perspiciatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        ;
      </div>
    </>
  );
}

export default ProjectsSection;
