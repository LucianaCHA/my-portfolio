import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs';


export default class ScrollService {
    static scrollHandler = new ScrollService();
    static currentScreen = new Subject();
    static currentScreenFadeIn  = new Subject();


    constructor() {
        window.addEventListener("scroll", this.checkCurrentScreenUnderViewPort);
    }
    scrollToContactMe = () => {
        let contactMeScreen = document.getElementById('Contact Me');
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: 'smooth'});
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById('Home');
        console.log('click en boton to home cuanto vale homeScreen', homeScreen);
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: 'smooth'});
    }

    isElementInView = (el, type)=>{
        let rect = el.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;

        let partiallyVisible = elemTop < window.innerHeight && elemBottom >= 0;
        let completellyVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        switch(type){

            case 'partial':
                return partiallyVisible;

            case 'complete':
                return completellyVisible;

                default:
                    return false
        }

}

checkCurrentScreenUnderViewPort = (e) => {
    if(!e || Object.keys(e).length < 1 )
    return;
    for(let screen of TOTAL_SCREENS){
        let screenFromDom = document.getElementById(screen.screen_name);
        if(!screenFromDom)continue;

        let isVisible = this.isElementInView(screenFromDom, 'complete');
        let partialVisible = this.isElementInView(screenFromDom, 'partial');

        if(isVisible || partialVisible){
           if (partialVisible && !screen.alreadyRendered){
               ScrollService.currentScreenFadeIn.next({
                   fadeInScreen: screen.screen_name,
               });
           }
           screen['alreadyRendered'] = true;
           break;
        }
        if(isVisible){
            ScrollService.currentScreen.next({
               screenInView :screen.screen_name});
               break;
        }
    }
}
}