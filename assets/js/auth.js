// Toggle between Sign In and Sign Up
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Loading spinner functions
function showLoading() {
    document.getElementById('loadingSpinner').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Show message function
function showMessage(elementId, message, isError = false) {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = message;
    messageElement.className = isError ? 'message error' : 'message success';
    messageElement.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}

// Register Form Handler
document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        nama: formData.get('nama'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password')
    };

    // Validasi client-side
    if (data.password !== data.confirm_password) {
        showMessage('registerMessage', 'Konfirmasi password tidak cocok', true);
        return;
    }

    if (data.password.length < 6) {
        showMessage('registerMessage', 'Password minimal 6 karakter', true);
        return;
    }

    showLoading();

    try {
        const response = await fetch('api/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (result.success) {
            showMessage('registerMessage', result.message, false);
            // Reset form
            this.reset();
            // Switch to login form after 2 seconds
            setTimeout(() => {
                container.classList.remove("right-panel-active");
            }, 2000);
        } else {
            showMessage('registerMessage', result.message, true);
        }
    } catch (error) {
        showMessage('registerMessage', 'Terjadi kesalahan: ' + error.message, true);
    } finally {
        hideLoading();
    }
});

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    // Validasi client-side
    if (!data.email || !data.password) {
        showMessage('loginMessage', 'Email dan password harus diisi', true);
        return;
    }

    showLoading();

    try {
        const response = await fetch('api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (result.success) {
            showMessage('loginMessage', result.message, false);
            // Redirect to dashboard
            setTimeout(() => {
                window.location.href = result.redirect || 'dashboard.php';
            }, 1500);
        } else {
            showMessage('loginMessage', result.message, true);
        }
    } catch (error) {
        showMessage('loginMessage', 'Terjadi kesalahan: ' + error.message, true);
    } finally {
        hideLoading();
    }
});

// Check if user is already logged in
window.addEventListener('DOMContentLoaded', function() {
    // You can add a check here to see if user is already logged in
    // and redirect to dashboard if needed
});