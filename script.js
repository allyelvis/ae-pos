// Sample data
const products = [];
const productList = document.getElementById('product-list');

// Initialize product management
function updateProductList() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Handle product form submission
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const stock = parseInt(document.getElementById('product-stock').value);
    const newProduct = { id: products.length + 1, name, price, stock };
    products.push(newProduct);
    updateProductList();
});

// Initialize
if (document.getElementById('product-list')) updateProductList();
// Update cart to manage inventory
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.stock > 0) {
        cart.push(product);
        product.stock--; // Decrease stock
        updateCart();
        updateProductList(); // Reflect changes in admin panel
    } else {
        alert('Product out of stock');
    }
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
    receipt += `\nTotal: $${document.getElementById('total-amount').textContent}`;
    return receipt;
}

// Download receipt as text file
function downloadReceipt(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'receipt.txt';
    a.click();
    URL.revokeObjectURL(url);
}
// Sample data for products
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
];

let cart = [];

// Load products
function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <a href="product.html?id=${product.id}">View Details</a>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Load product details
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);
    const product = products.find(p => p.id === productId);
    const productDetail = document.getElementById('product-detail');
    if (product) {
        productDetail.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update cart
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });
    totalAmount.textContent = total.toFixed(2);
}

// Handle checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    const total = document.getElementById('total-amount').textContent;
    alert(`Checkout functionality is not implemented yet. Total: $${total}`);
});

// Initialize
if (document.getElementById('product-list')) loadProducts();
if (document.getElementById('product-detail')) loadProductDetails();
if (document.getElementById('cart-items')) updateCart();
