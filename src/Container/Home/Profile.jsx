import React from 'react';

import s from "./Profile.module.css"

export const Profile =()=> {
  return (
    <div className={s.profileContainer}>
        <div className={s.profileParent}>
            <div className={s.profileDetails}>
                <div className={s.colz}>
                  <a href="#">
                  <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/juan-jose-gonzalez-gonzalez-b9a8a11b3/">
                  <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/juan-jose-gonzalez-gonzalez-b9a8a11b3/">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/juan-jose-gonzalez-gonzalez-b9a8a11b3/">
                    <i className="bi bi-instagram"></i>
                  </a>
                  
    Profile     
                </div>
            </div>
        </div>
    </div>
  )
}

