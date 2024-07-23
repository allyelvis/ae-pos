const USERS = [
    { username: 'admin', password: 'password' } // This should be replaced with a secure method in production
];

// Authenticate user
function authenticate(username, password) {
    return USERS.some(user => user.username === username && user.password === password);
}

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (authenticate(username, password)) {
        alert('Login successful!');
        // Redirect to admin panel or set up admin session
        window.location.href = 'admin.html';
    } else {
        alert('Invalid credentials');
    }
});
