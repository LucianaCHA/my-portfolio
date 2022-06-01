export default class Animations {

    static animations = new Animations();

    fadeInScreen = (screen_name) => {
        let screen = document.getElementById(screen_name);
        if (!screen || !screen_name) return;//di no tengo qué mostrar o el nombre qe pido no existe chau
        //si tengo qué mostrar , le doy estiñlo
        screen.style.opacity = '5';
        screen.style.trasform = 'translateY(1px)'
    }
}