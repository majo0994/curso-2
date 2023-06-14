const navEmail = document.querySelector('.email-nav-container');
const desktopMenu = document.querySelector('.menu-desktop');
const iconMobileMenu = document.querySelector('.menu-mobile-nav');
const mobileMenu = document.querySelector('.menu-mobile');

navEmail.addEventListener('click', toggleDesktopMenu)
iconMobileMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
   mobileMenu.classList.toggle('inactive')
}