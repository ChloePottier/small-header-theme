window.onscroll = function() {
    stickyToScroll();
}
let navbar = document.getElementById('navbar');
let navbarTop = document.getElementById('navbarTop');
let navBurger = document.getElementById('nav-burger');
let sticky = navbar.offsetTop;
// let navHeader = document.querySelector('#menu-header-1');
let itemsMenu = document.querySelectorAll('li.menu-item-has-children');
let subMenu = document.querySelectorAll('ul.sub-menu');
function stickyToScroll() {
    navbar.classList.add('no-sticky');
    if (window.pageYOffset > sticky ) {
        navbar.classList.remove('no-sticky');
        navbar.classList.add('sticky');
        navbar.classList.add('box-shadow');
        if (window.matchMedia('(max-width: 991px)').matches) {
            navBurger.classList.add('sticky');
        }
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.add('no-sticky');
        navbar.classList.remove('box-shadow');
        if (window.matchMedia('(max-width: 991px)').matches) {
            navBurger.classList.remove('sticky');
        }
    }
}
if (window.matchMedia('(min-width: 992px)').matches) {
    for(let subMenuItems of subMenu){
        subMenuItems.classList.add('display-none');
        subMenuItems.classList.remove('display-block');
    }
    function eventMenuMouse(e){
        e.addEventListener('mouseenter', () =>{
            e.childNodes[2].classList.add('display-block');
            e.childNodes[2].classList.remove('display-none');
            e.childNodes[2].classList.add('sub-menu-color');

        });
        e.addEventListener('mouseleave', () =>{
            e.childNodes[2].classList.remove('display-block');
            e.childNodes[2].classList.add('display-none');
        });
    }
    itemsMenu.forEach(eventMenuMouse);
}