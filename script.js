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
