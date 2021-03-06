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

// sr.reveal(`#second,#third,#fourth,#nineth,#tenth`,{
//     interval: 200
// });

window.addEventListener('scroll',()=> {
    let qwer = document.querySelector('header');
    qwer.classList.toggle('fixed', window.scrollY > 200);
});

// Services with jQuery 
$('.armo').click(function(){
    $('.wrapper1 > .secondImgStatisticInfo').fadeIn(400);
});
$('.moySklad').click(function(){
    $('.wrapper2 > .secondImgStatisticInfo').fadeIn(400);
});
$('.Profitbase').click(function(){
    $('.wrapper3 > .secondImgStatisticInfo').fadeIn(400);
});
$('.megaplan').click(function(){
    $('.wrapper4 > .secondImgStatisticInfo').fadeIn(400);
});
$('.wrapper1 > .secondImgStatisticInfo > i').click(function(){
    $('.wrapper1 > .secondImgStatisticInfo').fadeOut(400);
});
$('.wrapper2 > .secondImgStatisticInfo > i').click(function(){
    $('.wrapper2 > .secondImgStatisticInfo').fadeOut(400);
});
$('.wrapper3 > .secondImgStatisticInfo > i').click(function(){
    $('.wrapper3 > .secondImgStatisticInfo').fadeOut(400);
});
$('.wrapper4 > .secondImgStatisticInfo > i').click(function(){
    $('.wrapper4 > .secondImgStatisticInfo').fadeOut(400);
});

// scroll active

// const sections = document.querySelectorAll('section[id]');
// console.log(sections);

// function scrollActive() {
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;

//         sectionId = current.getAttribute('id');

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             let one = document.querySelector('.navB a[href*='+ sectionId + ']').classList.add('navActive');
//             console.log(one);
//         }
//     })
// }

// window.addEventListener('scroll', scrollActive);



