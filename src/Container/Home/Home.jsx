import React from 'react'
import {Profile}    from './Profile/Profile'
import {Footer} from './Footer/Footer'

import s from './Home.module.css'
export default function Home() {
  return (
    <div className={s.homeContainer}>
        <Profile />
        <Footer />
    </div>
  )
}
