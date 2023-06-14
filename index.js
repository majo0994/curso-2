//variables
const navEmail = document.querySelector('.email-nav-container');
const desktopMenu = document.querySelector('.menu-desktop');

const iconMobileMenu = document.querySelector('.menu-mobile-nav');
const mobileMenu = document.querySelector('.menu-mobile');

const iconCart = document.querySelector('.shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-2');

//addEventListener
navEmail.addEventListener('click', toggleDesktopMenu)
iconMobileMenu.addEventListener('click', toggleMobileMenu)
iconCart.addEventListener('click', toggleCart)

//Funciones menu
function toggleDesktopMenu() {
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');

    if(isShoppingCartOpen) {
        shoppingCart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive') 
}

function toggleMobileMenu() {
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');

    if(isShoppingCartOpen) {
        shoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');


    if (isDesktopMenuOpen || isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
 }
