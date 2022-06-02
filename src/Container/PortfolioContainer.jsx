import React from 'react'

import s from './PortfolioContainer.module.css';
import { TOTAL_SCREENS } from '../utilities/commonUtils'

export default function PortfolioContainer() {
    const mapScreens = () => {

        return TOTAL_SCREENS.map((screen) =>   {
            return  (screen.component)
            ? <screen.component key={screen.screen_name} id = {screen.screen_name } screenName={screen.screen_name} /> 
            : <div key={screen.screen_name}></div>
        })
    }
  return (
    <div className={s.portfolioContainer} >{mapScreens()}</div>
  )
}
