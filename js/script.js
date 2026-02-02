// ===================================
// Modern Professional Portfolio JS
// Optimized for smooth performance
// ===================================

'use strict';

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
        disable: 'mobile' // Disable on mobile for better performance
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

function handleNavbarScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}

// Use requestAnimationFrame for smooth scrolling performance
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleNavbarScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = '#ffffff';
                } else {
                    link.style.color = '';
                }
            });
        }
    });
}

// Throttle scroll events for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        highlightActiveNav();
    });
});

// Lazy load images when they come into view (for future use)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Smooth hover animations for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Console message for developers
console.log(
    '%c👋 Hello Developer!',
    'color: #ffffff; font-size: 20px; font-weight: bold; background: #000000; padding: 10px; border-radius: 5px;'
);
console.log(
    '%cWelcome to my portfolio. Built with performance and simplicity in mind.',
    'color: #a0a0a0; font-size: 14px;'
);
console.log(
    '%cTech Stack: Bootstrap 5, Font Awesome, AOS, Vanilla JS',
    'color: #666666; font-size: 12px;'
);
console.log(
    '%c💼 Looking for collaboration? Reach out: khalill21652006@gmail.com',
    'color: #ffffff; font-size: 12px;'
);

// Performance monitoring (development only)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', () => {
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%cPage Load Time: ${pageLoadTime}ms`, 'color: #00ff00; font-weight: bold;');
        }
    });
}

// Prevent layout shift
document.fonts.ready.then(() => {
    document.body.style.opacity = '1';
});

// Optimize font loading
if ('fonts' in document) {
    Promise.all([
        document.fonts.load('1em Inter'),
        document.fonts.load('700 1em Inter'),
        document.fonts.load('600 1em Inter')
    ]).then(() => {
        document.body.classList.add('fonts-loaded');
    });
}

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            disable: true
        });
    }
    
    // Remove transitions
    document.querySelectorAll('*').forEach(el => {
        el.style.transition = 'none';
        el.style.animation = 'none';
    });
}

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Focus visible outline for keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add keyboard navigation styles
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid rgba(255, 255, 255, 0.5) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);
