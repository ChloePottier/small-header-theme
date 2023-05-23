window.onscroll = function() {
    stickyToScroll();
}
let header = document.getElementById('header');
console.log(header);
// let navbar = document.getElementById('navbar');
let navbarTop = document.getElementById('navbarTop');
let logoMenu = document.getElementById('logo-first');
let navBurger = document.getElementById('nav-burger');
let sticky = header.offsetTop;
let itemsMenu = document.querySelectorAll('li.menu-item-has-children');
let subMenu = document.querySelectorAll('ul.sub-menu');
function stickyToScroll() {
    header.classList.add('no-sticky');
    // logoMenu.classList.add('display-none');
    if (window.pageYOffset > sticky ) {
        header.classList.remove('no-sticky');
        header.classList.add('sticky');
        header.classList.add('box-shadow');
        // logoMenu.classList.remove('display-none');
        if (window.matchMedia('(max-width: 991px)').matches) {
            navBurger.classList.add('sticky');
        }
    } else {
        header.classList.remove('sticky');
        header.classList.add('no-sticky');
        header.classList.remove('box-shadow');
        if (window.matchMedia('(max-width: 991px)').matches) {
            navBurger.classList.remove('sticky');
        }
    }
}
// if (window.matchMedia('(min-width: 992px)').matches) {
//     for(let subMenuItems of subMenu){
//         subMenuItems.classList.add('display-none');
//         subMenuItems.classList.remove('display-block');
//     }
//     function eventMenuMouse(e){
//         e.addEventListener('mouseenter', () =>{
//             e.childNodes[2].classList.add('display-block');
//             e.childNodes[2].classList.remove('display-none');
//             e.childNodes[2].classList.add('sub-menu-color');

//         });
//         e.addEventListener('mouseleave', () =>{
//             e.childNodes[2].classList.remove('display-block');
//             e.childNodes[2].classList.add('display-none');
//         });
//     }
//     itemsMenu.forEach(eventMenuMouse);
// } else {
    for(let itemHasChildren  of itemsMenu){
        let buttonArrowDownMenu = document.createElement('button');
        buttonArrowDownMenu.setAttribute('type', 'button');
        buttonArrowDownMenu.setAttribute('class', 'arrow-menu-down');
        let idItemParent = itemHasChildren.getAttribute('id');
        let aItemChild = itemHasChildren.querySelector('a');
        aItemChild.after(buttonArrowDownMenu);
        // console.log(itemHasChildren);
        for(let subMenuItems of subMenu){
            subMenuItems.classList.add('display-none');
            subMenuItems.classList.remove('display-block');
        }
    

        buttonArrowDownMenu.addEventListener( 'click',function(e){
            // console.log(itemHasChildren.getAttribute('id'));
            // console.log(idItemParent);
            buttonArrowDownMenu.classList.toggle('active-item');
            buttonArrowDownMenu.classList.toggle('arrow-menu-down');
            buttonArrowDownMenu.classList.toggle('arrow-menu-up');
            // sous menu, mega menu
            // let parentMenuActive = document.querySelectorAll('#navigation li.'+idItemParent);
            // let parentMenuActive = document.querySelectorAll('#navigation-lg li.active-item');
            let itemActive = document.querySelectorAll('active-item');
            console.log(itemActive);
            let navigationBurger = document.getElementById('navigation');
            navigationBurger.remove();
            // let subMenuActive = parentMenuActive.item(0); // récupérer dans le 1er élément de la NodeList -> <li>
            // console.log(subMenuActive);
            // subMenuActive.classList.toggle('display-block'); // toggle le 3ème enfant de la NodeList -> ul.sub-menu
            // subMenuActive.classList.toggle('display-none');
            

        });
    }
        
    // }

   
    
// }