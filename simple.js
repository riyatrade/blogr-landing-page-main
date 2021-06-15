const introduction = document.querySelector(".introduction"),
    main = document.querySelector("main"),
    footer = document.querySelector("footer"),
    navMenuController = document.querySelector(".nav-menu-controller"),
    navMenu = document.querySelector(".nav-menu"),
    navMenuControllerImage = document.querySelectorAll(".nav-menu-controller img"),
    navMainLinkContainer = document.querySelectorAll(".nav-main-link-container"),
    navSecondaryMenu = document.querySelectorAll(".nav-secondary-menu");


//Nav Menu

navMenuController.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visibility");
    for (let i = 0; i < navMenuControllerImage.length; i++) {
        navMenuControllerImage[i].classList.toggle("invisible");
    }
    subMenuClose();
});

introduction.addEventListener("click", () => {
    closeMenu();
    subMenuClose();
})

main.addEventListener("click", () => {
    closeMenu();
    subMenuClose();
})

footer.addEventListener("click", () => {
    closeMenu();
    subMenuClose();
})

// Nav Sub-Menu Controller Behaviour

for (let i = 0; i < navMainLinkContainer.length; i++) {
    navMainLinkContainer[i].addEventListener("click", function () {
        const subMenu = this.lastElementChild;
        if (subMenu.classList.contains("nav-secondary-menu-visibility")) {
            for (let i = 0; i < navMainLinkContainer.length; i++) {
                navMainLinkContainer[i].lastElementChild.classList.add("nav-secondary-menu-visibility");
                navMainLinkContainer[i].children[0].classList.remove("active-nav-menu");
                navMainLinkContainer[i].children[1].classList.remove("rotate");
                navMainLinkContainer[i].children[2].classList.remove("rotate");
                navMainLinkContainer[i].children[2].classList.add("active-light-arrow");
            }
                subMenu.classList.remove("nav-secondary-menu-visibility");
                this.children[0].classList.add("active-nav-menu");
                this.children[1].classList.add("rotate");
                this.children[2].classList.add("rotate");
                this.children[2].classList.remove("active-light-arrow");
                setTimeout(()=>{
                subMenu.classList.add("nav-secondary-menu-visibility");
                this.children[0].classList.remove("active-nav-menu");
                this.children[1].classList.remove("rotate");
                this.children[2].classList.remove("rotate");
                this.children[2].classList.add("active-light-arrow");
            }, 6000);
        } else {
                subMenu.classList.add("nav-secondary-menu-visibility");
                this.children[0].classList.remove("active-nav-menu");
                this.children[1].classList.remove("rotate");
                this.children[2].classList.remove("rotate");
                this.children[2].classList.add("active-light-arrow");
        }
    });
}

// Menu Close

function closeMenu() {
    if (navMenu.classList.contains("nav-menu-visibility") === false) {
        navMenu.classList.add("nav-menu-visibility");
        for (let i = 0; i < navMenuControllerImage.length; i++) {
            navMenuControllerImage[i].classList.toggle("invisible");
        }
    }
}
function subMenuClose() {
    for (let i = 0; i < navSecondaryMenu.length; i++) {
        if (navSecondaryMenu[i].classList.contains("nav-secondary-menu-visibility") === false) {
            navSecondaryMenu[i].classList.add("nav-secondary-menu-visibility")
            navMainLinkContainer[i].children[0].classList.remove("active-nav-menu");
            navMainLinkContainer[i].children[1].classList.remove("rotate");
            navMainLinkContainer[i].children[2].classList.remove("rotate");
            navMainLinkContainer[i].children[2].classList.add("active-light-arrow");
        }
    }
}

