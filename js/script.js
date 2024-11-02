// JS for Single product detail
document.addEventListener("DOMContentLoaded", () => {
  const ProductImg = document.getElementById("product-img");
  const SmallImg = document.querySelectorAll(".small-img");

  SmallImg.forEach((img, index) => {
      img.addEventListener("click", () => {
          ProductImg.src = img.src;
      });
  });

  // Initialize filters and cart
  syncRangeWithInput();
  updateCartTotal();
});

// Product Filtering Functionality
const filterSelection = (category) => {
  const elements = document.querySelectorAll(".filterDiv");
  elements.forEach(element => {
      element.classList.remove("show");
      if (category === "all" || element.className.includes(category)) {
          element.classList.add("show");
      }
  });
};

// Add active class to the current button (highlight it)
const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      btn.classList.add("active");
  });
});

// Function to filter products based on category and price
const applyCategoryFilter = () => {
  const categoryFilter = document.getElementById("categoryFilter").value;
  const minPrice = parseInt(document.getElementById("priceRangeMin").value, 10);
  const maxPrice = parseInt(document.getElementById("priceRangeMax").value, 10);

  const products = document.querySelectorAll("#productContainer .col-4");
  products.forEach(product => {
      const productCategory = product.getAttribute("data-category");
      const productPrice = parseFloat(product.getAttribute("data-price");
      const matchesCategory = (categoryFilter === "all" || productCategory === categoryFilter);
      const matchesPrice = (productPrice >= minPrice && productPrice <= maxPrice);

      product.style.display = matchesCategory && matchesPrice ? "block" : "none";
  });
};

// Synchronize range inputs with displayed values
const syncRangeWithInput = () => {
  const minValue = document.getElementById("priceRangeMin").value;
  const maxValue = document.getElementById("priceRangeMax").value;
  document.getElementById("priceMinValue").textContent = `$${minValue}`;
  document.getElementById("priceMaxValue").textContent = `$${maxValue}`;
};

// Cart Functionality
const addToCart = (productName, productPrice) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find(item => item.name === productName);
  
  if (existingProduct) {
      existingProduct.quantity += 1;
  } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} has been added to your cart!`);
};

const updateCartTotal = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  document.getElementById("subtotalAmount").textContent = subtotal.toFixed(2);
  document.getElementById("taxAmount").textContent = tax.toFixed(2);
  document.getElementById("totalAmountFooter").textContent = total.toFixed(2);
};

const removeItem = (productName) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.name !== productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} has been removed from your cart.`);
  updateCartTotal();
};
