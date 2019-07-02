/*
 * Sticky Nav v1.0.0 (2019-07-01)
 * The javascript library for easy sticky nav.
 * (c) 2019 Will Kim (@_withoutwax)
 * Project Website: 
 * 
 * @version 1.0.0
 * @licensed under MIT license.
 * @author Will Kim
 *
 * @file StickyNav main library.
 */
let initAlert;

(function () {
    if (initAlert) {
        console.log("Setting up StickyNav.js");
    }
})();

const apple = () => {
    console.log("🍎");
}

const notify = (value = true) => {
    initAlert = value;
}

const init = (navElementId) => {
    // Sticky Navbar
    // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
    let prevScrollpos = window.pageYOffset;
    let navbar = document.querySelector(navElementId);
    
    // Adding necessary styles to the element
    navbar.style.transition = "top 0.3s";
    navbar.style.zIndex = "99";
    navbar.style.width = "100%";

    // console.log(navbar);

    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 700)  {
            if (prevScrollpos > currentScrollPos) {
                // Scroll Up - Show Nav bar
                // navbar.className = "sticky";
                navbar.style.position = "fixed";
                navbar.style.top = "0";
                // console.log("Scroll Up");
            } else {
                // Scroll Down - Hide Nav bar
                
                navbar.style.top = "-110px";
                // console.log("Scroll Down");
            }
        } else if (currentScrollPos < 550) {
            // Need this so that nav bar is no longer sticky and returns to original state.
            navbar.style.position = "initial";
        } else {
            navbar.style.top = "-110px";
        } 

    prevScrollpos = currentScrollPos;
    }   
}

module.exports = {
    apple: apple,
    init: init,
    notify: notify
}