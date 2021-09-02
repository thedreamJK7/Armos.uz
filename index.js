// ----------- Mobile Menu --------------------
const mainHamburger = document.getElementById('mainHamburger');
const xBar = document.getElementById('xBar');
const mobileMenu = document.getElementById('mobileMenu');
const navHamburger = document.querySelector('.navHamburger');

mainHamburger.addEventListener('click', ()=> {
    mobileMenu.classList.add('mobileActive');
    navHamburger.classList.add('mobileActive');
});

xBar.addEventListener('click', ()=> {
    mobileMenu.classList.remove('mobileActive');
    navHamburger.classList.remove('mobileActive');
});

// mini Menu

const navbar = document.getElementById('navbar');
const compHamburger = document.querySelector('.compHamburger');
const compBars = document.querySelector('.compBars');

compHamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('navbarActive');
    compBars.classList.toggle('navbarActive');
});

const navbarItem = document.querySelectorAll('.navbar-item');
function linkAction() {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('navbarActive');
}

navbarItem.forEach(n => n.addEventListener('click',linkAction));

// Scroll
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`#first,#second`);
