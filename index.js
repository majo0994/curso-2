//variables
const navEmail = document.querySelector('.email-nav-container');
const desktopMenu = document.querySelector('.menu-desktop');

const iconMobileMenu = document.querySelector('.menu-mobile-nav');
const mobileMenu = document.querySelector('.menu-mobile');

const iconCart = document.querySelector('.shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-2');
const cartListItems = document.querySelector('.list-items')
const articlesCart = document.querySelector('.articles-cart')
const totalPriceItemsCart = document.querySelector('.total-cart-price')

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
let productsList = [];
let productsListCart = [];

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

//renderizado de lista de productos

function pageProductsList(arr) {

    for(let i = 0; i < productsList.length; i++){
        let product = productsList[i];

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('index', arr.indexOf(product));

        const imageProduct = document.createElement('img');
        imageProduct.classList.add('image-product');
        imageProduct.setAttribute('src', product.image);
        imageProduct.addEventListener('click', function() {renderProductDetail(product)})

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
        shoppingCartAddIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        shoppingCartAddIcon.addEventListener('click', function() {addItemsCart(product)})

        cardsContainers.appendChild(productCard)

        productCard.append(imageProduct, descriptionProduct, shoppingCartAdd);

        descriptionProduct.append(productPriceCard, productNameCard);

        shoppingCartAdd.appendChild(shoppingCartAddIcon);
        
    }

}

pageProductsList(productsList)

//renderizado detalle de productos

function renderProductDetail(product) {
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');

    if (isDesktopMenuOpen || isMobileMenuOpen || isShoppingCartOpen) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoppingCart.classList.add('inactive');
    }
    
    detailProductCard.classList.remove('inactive')

    detailProductCard.innerHTML = '';

    const closeIcon = document.createElement('img');
    closeIcon.classList.add('close');
    closeIcon.setAttribute('src', './icons/icon_close.png');
    closeIcon.addEventListener('click', detailProductClose);

    const productImgDetail = document.createElement('img');
    productImgDetail.classList.add('product-img-detail');
    productImgDetail.setAttribute('src', product.image);

    const createDivPoints = document.createElement('div');
    createDivPoints.classList.add('points');

    const pointSelectionImg1 = document.createElement('li');
    const pointSelectionImg2 = document.createElement('li');
    const pointSelectionImg3 = document.createElement('li');

    const descriptionProductDetail = document.createElement('div');
    descriptionProductDetail.classList.add('description-product-detail');

    const productPriceCard = document.createElement('p');
    productPriceCard.classList.add('text-1');
    productPriceCard.innerText = '$' + product.price;

    const productNameCard = document.createElement('p');
    productNameCard.classList.add('text-4');
    productNameCard.innerText = product.name;

    const descriptionText = document.createElement('p');
    descriptionText.classList.add('text-4');
    descriptionText.innerText = product.description;

    const primaryButtonAddCart = document.createElement('button');
    primaryButtonAddCart.classList.add('primary-button');
    primaryButtonAddCart.addEventListener('click', function() {addItemsCart(product)})

    const cartIcon = document.createElement('img');
    cartIcon.classList.add('icon-cart');
    cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    const buttonDescription = document.createElement('p');
    buttonDescription.innerText = 'Add to car';

    detailProductCard.append(closeIcon, productImgDetail, createDivPoints, descriptionProductDetail, descriptionText, primaryButtonAddCart)

    createDivPoints.append(pointSelectionImg1, pointSelectionImg2, pointSelectionImg3)

    descriptionProductDetail.append(productPriceCard, productNameCard)

    primaryButtonAddCart.append(cartIcon, buttonDescription)
}

//agregar cosas al carrito

function renderProductCart() {

    cartListItems.innerHTML = ''

    for(let i = 0; i < productsListCart.length; i++){
        let product = productsListCart[i];

        const productCartAbstract = document.createElement('li');
        productCartAbstract.classList.add('product-cart-abstract');

        const imgCartProduct = document.createElement('img');
        imgCartProduct.classList.add('img-cart-product');
        imgCartProduct.setAttribute('src', product.image);
        imgCartProduct.addEventListener('click', function() {renderProductDetail(product)});

        const nameItemCart = document.createElement('p');
        nameItemCart.classList.add('text-4');
        nameItemCart.innerText = product.name;

        const priceItemCart = document.createElement('p');
        priceItemCart.classList.add('text-1');
        priceItemCart.innerText = '$' + product.price;

        const closeIconCart = document.createElement('img');
        closeIconCart.classList.add('close-1');
        closeIconCart.setAttribute('src', './icons/icon_close.png');
        closeIconCart.addEventListener('click', function() {deleteItemsCart(product)});


        cartListItems.appendChild(productCartAbstract)
        productCartAbstract.append(imgCartProduct, nameItemCart, priceItemCart, closeIconCart)
    }
}

function addItemsCart(product) {
    productsListCart.push(product);
    renderProductCart(product);
    totalItemsCart();
    totalPriceCart(product);
}

function deleteItemsCart(product) {
    productsListCart.pop(product);
    renderProductCart(product);
    totalItemsCart();
    totalPriceCart(product);
}

function totalPriceCart(product) {

    let sumPrice = 0;

    for (let i = 0; i < productsListCart.length; i++) {
        sumPrice += productsListCart[i].price;
        
    }

    totalPriceItemsCart.innerText = '$' + sumPrice;
}

function totalItemsCart() {
  

    articlesCart.innerText = productsListCart.length;

}