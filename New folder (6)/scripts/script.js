// -------------------------
// CART SYSTEM (localStorage)
// -------------------------

function addToCart(title, price) {
  const cart = JSON.parse(localStorage.getItem("gamevaultCart")) || [];

  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ title, price, quantity: 1 });
  }

  localStorage.setItem("gamevaultCart", JSON.stringify(cart));
  alert(`${title} added to cart!`);
}

// Optional: Show cart count in nav (future)
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("gamevaultCart")) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").innerText = total;
}
function addToCart(title, price) {
  const cart = JSON.parse(localStorage.getItem("gamevaultCart")) || [];
  const existing = cart.find(item => item.title === title);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ title, price, quantity: 1 });
  }

  localStorage.setItem("gamevaultCart", JSON.stringify(cart));
  alert(`${title} added to cart!`);
}
