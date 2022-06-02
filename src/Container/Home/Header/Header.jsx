import React, {useState} from 'react'

import {TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './Header.css';



export default function Header() {

    const [selectedScreen, setSelectedScreen] = useState(0);
    const [headerOptions, setHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) =>{
        if(!currentScreen || !currentScreen.screenInView) return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if(screenIndex < 0) return;
        
    }
    let currentScreenSubs = ScrollService.currentScreen.subscribe(updateCurrentScreen);
    
    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => {
                return(                
                    <div key ={screen.screen_name} className={optionsClass(i)}
                //acá el click es lo que activa el cambio de pantallla! 
                onClick= {() => switchScreen(i, screen)}>
                {/* //esto es lo que renderiza _ el name de la pantalla que tengo indicado en el objeto de pantalñlas */}
                <span> {screen.screen_name}   </span>  
                </div>)
            })
        )
    }
    const optionsClass = (index) =>{
    let classes = 'header-option';
    if(index < TOTAL_SCREENS.length-1 )
        classes += ' header-option-separator';
    if (selectedScreen === index)
    //acá puedo destacar lo que está clickeado osea la screen que veo
        classes += ' selected-header-option';
    return classes;
}

const switchScreen = (index, screen) =>{
    //elijo la screen que quiero que se muestre por su id 
    let screenComponent = document.getElementById(screen.screen_name);
    if(!screenComponent) return;
    //scrolla hasta la pantalla que quiero ver
    screenComponent.scrollIntoView({behavior: 'smooth'});
    //actualizo el estado de la pantalla que estoy viendo
    setSelectedScreen(index);
    setHeaderOptions(false);
}


  return (
    <div>
        <div className='header-container' onClick={() => setHeaderOptions(!headerOptions)}>
            <div className='header-parent'>
                <div className='header-hamburguer' onClick={() => setHeaderOptions(!headerOptions)}>
                    <FontAwesomeIcon className='header-hamburguer-bars' icon={faBars} />
                </div>
                <div className='header-logo'>

                </div>
                <div className={headerOptions
                ? 'header-options show-hamburguer-options' 
                : 'header-options'} >
                    {getHeaderOptions()}
                </div>
            </div>
        </div>
    </div> 
  )
}
