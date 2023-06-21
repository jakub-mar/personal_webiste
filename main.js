const NAVBAR_COLORED_CLASS = 'nav-colored'
const NAVBAR_TRANSPARENT_CLASS = 'nav-transparent'

const navBar = document.querySelector('.nav')
console.log(navBar);

window.onscroll = function() {
    if(window.scrollY >= 150){
        navBar.classList.add(NAVBAR_COLORED_CLASS);
        navBar.classList.remove(NAVBAR_TRANSPARENT_CLASS);
    }
    else{
        navBar.classList.remove(NAVBAR_COLORED_CLASS)
        navBar.classList.add(NAVBAR_TRANSPARENT_CLASS);
    }
}