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
