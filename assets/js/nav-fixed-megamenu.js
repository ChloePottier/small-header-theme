window.onload = function () {
    megaMenu();
};
window.onscroll = function () {
    stickyToScroll();
};
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
    rowHeader.innerHTML =  logo.outerHTML + zoneContact.outerHTML;
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
    for ( itemHasChildren of itemsMenu) {
        let buttonArrowDownMenu = document.createElement("button");
        buttonArrowDownMenu.setAttribute("type", "button");
        buttonArrowDownMenu.setAttribute("aria-label", "ouvrir le menu");
        buttonArrowDownMenu.setAttribute("class", "arrow-menu-down");
        let idItemParent = itemHasChildren.getAttribute("id");
        let aItemChild = itemHasChildren.querySelector("a");
        aItemChild.after(buttonArrowDownMenu);
        for ( subMenuItems of subMenu) {
            subMenuItems.classList.add("display-none");
            subMenuItems.classList.remove("display-flex");
        }
        buttonArrowDownMenu.addEventListener("click", function (e) {
            buttonArrowDownMenu.classList.toggle(idItemParent);
            buttonArrowDownMenu.classList.toggle("arrow-menu-down");
            buttonArrowDownMenu.classList.toggle("arrow-menu-up");
            let parentMenuActive = document.querySelectorAll("#navigation li." + idItemParent);
            let subMenuActive = parentMenuActive.item(0);
            subMenuActive.childNodes[3].classList.toggle("display-flex");
            subMenuActive.childNodes[3].classList.toggle("display-none");
            subMenuActive.addEventListener("mouseleave", function (e) {
                if (window.matchMedia("(min-width: 992px)").matches) {
                    subMenuActive.childNodes[3].classList.remove("display-flex");
                    subMenuActive.childNodes[3].classList.add("display-none");
                    buttonArrowDownMenu.classList.add("arrow-menu-down");
                    buttonArrowDownMenu.classList.remove("arrow-menu-up");
                }
            });
        });
    }
}