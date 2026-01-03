const products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    category: "electronics",
    image: "Assets/image.png",
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000,
    category: "electronics",
    image: "Assets/Headphone.png",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 800,
    category: "fashion",
    image: "Assets/Tshirt.png",
  },
  {
    id: 4,
    name: "Jeans",
    price: 1500,
    category: "fashion",
    image: "Assets/jeans.png",
  },
  {
    id: 5,
    name: "Book",
    price: 500,
    category: "books",
    image: "Assets/book.png",
  },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-num");
const cartTotal = document.getElementById("cart-total");

/* Display Products */
function displayProducts(items) {
  productList.innerHTML = "";

  items.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
  });
}

/* Add to Cart */
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}

/* Update Cart */
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    count += item.qty;
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} (₹${item.price} × ${item.qty})
      <div>
        <button onclick="decreaseQty(${index})">−</button>
        <button onclick="increaseQty(${index})">+</button>
        <button onclick="removeFromCart(${index})">❌</button>
      </div>
    `;
    cartItems.appendChild(li);
  });

  cartCount.textContent = count;
  cartTotal.textContent = total;
}

/* Quantity Controls */
function increaseQty(index) {
  cart[index].qty++;
  updateCart();
}

function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

/* Filter */
document.querySelectorAll(".menu button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    category === "all"
      ? displayProducts(products)
      : displayProducts(products.filter((p) => p.category === category));
  });
});

/* Initial Load */
displayProducts(products);
