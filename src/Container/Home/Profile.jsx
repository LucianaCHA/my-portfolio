import React from "react";
import {TypingName} from './TypingName';
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profileParent}>
        <div className={s.profileDetails}>
          <div className={s.colz}>
            <div className={s.colzIcon}>
            <a href="https://www.linkedin.com/in/luciana-chamorro">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/LucianaCHA">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/juan-jose-gonzalez-gonzalez-b9a8a11b3/">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/juan-jose-gonzalez-gonzalez-b9a8a11b3/">
              <i className="bi bi-instagram"></i>
            </a>
            </div>
            
          </div>

          <div className={s.profileDetailsName}>
            <span className={s.primaryText}>
              {" "}
              Hello there! I'm <span className={s.highligthedText}>Luciana</span>
            </span>
          </div>
          <div className={s.profileDetailsRol}>
            <span className={s.primaryText}>
              {" "}
              <h1>
              {" "}
              <TypingName />
              </h1>
              <span className={s.profileDetailsRolTag}>
                algo para decir de mi 
              </span>
            </span>
          </div>
          <div className={s.profileOptions}>
            <button className= 'btn primary-btn'> 
              Hire Me 
            </button>
            <a href='LucianaChamorro-CV.pdf' download='LucianaChamorro-CV.pdf' >
              <button className= 'btn highlighted-btn'>
                Get CV
              </button>
            </a>
          </div>
        </div>
        
        <div className={s.profilePicture}>
          <div className={s.profilePictureBackground}>

          </div>
        </div>
      </div>
    </div>
  );
};
