const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const authSection = document.getElementById('auth-section');
const securedSection = document.getElementById('secured-section');
const logoutBtn = document.getElementById('logout-btn');

// Handle registration
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Save credentials to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful! You can now log in.');
    registerForm.reset();
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Get back stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', true); // Mark user as logged in
        authSection.classList.add('hidden'); // Hide login/register section
        securedSection.classList.remove('hidden'); // Show secured section
    } else {
        alert('Invalid username or password.');
    }

    loginForm.reset();
});

// Handle logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    alert('You have been logged out.');
    authSection.classList.remove('hidden'); // Show login/register section
    securedSection.classList.add('hidden'); // Hide secured section
});

// Ensure secured section is only accessible if logged in
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('isLoggedIn')) {
        authSection.classList.add('hidden');
        securedSection.classList.remove('hidden');
    } else {
        authSection.classList.remove('hidden');
        securedSection.classList.add('hidden');
    }
});
