import React, { useState } from "react";
import "./SkillsSection.css";

function SkillSection() {
  let [active1, setActive1] = useState(false);
  let [active2, setActive2] = useState(false);
  let [active3, setActive3] = useState(false);

  let handleActive1 = () => {
    setActive1(!active1);
  };
  let handleActive2 = () => {
    setActive2(!active2);
  };
  let handleActive3 = () => {
    setActive3(!active3);
  };
  return (
    <>
      <div className="skills-section" id="skills">
        <div className="line-vertical-right"></div>

        <div className="flex flex-col space-x-4 md:flex-row justify-center mx-8 md:mx-28 my-10  ">
          <div
            className={`skill-item ${active1 ? "skill-item-active" : ""}`}
            onMouseEnter={handleActive1}
            onMouseLeave={handleActive1}
          >
            <div className={active1 ? "corner-graphic" : "hide"}></div>
            <p className="skill-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              quibusdam sint est magnam error iusto iste. Laboriosam ea tempore
              veniam quasi iusto dolorum tempora ipsa fuga quaerat nulla hic
              perspiciatis beatae expedita.
            </p>
            <p className="skill-list">
              Figma &nbsp;&nbsp;|&nbsp;&nbsp; Adobe XD &nbsp;&nbsp;|&nbsp;&nbsp;
              Adobe Photoshop &nbsp;&nbsp;|&nbsp;&nbsp; Tailwind
              &nbsp;&nbsp;|&nbsp;&nbsp; Bootstrap
              &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; Css
            </p>

            <h1 className={`skill-title ${active1 ? "text-gradient" : ""}`}>
              design
            </h1>
          </div>

          <div
            className={`skill-item ${active2 ? "skill-item-active" : ""}`}
            onMouseEnter={handleActive2}
            onMouseLeave={handleActive2}
          >
            <div className={active2 ? "corner-graphic" : "hide"}></div>
            <p className="skill-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              quibusdam sint est magnam error iusto iste. Laboriosam ea tempore
              veniam quasi iusto dolorum tempora ipsa fuga quaerat nulla hic
              perspiciatis beatae expedita.
            </p>
            <p className="skill-list">
              React &nbsp;&nbsp;|&nbsp;&nbsp; React Native
              &nbsp;&nbsp;|&nbsp;&nbsp; Javascript &nbsp;&nbsp;|&nbsp;&nbsp;
              Typescript &nbsp;&nbsp;|&nbsp;&nbsp; Node
              &nbsp;&nbsp;|&nbsp;&nbsp;jQuery
              &nbsp;&nbsp;|&nbsp;&nbsp;MySQL&nbsp;&nbsp;|&nbsp;&nbsp;Mongodb
            </p>

            <h1 className={`skill-title ${active2 ? "text-gradient" : ""}`}>
              develop
            </h1>
          </div>

          <div
            className={`skill-item ${active3 ? "skill-item-active" : ""}`}
            onMouseEnter={handleActive3}
            onMouseLeave={handleActive3}
          >
            <div className={active3 ? "corner-graphic" : "hide"}></div>
            <p className="skill-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              quibusdam sint est magnam error iusto iste. Laboriosam ea tempore
              veniam quasi iusto dolorum tempora ipsa fuga quaerat nulla hic
              perspiciatis beatae expedita.
            </p>
            <p className="skill-list">
              Agile &nbsp;&nbsp;|&nbsp;&nbsp; Scrum &nbsp;&nbsp;|&nbsp;&nbsp;
              Kanban &nbsp;&nbsp;|&nbsp;&nbsp; git & github
            </p>

            <h1 className={`skill-title ${active3 ? "text-gradient" : ""}`}>
              iterate
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSection;
