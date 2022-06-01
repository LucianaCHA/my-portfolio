import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs';


export default class ScrollService {
    static scrollHandler = new ScrollService;
    static currentScreen = new Subject();
    static currentScreenFadeIn  = new Subject();


    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewPort);
    }
    scrollToHireMe = () => {
        let contactMeScreen = document.getelementById('Contact Me');
        if(!contactMeScreen)return;
        contactMeScreen.scrollIntoView({behavior: 'smooth'});
    }
    scrollToHome = () => {
        let homeScreen = document.getelementById('Contact Me');
        if(!homeScreen)return;
        homeScreen.scrollIntoView({behavior: 'smooth'});
    }
}