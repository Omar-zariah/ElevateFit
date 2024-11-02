// Function to store product details in localStorage
const viewProduct = (productId) => {
    const products = [
        { id: 1, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-1.jpg" },
        { id: 2, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-2.jpg" },
        { id: 3, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-3.jpg" },
        { id: 4, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-4.jpg" },
        { id: 5, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-5.jpg" },
        { id: 6, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-6.jpg" },
        { id: 7, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-7.jpg" },
        { id: 8, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-8.jpg" },
        { id: 9, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-9.jpg" },
        { id: 10, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-10.jpg" },
        { id: 11, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-11.jpg" },
        { id: 12, name: "Red Printed T-shirt", price: 50, description: "Comfortable cotton t-shirt", image: "Images/product-12.jpg" },
    ];

    // Find the product details by ID
    const selectedProduct = products.find(product => product.id === productId);

    // Store the product details in localStorage
    if (selectedProduct) {
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    } else {
        console.error('Product not found for the given ID:', productId);
    }
};
