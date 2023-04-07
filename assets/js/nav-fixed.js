window.onscroll = function() {
    stickyToScroll();
}
let navbar = document.getElementById('navbar');
let navbarTop = document.getElementById('navbarTop');
let logoMenu = document.getElementById('logo-menu-scroll');
let navBurger = document.getElementById('nav-burger');
let sticky = navbar.offsetTop;
let itemsMenu = document.querySelectorAll('li.menu-item-has-children');
let subMenu = document.querySelectorAll('ul.sub-menu');
function stickyToScroll() {
    navbar.classList.add('no-sticky');
    logoMenu.classList.add('display-none');
    if (window.pageYOffset > sticky ) {
        navbar.classList.remove('no-sticky');
        navbar.classList.add('sticky');
        navbar.classList.add('box-shadow');
        logoMenu.classList.remove('display-none');
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
} else {
    for(let itemHasChildren  of itemsMenu){
        let buttonArrowDownMenu = document.createElement('button');
        buttonArrowDownMenu.setAttribute('type', 'button');
        buttonArrowDownMenu.setAttribute('class', 'arrow-menu-down');
        let idItemParent = itemHasChildren.getAttribute('id');
        let aItemChild = itemHasChildren.querySelector('a');
        console.log(itemsMenu);
        aItemChild.after(buttonArrowDownMenu);


        for(let subMenuItems of subMenu){
            subMenuItems.classList.add('display-none');
            subMenuItems.classList.remove('display-block');
        }

        buttonArrowDownMenu.addEventListener( 'click',function(e){
            buttonArrowDownMenu.classList.toggle(idItemParent);
            buttonArrowDownMenu.classList.toggle('arrow-menu-down');
            buttonArrowDownMenu.classList.toggle('arrow-menu-up');

            // sous menu, mega menu
            let parentMenuActive = document.querySelectorAll('#navigation li.'+idItemParent);
            console.log(parentMenuActive);
            let subMenuActive = parentMenuActive.item(0); // récupérer dans le 1er élément de la NodeList -> <li>
            // console.log(subMenuActive);
            subMenuActive.childNodes[3].classList.toggle('display-block'); // toggle le 3ème enfant de la NodeList -> ul.sub-menu
            subMenuActive.childNodes[3].classList.toggle('display-none');
            

        });
    
        
    }

   
    
}