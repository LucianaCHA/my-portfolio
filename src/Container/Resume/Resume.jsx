import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import js from "../../assets/Resume/Technologies/javascript.svg";
import react from "../../assets/Resume/Technologies/react.svg";
import redux from "../../assets/Resume/Technologies/redux.svg";
import express from "../../assets/Resume/Technologies/express.svg";
import node from "../../assets/Resume/Technologies/nodedotjs.svg";
import postgresql from "../../assets/Resume/Technologies/postgresql.svg";
import html from "../../assets/Resume/Technologies/html5.svg";
import css from "../../assets/Resume/Technologies/css3.svg";
import cssmodule from "../../assets/Resume/Technologies/cssmodules.svg";
import sequelize from "../../assets/Resume/Technologies/sequelize.svg";

import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading ">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subtitle ? props.subtitle : ""}</span>
        </div>
        
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Other certifications", logoSrc: "interests.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", tool: js },
    { skill: "React JS", tool: react },
    { skill: "Redux", tool: redux },
    { skill: "Express JS", tool: express },
    { skill: "Node JS", tool: node },
    { skill: "PostgreSQL ", tool: postgresql },
    { skill: "Sequelize", tool: sequelize },
    { skill: "HTML 5", tool: html },
    { skill: "CSS", tool: css },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "", toDate: "2021" },
      description:
        "A Personal Portfolio to share my details and projects at one place.",
      subtitle: "Main technologies: React JS, Bootstrap",
    },
    {
      title: "Marvel App |Academic Project",
      duration: { fromDate: "May.2022", toDate: "May.2022" },
      description:
        "E-commerce app designed to consume MarvelAPI, read about comics, and read online by a regular subscription with payment system integration",
      subtitle:
        "Main technologies: React, PostgreSQL, Express Js, Node Js, Redux, Auth0, Paypal.",
    },
    {
      title: "PokemonAPP |Academic Project ",
      duration: { fromDate: "Abr.2022", toDate: "Abr.2022" },
      description:
        "SPA designed to consume poke API, save info in a database, create new pokemon, and record it in the DB. Other features like filters, sorting, etc.",
      subtitle: "Main technologies: React, PostgreSQL, Express Js, Node Js.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Henry- Full Stack Web Developer Bootcamp"}
        subtitle={"FULL STACK WEB DEVELOPER BOOTCAMP"}
        fromDate={"2022"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"National University of Quilmes, Argentina"}
        subtitle={"BIOTECHNOLOGY DEGREE"}
        fromDate={" "}
        toDate={"IN PROGRESS"}
      />
      <ResumeHeading
        heading={"Cacipra Institute"}
        subtitle={"PAS (Matriculated Insurance Agent) Mat SSN 94363"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      
    </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Keep learning"
          description="I enjoy learning new things I like to feel challenged about that. And when I have the opportunity to teach others what I know, I appreciate it. Sharing is the clue!."
        />
        

<ResumeHeading
        heading={"English proficiency"}
        subtitle={
          <a className="link" href="https://efset.org/cert/nVLXBK">
            English Level: EF SET Certificate C2:Proficient
          </a>
        }
      />
      <ResumeHeading
        subtitle={<a className="link"
            href="https://www.freecodecamp.org/certification/fcc533a03e7-8d5f-4b8e-a7d8-f5efdfbdb745/responsive-web-design"
          >
            FreeCodeCamp: Responsive Web Design
          </a>}
        
      />
      <ResumeHeading
        subtitle={<a className="link"
            href="https://www.freecodecamp.org/certification/fcc533a03e7-8d5f-4b8e-a7d8-f5efdfbdb745/responsive-web-design"
          >
            FreeCodeCamp: Responsive Web Design
          </a>}
        
      />
      </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Academic Experience| MarvelApp"}
          subtitle={"FULL STACK DEVELOPER"}
          fromDate={"2022"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Graduation work after +700 hours of theoretical-practical course.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Develop and design React SPA that consumes Marvel Comics API. The
            purpose was to offer the customer/visitor access to the
            catalog of comics and characters, and purchase a subscription for
            reading access.
          </span>
        </div>

      </div>
         
      <div className="experience-container">
        <ResumeHeading
          heading={"Self-Employed"}
          subtitle={"MATRICULATED INSURANCE AGENT MAT SSN 94363"}
          fromDate={"2018"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Collaborate with individuals and companies in the design of life
            and retirement policies for family and wealth protection.
            -Asessment about liability insurance for individuals and business.
          </span>
        </div>  
       
        </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill">
            <div>
              <img
                style={{ alignSelf: "center" }}
                src={skill.tool}
                alt="tool"
              />
            </div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subtitle={projectsDetails.subtitle}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,


  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subtitle={"Lately academic and job experience info"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
