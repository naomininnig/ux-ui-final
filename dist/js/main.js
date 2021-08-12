const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const navigation = document.querySelector('.menu-nav');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
        nav.style.setProperty("pointer-events", "all");
        navigation.style.opacity = ".9";
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.style.visibility = 'hidden';
        nav.style.setProperty("pointer-events", "none");
        navigation.style.opacity = "0"; 
        showMenu = false;
    }
}