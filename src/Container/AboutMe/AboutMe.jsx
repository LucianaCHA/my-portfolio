import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";

import s from "./AboutMe.module.css";
export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscribe =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "Passionate about technology, meticulous and always learning more about my field to keep up to date and expand my skills.Full stack developer with knowledge of PERN with Redux. Strong professional willing to be an asset to an organization.",
    highlights: {
      bullets: [
        "Full Stack Development",
        "Interactive Front End as per the design",
        "React",
        "Redux for State Management",
        "Building REST API",
        "Managing database",
      ],
      heading: "Main technologies",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((bullet, i) => {
      return (
        <div className={s.highlights} key={i}>
          <div className={s.highlightsBlob}></div>
          <span>{bullet}</span>
        </div>
      );
    });
  };

  return (
    <div className={s.aboutMeContainer} id={props.id || ""}>
      <div className={s.aboutMeParent}>
        <div className={s.aboutMeProfile}></div>
        <ScreenHeading title={"About Me"} subtitle={""} />
        <div className={s.aboutMeCard}>
          
          <div className={s.aboutMeDetails}></div>
          <span className={s.aboutMeDescription}>
            {SCREEN_CONSTANTS.description}
          </span>
          <div className={s.aboutMeHighlights}>
            <div className={s.highlightsHeading}>
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div> 
            {renderHighlights()}
          </div>
          <div className={s.aboutMeOptions}>
            <button className="btn primary-btn">Hire Me</button>
            <a href="LucianaChamorro-CV.pdf" download="LucianaChamorro-CV.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
