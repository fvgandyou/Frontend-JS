const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

email.addEventListener('click', toggleDesktopMenu);

const logoMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

logoMenu.addEventListener('click', toggleMobileMenu);

const shoppingCart = document.querySelector('.shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');

shoppingCart.addEventListener('click', toggleShopMenu)

const productPicked = document.querySelector('.product-picked');

function toggleDesktopMenu() {
    menu.classList.toggle('inactive');
    // toggle can active or inactive the css class
    shoppingMenu.classList.add('inactive');
    productPicked.classList.add('inactive');
    // this function allows to add a class new
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    // toggle can active or inactive the css class
    shoppingMenu.classList.add('inactive');
    productPicked.classList.add('inactive');
}

function toggleShopMenu() {
    shoppingMenu.classList.toggle('inactive');
    // toggle can active or inactive the css class
    menu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productPicked.classList.add('inactive');
}

// Add random products to select
const productsList = [];
productsList.push({
    name: 'Mountain Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'    
});
productsList.push({
    name: 'Classic Bike',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'    
});
productsList.push({
    name: 'Road Bike',
    price: 600,
    image: 'https://images.pexels.com/photos/972100/pexels-photo-972100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'    
});
productsList.push({
    name: 'Special Gold Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'    
});
productsList.push({
    name: 'Special Vintage Bike',
    price: 350,
    image: 'https://images.pexels.com/photos/2539400/pexels-photo-2539400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'    
});
productsList.push({
    name: 'Special OXID Bike',
    price: 300,
    image: 'https://images.pexels.com/photos/1431117/pexels-photo-1431117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'    
});

console.log(productsList.name)

const showProducts = (array) => {
    const container = document.querySelector('.cards-container');
    let counter = 0;
    for(product of array) {
        const card = `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="imageProduct" onclick="openProductPicked${counter+1}()">
            <div class="product-info">
                <div>
                    <p class="priceProduct">$${product.price}</p>
                    <p class="nameProduct">${product.name}</p>
                </div>
                <figure>
                    <img src="./Icons/bt_add_to_cart.svg" alt="add-cart" id="saveInCart" onclick="addCart()">
                </figure>
            </div>
        </div>
        `;
        container.innerHTML += card;
        counter++;
    }
}

showProducts(productsList);


// Functions that appears innerHTML

function openProductSpecific(number) {
    let productInnerList = productsList[number];
    const picked = `
        <div class="product-picked-close" onclick="productPickedClose()">
            <img src="./Icons/icon_close.png" alt="close"> 
        </div>
        <img src="${productInnerList.image}" alt="${productInnerList.name}">
        <div class="product">
            <p>$${productInnerList.price}</p>
            <p>${productInnerList.name}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam placeat nemo id hic. Similique tenetur provident, adipisci, facere corporis nam molestiae, quis dignissimos eligendi quibusdam facilis ea dolores nulla?</p>
            <button class="primary-button add-to-cart-button">
                <img src="./Icons/bt_add_to_cart.svg" alt="add-to-cart">
                Add to cart
            </button>
        </div>
        `
    productPicked.innerHTML = picked;
    productPicked.classList.remove('inactive');
    shoppingMenu.classList.add('inactive');
    menu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

const productPickedClose = () => {
    productPicked.classList.add('inactive');
}

function openProductPicked1() {
    openProductSpecific(0);
}
function openProductPicked2() {
    openProductSpecific(1);
}
function openProductPicked3() {
    openProductSpecific(2);
}
function openProductPicked4() {
    openProductSpecific(3);
}
function openProductPicked5() {
    openProductSpecific(4);
}
function openProductPicked6() {
    openProductSpecific(5);
}

// Add products to shopping cart
// const cart = [];
// const saveInCart = document.querySelector('#saveInCart');

// function addCart() {
    // const imageProduct = document.querySelector('.imageProduct');
    // const priceProduct = document.querySelector('.priceProduct');
    // const nameProduct = document.querySelector('.nameProduct');
    // cart.push({
    //     name: nameProduct.value,
    //     price: priceProduct.value,
    //     image: imageProduct.src
    // })
// }

// saveInCart.addEventListener('click', addCart);