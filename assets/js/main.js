/* Show menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu - validate if constant exist */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hidden menu - validate if constant exist */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')
const navAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', navAction))

/* Change background header */
const scrollHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tah
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/* Scroll sections active link */


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/


/*=============== EMAIL JS ===============*/
