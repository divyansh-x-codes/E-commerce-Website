// Toggle Dark/Light Theme
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Dummy product data
const products = [
  { id: 1, name: "Smartphone X10", price: 29999, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" },
  { id: 2, name: "Wireless Earbuds", price: 2499, img: "https://images.unsplash.com/photo-1585386959984-a4155223165a?w=800" },
  { id: 3, name: "Smart Watch Pro", price: 4999, img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800" },
  { id: 4, name: "Gaming Laptop Z", price: 89999, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },
];

// Generate Products
const grid = document.getElementById("productGrid");
if (grid) {
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})" class="btn">Add to Cart</button>
      <button onclick="addToWishlist(${p.id})" class="btn">❤️</button>
    </div>`).join("");
}

// Cart & Wishlist
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}

function addToWishlist(id) {
  const item = products.find(p => p.id === id);
  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(`${item.name} added to wishlist!`);
}

// Load cart/wishlist pages
const cartDiv = document.getElementById("cartItems");
if (cartDiv) {
  if (cart.length === 0) cartDiv.innerHTML = "<p>Your cart is empty.</p>";
  else {
    cartDiv.innerHTML = cart.map(i => `<div>${i.name} - ₹${i.price}</div>`).join("");
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById("totalAmount").innerText = "Total: ₹" + total;
  }
}

const wishDiv = document.getElementById("wishlistItems");
if (wishDiv) {
  if (wishlist.length === 0) wishDiv.innerHTML = "<p>Your wishlist is empty.</p>";
  else wishDiv.innerHTML = wishlist.map(i => `<div>${i.name} - ₹${i.price}</div>`).join("");
}