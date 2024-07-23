document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartSummary();
});

const products = [];
const cart = [];

// Load products into the page
function loadProducts() {
    // Mock data; replace with API call
    products.push({ id: 1, name: 'Product 1', price: 10.00, stock: 10 });
    products.push({ id: 2, name: 'Product 2', price: 20.00, stock: 5 });

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.stock > 0) {
        cart.push(product);
        product.stock--;
        updateCartSummary();
        updateProductList();
    } else {
        alert('Product out of stock');
    }
}

// Update cart summary
function updateCartSummary() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
}

// Handle checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    const total = document.getElementById('total-amount').textContent;
    const receiptContent = generateReceipt();
    downloadReceipt(receiptContent);
    alert(`Checkout completed! Total: $${total}`);
});

// Generate receipt content
function generateReceipt() {
    let receipt = 'Receipt\n\n';
    cart.forEach(item => {
        receipt += `${item.name} - $${item.price}\n`;
    });
    receipt += `\n
