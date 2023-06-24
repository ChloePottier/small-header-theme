window.onscroll = function () {
    stickyToScroll();
}
let header = document.getElementById("header");
let headerNav = document.getElementById("header-nav");
let rowHeader = document.getElementById("row-header");
let logo = document.getElementById("logo-first");
let logoLink = document.getElementById("logo-link");
let logoMenuScroll = document.getElementById("logo-menu-scroll");
let zoneContact = document.getElementById("contact-header-container");
let sticky = header.offsetTop;
let itemsMenu = document.querySelectorAll("header li.menu-item-has-children");
let subMenu = document.querySelectorAll("header ul.sub-menu");
let colNav = document.getElementById("col-nav");
let logoMenuLgDown = document.getElementById("logo-menu-lg-down");
if (window.matchMedia("(min-width: 992px)").matches) {
    zoneContact.remove();
    // Header ordi, dans row-header remplacer le contenu par logo + zone de contact 
    rowHeader.innerHTML =  logo.outerHTML + zoneContact.outerHTML;
    // nav (logo-menu-lg-down + col-nav ) : créer section après header-contact-nav
    let section = document.createElement("section");
    header.appendChild(section);
    section.classList.add("container-fluid", "bg-white","d-flex");
    section.id = "navbar";
    let divContainer = document.createElement("div");
    section.appendChild(divContainer);
    divContainer.classList.add("container");
    divContainer.id ="navbarTop";
    let divRow = document.createElement("div");
    divContainer.appendChild(divRow);
    divRow.classList.add("row","py-2");
    divRow.appendChild(logoMenuLgDown);
    divRow.appendChild(colNav);
}
function stickyToScroll() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        let navbar = document.getElementById("navbar");
        if (window.pageYOffset > sticky) {
            navbar.classList.remove("no-sticky");
            navbar.classList.add("sticky");
            navbar.classList.add("box-shadow");
            logoMenuScroll.classList.remove("display-none");
            logoMenuScroll.classList.add("display-block");
        } else {
            navbar.classList.add("no-sticky");
            logoMenuScroll.classList.add("display-none");
            navbar.classList.remove("sticky");
            navbar.classList.remove("box-shadow");
        }
    } else {
        headerNav.classList.add("no-sticky");
        if (window.pageYOffset > sticky) {
            headerNav.classList.remove("no-sticky");
            headerNav.classList.add("sticky");
            headerNav.classList.add("box-shadow");
        } else {
            headerNav.classList.remove("sticky");
            headerNav.classList.add("no-sticky");
            headerNav.classList.remove("box-shadow");
        }
    }
}
function megaMenu(){
        // jslint ne recommande par utilisation boucle for mais forEach
    // il faudra 
for (let itemHasChildren of itemsMenu) {
    let buttonArrowDownMenu = document.createElement("button");
    buttonArrowDownMenu.setAttribute("type", "button");
    buttonArrowDownMenu.setAttribute("aria-label", "ouvrir le menu");
    buttonArrowDownMenu.setAttribute("class", "arrow-menu-down");
    let idItemParent = itemHasChildren.getAttribute("id");
    let aItemChild = itemHasChildren.querySelector("a");
    aItemChild.after(buttonArrowDownMenu);
    console.log(subMenu);
    for (let subMenuItems of subMenu) {
        subMenuItems.classList.add("display-none");
        subMenuItems.classList.remove("display-flex");
    }
    buttonArrowDownMenu.addEventListener("click", function (e) {
        buttonArrowDownMenu.classList.toggle(idItemParent);
        buttonArrowDownMenu.classList.toggle("arrow-menu-down");
        buttonArrowDownMenu.classList.toggle("arrow-menu-up");
        // sous menu, mega menu
        let parentMenuActive = document.querySelectorAll("#navigation li." + idItemParent);
        // console.log(parentMenuActive);
        let subMenuActive = parentMenuActive.item(0); // récupérer dans le 1er élément de la NodeList -> <li>
        subMenuActive.childNodes[3].classList.toggle("display-flex"); // toggle le 3ème enfant de la NodeList -> ul.sub-menu
        subMenuActive.childNodes[3].classList.toggle("display-none");
    });
}
}
