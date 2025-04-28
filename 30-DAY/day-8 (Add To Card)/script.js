const products = [
  { id: 1, name: "Sneakers", price: 50, image: "https://via.placeholder.com/200x150?text=Sneakers" },
  { id: 2, name: "T-Shirt", price: 20, image: "https://via.placeholder.com/200x150?text=T-Shirt" },
  { id: 3, name: "Jeans", price: 40, image: "https://via.placeholder.com/200x150?text=Jeans" },
  { id: 4, name: "Backpack", price: 35, image: "https://via.placeholder.com/200x150?text=Backpack" }
];

let cart = [];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const cartCount = document.getElementById('cart-count');

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(productDiv);
});


function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
      total += item.price * item.quantity;
      count += item.quantity;

      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      cartItem.innerHTML = `
          ${item.name} (${item.quantity}) - $${item.price * item.quantity}
          <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
      `;

      cartItems.appendChild(cartItem);
  });

  totalPrice.textContent = total.toFixed(2);
  cartCount.textContent = count;
}

document.getElementById('cart-btn').addEventListener('click', () => {
  document.getElementById('cart').classList.toggle('show-cart');
});