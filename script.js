// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to system preference
const currentTheme = localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileMenuBtn.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
    });
});

// Scroll to Top Button
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.highlight-card, .skill-category, .project-card').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing effect for hero section
const heroText = document.querySelector('.hero h2');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});