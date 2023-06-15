//variables
const navEmail = document.querySelector('.email-nav-container');
const desktopMenu = document.querySelector('.menu-desktop');

const iconMobileMenu = document.querySelector('.menu-mobile-nav');
const mobileMenu = document.querySelector('.menu-mobile');

const iconCart = document.querySelector('.shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-2');

const cardsContainers = document.querySelector('.cards-container')

const detailProductCard = document.querySelector('.detail-product-card')

//addEventListener

navEmail.addEventListener('click', toggleDesktopMenu)
iconMobileMenu.addEventListener('click', toggleMobileMenu)
iconCart.addEventListener('click', toggleCart)


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

function detailProductOpen() {
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');


    if (isDesktopMenuOpen || isMobileMenuOpen || isShoppingCartOpen) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoppingCart.classList.add('inactive');
    }

    detailProductCard.classList.remove('inactive')
    renderDetailProduct(productsList)
}

function detailProductClose() {
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');


    if (isDesktopMenuOpen || isMobileMenuOpen || isShoppingCartOpen) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoppingCart.classList.add('inactive');
    }

    detailProductCard.classList.add('inactive')
}


 //Pagina de inicio y productos
 let productsList = []
 let product

function Products (id, image, name, price, category, description) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
}

let product1 = new Products(
    'id1',
    './assets/mueble.jpg', 
    'Mueble de Madera', 
    130, 
    'furniture', 
    'Hermoso mueble de madera de pino tipo side board'
    )

let product2 = new Products(
    'id2',
    './assets/peluche.jpg', 
    'Oso de Peluche', 
    60, 
    'toys', 
    'Oso de peluche de tamaño grande color beige' 
    )

let product3 = new Products(
    'id3',
    './assets/camisa-hawaina.jpg', 
    'Camisa Hawaina', 
    35, 
    'clothes', 
    'Comoda camisa con estampado de hawaino para caballero'
    )

let product4 = new Products(
    'id4',
    './assets/iphone-14.jpg', 
    'Iphone 14', 
    1500, 
    'electronics', 
    'Iphone 4 color morado y 128gb'
    )

let product5 = new Products(
    'id5',
    './assets/samsung-s23.jpg', 
    'Samsung S23 Ultra', 
    1450, 
    'electronics', 
    'Samsung S23 Ultra color morado y 128gb'
    )

let product6 = new Products(
    'id6',
    './assets/laptop.jpg', 
    'Laptop acer', 
    800, 
    'electronics', 
    'Laptop acer, tipo notebook de 11 color gris'
    )

let product7 = new Products(
    'id7',
    './assets/vestido-negro.jpg',
    'Vestido Negro', 
    80, 
    'clothes', 
    'Hermoso vestido negro con cuello tipo v'
    )

productsList.push(product1, product2, product3, product4, product5, product6, product7)

function pageProductsList(arr) {
    
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('id', product.id);

        const imageProduct = document.createElement('img');
        imageProduct.classList.add('image-product');
        imageProduct.setAttribute('src', product.image);
        imageProduct.addEventListener('click', detailProductOpen)

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

function renderDetailProduct (input) {

        const closeIcon = document.createElement('img');
        closeIcon.classList.add('close');
        closeIcon.setAttribute('src', './icons/icon_close.png');
        closeIcon.addEventListener('click', detailProductClose);

        const productImgDetail = document.createElement('img');
        productImgDetail.classList.add('product-img-detail');
        productImgDetail.setAttribute('src', input.image);

        const createDivPoints = document.createElement('div');
        createDivPoints.classList.add('points');

        const pointSelectionImg1 = document.createElement('li');
        const pointSelectionImg2 = document.createElement('li');
        const pointSelectionImg3 = document.createElement('li');

        const descriptionProductDetail = document.createElement('div');
        descriptionProductDetail.classList.add('description-product-detail');

        const productPriceCard = document.createElement('p');
        productPriceCard.classList.add('text-1');
        productPriceCard.innerText = '$' + input.price;

        const productNameCard = document.createElement('p');
        productNameCard.classList.add('text-4');
        productNameCard.innerText = input.name;

        const descriptionText = document.createElement('p');
        descriptionText.classList.add('text-4');
        descriptionText.innerText = input.description;

        const primaryButton = document.createElement('button');
        primaryButton.classList.add('primary-button');

        const cartIcon = document.createElement('img');
        cartIcon.classList.add('icon-cart');
        cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        const buttonDescription = document.createElement('p');
        buttonDescription.innerText = 'Add to car';

        detailProductCard.append(closeIcon, productImgDetail, createDivPoints, descriptionProductDetail, descriptionText, primaryButton)

        createDivPoints.append(pointSelectionImg1, pointSelectionImg2, pointSelectionImg3)

        descriptionProductDetail.append(productPriceCard, productNameCard)

        primaryButton.append(cartIcon, buttonDescription)

}