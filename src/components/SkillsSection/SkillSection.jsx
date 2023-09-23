import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import './SkillsSection.css';

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
      <div className='skills-section' id='skills'>
        <div className='line-vertical-right'></div>

        <div className='flex flex-col space-x-4 md:flex-row justify-center mx-8 md:mx-28 my-10  '>
          <Fade bottom>
            <div
              className={`skill-item ${active1 ? 'skill-item-active' : ''}`}
              onMouseEnter={handleActive1}
              onMouseLeave={handleActive1}
            >
              <Fade bottom>
                <div className={active1 ? 'corner-graphic' : 'hide'}></div>
              </Fade>

              <p className='skill-description'>
                Transforming user requirements into some suitable form, which
                helps in software coding and implementation. I try to represent
                requirements as is the software requirements specification (SRS)
                and the software design specification (SDS). It's among the
                first phase of the software development life cycle (SDLC). Tools
                I use include,
              </p>
              <p className='skill-list'>
                Figma &nbsp;&nbsp;|&nbsp;&nbsp; Adobe XD
                &nbsp;&nbsp;|&nbsp;&nbsp; Adobe Photoshop
                &nbsp;&nbsp;|&nbsp;&nbsp; Tailwind &nbsp;&nbsp;|&nbsp;&nbsp;
                Bootstrap &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; Css
              </p>

              <h1 className={`skill-title ${active1 ? 'text-gradient' : ''}`}>
                design
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <div
              className={`skill-item ${active2 ? 'skill-item-active' : ''}`}
              onMouseEnter={handleActive2}
              onMouseLeave={handleActive2}
            >
              <Fade bottom>
                <div className={active2 ? 'corner-graphic' : 'hide'}></div>
              </Fade>
              <p className='skill-description'>
                Building products that meet technical specification. During
                development I try to go through needs identification,
                requirements analysis, development and implementation, testing
                and finally deployment and maintenance. Tools I use include but
                not limited to,
              </p>
              <p className='skill-list'>
                PHP &nbsp;&nbsp;|&nbsp;&nbsp; Laravel
                &nbsp;&nbsp;|&nbsp;&nbsp;Vue&nbsp;&nbsp;|&nbsp;&nbsp;React &nbsp;&nbsp;|&nbsp;&nbsp;
                Javascript &nbsp;&nbsp;|&nbsp;&nbsp; Typescript
                &nbsp;&nbsp;|&nbsp;&nbsp; Node &nbsp;&nbsp;|&nbsp;&nbsp;jQuery
                &nbsp;&nbsp;|&nbsp;&nbsp;MySQL&nbsp;&nbsp;|&nbsp;&nbsp;Postgres&nbsp;&nbsp;|&nbsp;&nbsp;Mongodb
              </p>

              <h1 className={`skill-title ${active2 ? 'text-gradient' : ''}`}>
                develop
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <div
              className={`skill-item ${active3 ? 'skill-item-active' : ''}`}
              onMouseEnter={handleActive3}
              onMouseLeave={handleActive3}
            >
              <Fade bottom>
                <div className={active3 ? 'corner-graphic' : 'hide'}></div>
              </Fade>
              <p className='skill-description'>
                Developing through a series of iterations of planning, doing,
                checking and adjustments. This helps my workflow through
                shortening development cycles and just in time analysis of
                requests. Tools and processes I use include,
              </p>
              <p className='skill-list'>
                Agile &nbsp;&nbsp;|&nbsp;&nbsp; Scrum &nbsp;&nbsp;|&nbsp;&nbsp;
                Kanban &nbsp;&nbsp;|&nbsp;&nbsp; git & github
              </p>

              <h1 className={`skill-title ${active3 ? 'text-gradient' : ''}`}>
                iterate
              </h1>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default SkillSection;
