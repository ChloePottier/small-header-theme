window.onscroll = function() {
    stickyToScroll();
}
let header = document.getElementById('header');
let hr = document.querySelector('hr');
let zoneContact = document.getElementById('contact-header-container');
let sticky = header.offsetTop;
let itemsMenu = document.querySelectorAll('li.menu-item-has-children');
let subMenu = document.querySelectorAll('ul.sub-menu');
function stickyToScroll() {
    header.classList.add('no-sticky');
    if (window.pageYOffset > sticky ) {
        header.classList.remove('no-sticky');
        header.classList.add('sticky');
        header.classList.add('box-shadow');
        zoneContact.classList.remove('display-flex');
        hr.classList.remove('display-flex');
        zoneContact.classList.add('display-none');
        hr.classList.add('display-none');

    } else {
        header.classList.remove('sticky');
        header.classList.add('no-sticky');
        header.classList.remove('box-shadow');
        zoneContact.classList.remove('display-none');
        hr.classList.remove('display-none');
        zoneContact.classList.add('display-flex');
        hr.classList.add('display-flex');

        // if (window.matchMedia('(max-width: 991px)').matches) {
        //     zoneContact.classList.add('display-none')
        // }
    }
}
for(let itemHasChildren  of itemsMenu){
    let buttonArrowDownMenu = document.createElement('button');
    buttonArrowDownMenu.setAttribute('type', 'button');
    buttonArrowDownMenu.setAttribute('class', 'arrow-menu-down');
    let idItemParent = itemHasChildren.getAttribute('id');
    let aItemChild = itemHasChildren.querySelector('a');
    aItemChild.after(buttonArrowDownMenu);
    for(let subMenuItems of subMenu){
        subMenuItems.classList.add('display-none');
        subMenuItems.classList.remove('display-flex');
    }
    buttonArrowDownMenu.addEventListener( 'click',function(e){
        buttonArrowDownMenu.classList.toggle(idItemParent);
        buttonArrowDownMenu.classList.toggle('arrow-menu-down');
        buttonArrowDownMenu.classList.toggle('arrow-menu-up');
        // sous menu, mega menu
        let parentMenuActive = document.querySelectorAll('#navigation li.'+idItemParent);
        console.log(parentMenuActive);
        let subMenuActive = parentMenuActive.item(0); // récupérer dans le 1er élément de la NodeList -> <li>
        subMenuActive.childNodes[3].classList.toggle('display-flex'); // toggle le 3ème enfant de la NodeList -> ul.sub-menu
        subMenuActive.childNodes[3].classList.toggle('display-none');      
    });
    }
