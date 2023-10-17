import React, { useState, useEffect } from "react";
import "./ProjectsSection.css";
import project1img from "../../assets/images/project-1.png";
import project2img from "../../assets/images/project-2.jpg";
import project3img from "../../assets/images/project-3.png";
import project4img from "../../assets/images/project-4.jpg";
import project5img from "../../assets/images/project-5.png";
import project6img from "../../assets/images/project-6.jpg";
import project7img from "../../assets/images/project-7.png";
import project8img from "../../assets/images/project-8.png";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

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

  let projects = [
    {
      id: 0,
      title: "Vietnam B2B",
      description: `A revamp of (vietnamfactoryb2b.com). A Vietnamese B2B platform for selling and buying of products and Services. Core technologies are Laravel, Vue, Nuxt with full token authentication, content management, Internationalization (i18n) and api.`,
      image: project8img,
      link: "https://dev.vietnamfactoryb2b.com/",
      github: "https://dev.vietnamfactoryb2b.com/",
      design:
        "https://www.figma.com/file/oIIIcuS9LZrSXBDwm0WmU7/Music-Dashboard--Tunifi-(Community)?node-id=0%3A1",
      platform: "web app",
      bgClass: "bg-primaryorange",
      dotBg: "dot-bg-orange",
      textClass: "text-primaryorange",
      technologies: ["react", "tailwindcss", "spotify api"],
    },
    {
      id: 1,
      title: "e-shop",
      description: ` eshop, an eccomerce platform for selling and buying goods ready with email integrations, complete auth process and invoice generation. The application is a monolith MVC application with a backend and templating for the frontend.`,
      image: project3img,
      link: "https://eshop-it00.onrender.com/",
      github: "https://github.com/ryanmwakio/eshop",
      design: "",
      platform: "web app",
      bgClass: "bg-primarypurple",
      dotBg: "dot-bg-purple",
      textClass: "text-primarypurple",
      technologies: ["node", "express", "mongoDB", "tailwindcss", "ejs"],
    },
    {
      id: 2,
      title: "Urbancribs API",
      description: `Urbancribs needed a platform to enable users to find and book rentals and houses for sale. I was tasked with developing the backend and frontend of the application and an API interface to map their mobile application to the backend. Developed the platform from scratch to deployment (www.urbancribs.co.ke/).`,
      image: project7img,
      link: "https://urbancribs.onrender.com/",
      github: "https://github.com/ryanmwakio/tunifi",
      design:
        "https://www.figma.com/file/oIIIcuS9LZrSXBDwm0WmU7/Music-Dashboard--Tunifi-(Community)?node-id=0%3A1",
      platform: "web app",
      bgClass: "bg-primaryorange",
      dotBg: "dot-bg-orange",
      textClass: "text-primaryorange",
      technologies: ["react", "tailwindcss", "spotify api"],
    },
    {
      id: 4,
      title: "music player",
      description: `Music player frontend connected to the spotify api. The goal was to nicely present exposed spotify api endpoints and organize the data on a frontend. Alongside the frontend, managed to tweak around with the browser's audio api and found ways to tweak the player's UI and functionality as well as understanding the gotchas and nuances of the api.`,
      image: project1img,
      link: "https://tunifi.netlify.app/",
      github: "https://github.com/ryanmwakio/tunifi",
      design:
        "https://www.figma.com/file/oIIIcuS9LZrSXBDwm0WmU7/Music-Dashboard--Tunifi-(Community)?node-id=0%3A1",
      platform: "web app",
      bgClass: "bg-primarypurple",
      dotBg: "dot-bg-purple",
      textClass: "text-primarypurple",
      technologies: ["react", "tailwindcss", "spotify api"],
    },
  ];
  return (
    <>
      <div className="projects-section" id="projects">
        <div className="project-section-bg"></div>

        <div className="line-vertical-right"></div>
        <div className="my-16">
          {projects.map((project) => {
            return (
              <Fade bottom key={project.id}>
                <div className="project">
                  <img src={project.image} alt="" className="project-img" />

                  <div className="project-overlay"></div>
                  <h3 className="project-name" style={{ marginLeft: "10px" }}>
                    {project.title}
                  </h3>
                  <div className="project-dots">
                    <span
                      className={`project-rounded-graphic ${project.dotBg}`}
                    ></span>
                    <span
                      className={`project-rounded-graphic ${project.dotBg}`}
                    ></span>
                    <span
                      className={`project-rounded-graphic ${project.dotBg}`}
                    ></span>
                  </div>
                  <div className="project-description">
                    <div className="project-description-content">
                      <div className={`border-left  ${project.bgClass}`}></div>
                      <div className={`project-links ${project.textClass}`}>
                        {/* <span>{project.platform}</span> */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project{" "}
                          <i className="fas fa-up-right-from-square"></i>
                        </a>
                      </div>

                      <div className="project-description-text">
                        <p>{project.description}</p>
                        {/* {project.technologies.map((technology) => {
                          return (
                            <span
                              key={technology}
                              className={`technology-class ${project.textClass}`}
                            >
                              {technology}
                            </span>
                          );
                        })} */}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
