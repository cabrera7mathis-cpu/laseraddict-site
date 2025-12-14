/**
 * LaserAddict Le Lamentin - Main JavaScript
 * Interactive features and animations
 */

// ==========================================
// DOM Elements
// ==========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const stickyCta = document.getElementById('stickyCta');
const faqItems = document.querySelectorAll('.faq-item');
const testimonialTrack = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// ==========================================
// Mobile Navigation Toggle
// ==========================================
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link, .btn-nav');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}

// ==========================================
// Navbar Scroll Effect
// ==========================================
let lastScroll = 0;

function handleNavbarScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleNavbarScroll);

// ==========================================
// Sticky CTA Button
// ==========================================
function handleStickyCta() {
    const heroSection = document.querySelector('.hero');
    const finalCtaSection = document.querySelector('.final-cta-section');

    if (!heroSection || !finalCtaSection || !stickyCta) return;

    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const finalCtaTop = finalCtaSection.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    // Show sticky CTA after hero section and before final CTA section
    if (window.pageYOffset > heroBottom && scrollPosition < finalCtaTop) {
        stickyCta.classList.add('visible');
    } else {
        stickyCta.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleStickyCta);

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// FAQ Accordion
// ==========================================
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(faq => faq.classList.remove('active'));

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ==========================================
// Testimonials Slider
// ==========================================
let currentSlide = 0;
let slideInterval;

function getVisibleSlides() {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
}

function getTotalSlides() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    return testimonialCards.length;
}

function updateSlider() {
    if (!testimonialTrack) return;

    const visibleSlides = getVisibleSlides();
    const totalSlides = getTotalSlides();
    const maxSlide = totalSlides - visibleSlides;

    // Ensure currentSlide is within bounds
    if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const slideWidth = 100 / visibleSlides;
    const offset = -(currentSlide * slideWidth);

    testimonialTrack.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    const visibleSlides = getVisibleSlides();
    const totalSlides = getTotalSlides();
    const maxSlide = totalSlides - visibleSlides;

    currentSlide = (currentSlide + 1) > maxSlide ? 0 : currentSlide + 1;
    updateSlider();
}

function prevSlide() {
    const visibleSlides = getVisibleSlides();
    const totalSlides = getTotalSlides();
    const maxSlide = totalSlides - visibleSlides;

    currentSlide = (currentSlide - 1) < 0 ? maxSlide : currentSlide - 1;
    updateSlider();
}

function startSlideInterval() {
    stopSlideInterval();
    slideInterval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
}

function stopSlideInterval() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

if (prevBtn && nextBtn && testimonialTrack) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideInterval();
        startSlideInterval();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideInterval();
        startSlideInterval();
    });

    // Update slider on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateSlider();
        }, 250);
    });

    // Start auto-advance
    startSlideInterval();

    // Pause auto-advance on hover
    const testimonialSection = document.querySelector('.testimonials-slider');
    if (testimonialSection) {
        testimonialSection.addEventListener('mouseenter', stopSlideInterval);
        testimonialSection.addEventListener('mouseleave', startSlideInterval);
    }

    // Initialize slider
    updateSlider();
}

// ==========================================
// Scroll Animations (Intersection Observer)
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animatedElements = document.querySelectorAll('.problem-card, .service-card, .why-card, .feature, .pricing-card, .testimonial-card');
animatedElements.forEach(el => {
    observer.observe(el);
});

// ==========================================
// Form Validation (if needed)
// ==========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^(?:(?:\+|00)596|0)\s*[67](?:[\s.-]*\d{2}){4}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// ==========================================
// WhatsApp Integration
// ==========================================
function initWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');

    whatsappLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add default message if needed
            const url = new URL(link.href);
            if (!url.searchParams.has('text')) {
                e.preventDefault();
                const message = encodeURIComponent('Bonjour, je souhaite prendre rendez-vous chez LaserAddict Le Lamentin.');
                window.open(`${link.href}?text=${message}`, '_blank');
            }
        });
    });
}

initWhatsAppLinks();

// ==========================================
// Analytics Tracking (placeholder)
// ==========================================
function trackEvent(category, action, label) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    // Console log for development
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-outline-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('CTA', 'Click', btn.textContent.trim());
    });
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Contact', 'Phone Click', link.href);
    });
});

// Track email clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Contact', 'Email Click', link.href);
    });
});

// ==========================================
// Performance Optimization
// ==========================================
// Lazy load images (if you add real images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ==========================================
// Utility Functions
// ==========================================
// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// Back to Top Button (optional)
// ==========================================
function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: white;
        color: var(--primary-green);
        border: 2px solid var(--primary-green);
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    }, 200));

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment to enable back to top button
// createBackToTop();

// ==========================================
// Initialize on DOM Content Loaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('LaserAddict Le Lamentin - Site initialized');

    // Initial calls
    handleNavbarScroll();
    handleStickyCta();

    // Add loaded class to body for animations
    document.body.classList.add('loaded');
});

// ==========================================
// Service Worker Registration (for PWA - optional)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

// ==========================================
// Export functions for testing (if needed)
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePhone,
        debounce,
        throttle
    };
}
