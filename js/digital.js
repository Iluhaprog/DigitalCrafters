var burgerButton = document.getElementById("burger");
var menuHeader = document.getElementById("header-menu");
var menuLink = document.getElementsByClassName("menu-link");

burgerButton.addEventListener("click", function() {
    if( menuHeader.dataset.show == "false" &&
        burgerButton.dataset.cross == "false" ){

        burgerButton.classList.add("button-burger_cross");
        burgerButton.dataset.cross == "true";

        menuHeader.style.top = 60 + "px";
        menuHeader.dataset.show = "true";
    } else{
        burgerButton.classList.remove("button-burger_cross");
        burgerButton.dataset.cross == "false";

        menuHeader.style.top = -100 + "vh";
        menuHeader.dataset.show = "false";
    }
});

function setEventMenuLink( menuLink ) {
    for ( var i = 0; i < menuLink.length; i++ ) {
        menuLink[i].addEventListener("click", function() {
            burgerButton.classList.remove("button-burger_cross");
            burgerButton.dataset.cross == "false";
            menuHeader.style.top = -100 + "vh";
            menuHeader.dataset.show = "false";
        });
    }
}

setEventMenuLink(menuLink);
