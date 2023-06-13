const navEmail = document.querySelector('.email-nav-container');
const desktopMenu = document.querySelector('.menu-container-1');

navEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}