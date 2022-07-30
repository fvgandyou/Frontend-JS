const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

email.addEventListener('click', toggleDesktopMenu);

const logoMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

logoMenu.addEventListener('click', toggleMobileMenu);

const shoppingCart = document.querySelector('.shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');

shoppingCart.addEventListener('click', toggleShopMenu)

function toggleDesktopMenu() {
    menu.classList.toggle('inactive');
    // toggle can active or inactive the css class
    shoppingMenu.classList.add('inactive');
    // this function allows to add a class new
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    // toggle can active or inactive the css class
    shoppingMenu.classList.add('inactive');
}

function toggleShopMenu() {
    shoppingMenu.classList.toggle('inactive');
    // toggle can active or inactive the css class
    menu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
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

const showProducts = (array) => {
    const container = document.querySelector('.cards-container');
    for(product of productsList) {
        const card = `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="imageProduct">
            <div class="product-info">
                <div>
                    <p class="priceProduct">$${product.price}</p>
                    <p class="nameProduct">${product.name}</p>
                </div>
                <figure>
                    <img src="./Icons/bt_add_to_cart.svg" alt="add-cart" id="saveInCart">
                </figure>
            </div>
        </div>
        `;
        container.innerHTML += card;
    }
}

showProducts(productsList);










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