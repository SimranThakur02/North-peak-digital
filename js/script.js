// 1. Mobile Menu Navigation Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking any nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Client-Side Contact Form Validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successAlert = document.getElementById('successAlert');

// Validation regex helper
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    // Validate Name
    if (nameInput.value.trim() === '') {
        document.getElementById('nameGroup').classList.add('error');
        hasError = true;
    } else {
        document.getElementById('nameGroup').classList.remove('error');
    }

    // Validate Email
    if (!isValidEmail(emailInput.value.trim())) {
        document.getElementById('emailGroup').classList.add('error');
        hasError = true;
    } else {
        document.getElementById('emailGroup').classList.remove('error');
    }

    // Validate Message
    if (messageInput.value.trim().length < 10) {
        document.getElementById('messageGroup').classList.add('error');
        hasError = true;
    } else {
        document.getElementById('messageGroup').classList.remove('error');
    }

    // Handle Success
    if (!hasError) {
        successAlert.style.display = 'block';
        form.reset();

        // Hide success alert after 6 seconds
        setTimeout(() => {
            successAlert.style.display = 'none';
        }, 6000);
    }
});