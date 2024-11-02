document.addEventListener('DOMContentLoaded', () => {
    // Retrieve product from localStorage
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        // Populate the HTML elements with product details
        document.getElementById('product-img').src = product.image;
        document.querySelector('.single-product h1').textContent = product.name;
        document.querySelector('.single-product h4').textContent = `$${product.price}`;
        document.querySelector('.single-product p').textContent = product.description;
    } else {
        console.error('Product details not found in localStorage');
    }
});
