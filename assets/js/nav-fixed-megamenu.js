window.onscroll = function () {
    stickyToScroll();
}
let header = document.getElementById('header');
let headerContactNav = document.getElementById('header-contact-nav');
let rowHeader = document.getElementById('row-header');
let logo = document.getElementById('logo-first');
let logoLink = document.getElementById('logo-link');
let logoMenuScroll = document.getElementById('logo-menu-scroll');
let hr = document.querySelector('hr');
let zoneContact = document.getElementById('contact-header-container');
let sticky = header.offsetTop;
let itemsMenu = document.querySelectorAll('header li.menu-item-has-children');
let subMenu = document.querySelectorAll('header ul.sub-menu');
let colNav = document.getElementById('col-nav');
let logoMenuLgDown = document.getElementById('logo-menu-lg-down');
console.log(logoMenuLgDown);
if (window.matchMedia('(min-width: 992px)').matches) {
    // Header ordi, dans row-header remplacer le contenu par logo + zone de contact 
    rowHeader.innerHTML =  logo.outerHTML + zoneContact.outerHTML;
    // nav (logo-menu-lg-down + col-nav ) : créer section après header-contact-nav
    let section = document.createElement('section');
    header.appendChild(section);
    section.classList.add('container-fluid', 'bg-white','d-flex','py-2');
    section.id = 'navbar';
    let divContainer = document.createElement('div');
    section.appendChild(divContainer);
    divContainer.classList.add('container');
    divContainer.id ='navbarTop';
    let divRow = document.createElement('div');
    divContainer.appendChild(divRow);
    divRow.classList.add('row','py-2');
    divRow.appendChild(logoMenuLgDown);
    divRow.appendChild(colNav);
}
function stickyToScroll() {
    header.classList.add('no-sticky');
    if (window.matchMedia('(min-width: 992px)').matches) {
        let navbar = document.getElementById('navbar');
        navbar.classList.add('no-sticky');
        logoMenuScroll.classList.add('display-none');
            }
    if (window.pageYOffset > sticky) {
        if (window.matchMedia('(min-width: 992px)').matches) {
            navbar.classList.remove('no-sticky');
            navbar.classList.add('sticky');
            navbar.classList.add('box-shadow');
            logoMenuScroll.classList.remove('display-none');
            logoMenuScroll.classList.add('display-block');
        } else{
        header.classList.remove('no-sticky');
        header.classList.add('sticky');
        header.classList.add('box-shadow');
        zoneContact.classList.remove('display-flex');
        hr.classList.remove('display-flex');
        zoneContact.classList.add('display-none');
        hr.classList.add('display-none');}
        
    } else {
        header.classList.remove('sticky');
        header.classList.add('no-sticky');
        header.classList.remove('box-shadow');
        zoneContact.classList.remove('display-none');
        hr.classList.remove('display-none');
        zoneContact.classList.add('display-flex');
        hr.classList.add('py-0');
        }
}
for (let itemHasChildren of itemsMenu) {
    let buttonArrowDownMenu = document.createElement('button');
    buttonArrowDownMenu.setAttribute('type', 'button');
    buttonArrowDownMenu.setAttribute('class', 'arrow-menu-down');
    let idItemParent = itemHasChildren.getAttribute('id');
    let aItemChild = itemHasChildren.querySelector('a');
    aItemChild.after(buttonArrowDownMenu);
    for (let subMenuItems of subMenu) {
        subMenuItems.classList.add('display-none');
        subMenuItems.classList.remove('display-flex');
    }
    buttonArrowDownMenu.addEventListener('click', function (e) {
        buttonArrowDownMenu.classList.toggle(idItemParent);
        buttonArrowDownMenu.classList.toggle('arrow-menu-down');
        buttonArrowDownMenu.classList.toggle('arrow-menu-up');
        // sous menu, mega menu
        let parentMenuActive = document.querySelectorAll('#navigation li.' + idItemParent);
        console.log(parentMenuActive);
        let subMenuActive = parentMenuActive.item(0); // récupérer dans le 1er élément de la NodeList -> <li>
        subMenuActive.childNodes[3].classList.toggle('display-flex'); // toggle le 3ème enfant de la NodeList -> ul.sub-menu
        subMenuActive.childNodes[3].classList.toggle('display-none');
    });
}
