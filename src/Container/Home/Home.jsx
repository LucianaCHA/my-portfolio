import React from 'react'
import {Profile}    from './Profile/Profile'
import {Footer} from './Footer/Footer';
import Header from './Header/Header';

import s from './Home.module.css'
export default function Home() {
  return (
    <div className={s.homeContainer}>
        <Header />
        <Profile />
        <Footer />
        
    </div>
  )
}
