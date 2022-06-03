import Home from "../Container/Home/Home";
import AboutMe from "../Container/AboutMe/AboutMe";
import Resume from '../Container/Resume/Resume';
import Gallery from '../Container/Gallery/Gallery'

export const TOTAL_SCREENS =[
    {
        screen_name: "Home",
        component: Home
    },
    {
        screen_name: "About Me",
        component: AboutMe
    },
    {
        screen_name: "Resume",
        component: Resume
    },
    {
        screen_name: "Gallery",
        component: Gallery
    }
]

export const  GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
    for(let i=0; i<TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i
    }
    return -1;
}