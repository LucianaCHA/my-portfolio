import React from 'react';

import s from './Footer.module.css';

export const Footer =() =>{
    return(
        <div className={s.footerContainer}>
            <div className={s.footerParent}>
                <img src={require('../../../assets/Home/shape-bg.png')} alt="not available"/>
            </div>
        </div>
    )
}