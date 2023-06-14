//variables
const navEmail = document.querySelector('.email-nav-container');
const desktopMenu = document.querySelector('.menu-desktop');

const iconMobileMenu = document.querySelector('.menu-mobile-nav');
const mobileMenu = document.querySelector('.menu-mobile');

const iconCart = document.querySelector('.shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-2');

const cardsContainers = document.querySelector('.cards-container')

const imageProductClick = document.querySelector('.image-product')
const closeIcon = document.querySelector('.close')
const detailProductCard = document.querySelector('.detail-product-card')

//addEventListener
navEmail.addEventListener('click', toggleDesktopMenu)
iconMobileMenu.addEventListener('click', toggleMobileMenu)
iconCart.addEventListener('click', toggleCart)
closeIcon.addEventListener('click', toggleClose)
//imageProductClick.addEventListener('click', toggleClose)


//Funciones menu
function toggleDesktopMenu() {
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    let isDetailProductCardOpen = !detailProductCard.classList.contains('inactive');

    if(isShoppingCartOpen || isDetailProductCardOpen) {
        shoppingCart.classList.add('inactive');
        detailProductCard.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive') 
}

function toggleMobileMenu() {
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    let isDetailProductCardOpen = !detailProductCard.classList.contains('inactive');

    if(isShoppingCartOpen || isDetailProductCardOpen) {
        shoppingCart.classList.add('inactive');
        detailProductCard.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    let isDetailProductCardOpen = !detailProductCard.classList.contains('inactive');


    if (isDesktopMenuOpen || isMobileMenuOpen || isDetailProductCardOpen) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        detailProductCard.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}

function toggleClose() {
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');


    if (isDesktopMenuOpen || isMobileMenuOpen || isShoppingCartOpen) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoppingCart.classList.add('inactive');
    }

    detailProductCard.classList.toggle('inactive')
}


 //Pagina de inicio y productos
 let productsList = []

function Products (image, name, price, category, description) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
}

let product1 = new Products(
    './assets/mueble.jpg', 
    'Mueble de Madera', 
    130, 
    'furniture', 
    'Hermoso mueble de madera de pino tipo side board'
    )

let product2 = new Products(
    './assets/peluche.jpg', 
    'Oso de Peluche', 
    60, 
    'toys', 
    'Oso de peluche de tamaño grande color beige' 
    )

let product3 = new Products(
    './assets/camisa-hawaina.jpg', 
    'Camisa Hawaina', 
    35, 
    'clothes', 
    'Comoda camisa con estampado de hawaino para caballero'
    )

let product4 = new Products(
    './assets/iphone-14.jpg', 
    'Iphone 14', 
    1500, 
    'electronics', 
    'Iphone 4 color morado y 128gb'
    )

let product5 = new Products(
    './assets/samsung-s23.jpg', 
    'Samsung S23 Ultra', 
    1450, 
    'electronics', 
    'Samsung S23 Ultra color morado y 128gb'
    )

let product6 = new Products(
    './assets/laptop.jpg', 
    'Laptop acer', 
    800, 
    'electronics', 
    'Laptop acer, tipo notebook de 11 color gris'
    )

let product7 = new Products(
    './assets/vestido-negro.jpg',
    'Vestido Negro', 
    80, 
    'clothes', 
    'Hermoso vestido negro con cuello tipo v'
    )

productsList.push(product1, product2, product3, product4, product5, product6, product7)

function pageProductsList(arr) {
    let product
    
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imageProduct = document.createElement('img');
        imageProduct.classList.add('image-product');
        imageProduct.setAttribute('src', product.image);


        const descriptionProduct = document.createElement('div');
        descriptionProduct.classList.add('description-product');

        const productPriceCard = document.createElement('p');
        productPriceCard.classList.add('text-1');
        productPriceCard.innerText = '$' + product.price;

        const productNameCard = document.createElement('p');
        productNameCard.classList.add('text-4');
        productNameCard.innerText = product.name;

        
        const shoppingCartAdd = document.createElement('figure');
        shoppingCartAdd.classList.add('add-cart');


        const shoppingCartAddIcon = document.createElement('img');
        shoppingCartAddIcon.setAttribute('src', './icons/bt_add_to_cart.svg' );

        cardsContainers.appendChild(productCard)

        productCard.append(imageProduct, descriptionProduct, shoppingCartAdd);

        descriptionProduct.append(productPriceCard, productNameCard);

        shoppingCartAdd.appendChild(shoppingCartAddIcon);

    }
}

pageProductsList(productsList)

//detail Product



window.addEventListener('load', toggleClose)