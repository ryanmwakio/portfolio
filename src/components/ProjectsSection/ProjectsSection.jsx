import React, { useState, useEffect } from "react";
import "./ProjectsSection.css";
import project1img from "../../assets/images/project-1.jpg";
import project2img from "../../assets/images/project-2.jpg";
import project3img from "../../assets/images/project-3.jpg";
import project4img from "../../assets/images/project-4.jpg";
import project5img from "../../assets/images/project-5.jpg";
import project6img from "../../assets/images/project-6.jpg";
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
      id: 1,
      title: "music player",
      description: `Music player frontend connected to the spotify api. The goal was to nicely present exposed spotify api endpoints and organize the data on an attractive frontend. Developed with React and Tailwind css.`,
      image: project1img,
      link: "https://tunifi.netlify.app/",
      github: "https://github.com/ryanmwakio/tunifi",
      design:
        "https://www.figma.com/file/oIIIcuS9LZrSXBDwm0WmU7/Music-Dashboard--Tunifi-(Community)?node-id=0%3A1",
      platform: "web app",
      bgClass: "bg-primarypurple",
      textClass: "text-primarypurple",
      technologies: ["react", "tailwindcss", "spotify api"],
    },
    {
      id: 2,
      title: "social platform UI",
      description: ` A social platform UI built with React, Nextjs and Tailwind css. The goal was to create a clean and simple UI that would be easy to use and intuitive.`,
      image: project5img,
      link: "https://social-dashboard-eight.vercel.app/",
      github: "https://github.com/ryanmwakio/social-dashboard",
      design: "",
      platform: "web app",
      bgClass: "bg-emerald-500",
      textClass: "text-emerald-500",
      technologies: ["reactjs", "nextjs", "jsx", "tailwindcss", "css"],
    },
    {
      id: 3,
      title: "e-shop",
      description: ` eshop, an eccomerce platform for selling and buying goods ready with email integrations, complete auth process and invoice generation. Technologies used are node, express,tailwind, EJS and mongoDB.`,
      image: project3img,
      link: "https://eshop-ke.herokuapp.com/",
      github: "https://github.com/ryanmwakio/eshop",
      design: "",
      platform: "web app",
      bgClass: "bg-primaryorange",
      textClass: "text-primaryorange",
      technologies: ["node", "express", "mongoDB", "tailwindcss", "ejs"],
    },
    {
      id: 4,
      title: "events UI",
      description: ` An event web application that allows users to view available events and share them with other users. I used Next js a framework for react mainly cause I was quite intrigued with the file based routing. Technologies used are Next, React, Tailwind css and node`,
      image: project2img,
      link: "https://event-lut5ddotl-ryanmwakio.vercel.app/",
      github: "https://github.com/ryanmwakio/event-app-ui",
      design: "",
      platform: "web app",
      bgClass: "bg-primarygreen",
      textClass: "text-primarygreen",
      technologies: ["next", "react", "tailwindcss", "node"],
    },
    {
      id: 5,
      title: "task rest api",
      description: `A task rest api that allows users to create, update, delete and view tasks. Technologies used are node, express, mongoDB, bcrypt and jwt. Complete with authentication and authorization. Note that some endpoints are not available for unauthenticated users.`,
      image: project4img,
      link: "https://task-rest.herokuapp.com/",
      github: "https://github.com/ryanmwakio/task-api",
      design: "",
      platform: "web app",
      bgClass: "bg-blue-400",
      textClass: "text-blue-400",
      technologies: ["node", "express", "mongoDB", "bcrypt", "jwt"],
    },
    {
      id: 6,
      title: "auth rest api",
      description: `A rest api that allows users to register and login. Technologies used are node, express, mongoDB, bcrypt and jwt. A frontend consuming this api is available on  https://auth-frontend.netlify.app `,
      image: project6img,
      link: "https://auth-api-254.herokuapp.com/",
      github: "https://github.com/ryanmwakio/auth_api",
      design: "",
      platform: "web app",
      bgClass: "bg-yellow-400",
      textClass: "text-yellow-400",
      technologies: ["node", "express", "postgres", "postman", "geocoding"],
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
                  <h3 className="project-name">{project.title}</h3>
                  {/* <div className="project-dots">
                <span className="project-rounded-graphic dot-bg-purple"></span>
                <span className="project-rounded-graphic dot-bg-purple"></span>
                <span className="project-rounded-graphic dot-bg-purple"></span>
              </div> */}
                  <div className="project-description">
                    <div className="project-description-content">
                      <div className={`border-left  ${project.bgClass}`}></div>
                      <div
                        className={`project-links text-primarypurple ${project.textClass}`}
                      >
                        <span>{project.platform}</span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                        <a
                          href={project.design}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Design
                        </a>
                      </div>

                      <div className="project-description-text">
                        <p>{project.description}</p>
                        {project.technologies.map((technology) => {
                          return (
                            <span
                              key={technology}
                              className={`technology-class ${project.textClass}`}
                            >
                              {technology}
                            </span>
                          );
                        })}
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
