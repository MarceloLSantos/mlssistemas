/**
 * MLS SISTEMAS - LANDING PAGE JAVASCRIPT
 * Animações ao scroll e interatividade
 */

// ============================================
// INTERSECTION OBSERVER - Animações ao Scroll
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos com animações
document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL PARA LINKS DE ÂNCORA
// ============================================

const NAVBAR_OFFSET = 80; // altura aproximada da navbar fixa

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
            // Fechar menu mobile ao clicar em um link
            const menu = document.getElementById('navbar-menu');
            const toggle = document.querySelector('.menu-toggle');
            if (menu && menu.classList.contains('is-open')) {
                menu.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });
});

// ============================================
// NAVBAR STICKY COM SHADOW
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// BOTÕES COM RIPPLE EFFECT
// ============================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// PARALLAX EFFECT NO HERO
// ============================================

const heroBackground = document.querySelector('.hero-background');

if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const heroTop = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrollPosition < heroTop + heroHeight) {
            const parallaxOffset = (scrollPosition - heroTop) * 0.5;
            heroBackground.style.transform = `translateY(${parallaxOffset}px)`;
        }
    });
}

// ============================================
// CONTADOR DE NÚMEROS (OPCIONAL)
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// MENU MOBILE
// ============================================

const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

if (menuToggle && navbarMenu) {
    let overlay = null;

    function openMenu() {
        navbarMenu.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.setAttribute('aria-hidden', 'true');
            overlay.className = 'nav-overlay';
            overlay.addEventListener('click', closeMenu);
            document.body.appendChild(overlay);
        }
        overlay.classList.add('is-visible');
    }

    function closeMenu() {
        navbarMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (overlay) overlay.classList.remove('is-visible');
    }

    menuToggle.addEventListener('click', () => {
        if (navbarMenu.classList.contains('is-open')) closeMenu();
        else openMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navbarMenu.classList.contains('is-open')) closeMenu();
    });
}

// ============================================
// FORM VALIDATION (FUTURO)
// ============================================

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Adicionar lógica de validação aqui
        console.log('Form submitted');
    });
});

// ============================================
// LAZY LOADING DE IMAGENS
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('MLS Landing Page loaded successfully');
    
    // Adicionar classe 'loaded' ao body
    document.body.classList.add('loaded');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function para otimizar event listeners
 */
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

/**
 * Throttle function para limitar chamadas de função
 */
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

// ============================================
// EVENT LISTENERS OTIMIZADOS
// ============================================

window.addEventListener('resize', debounce(() => {
    console.log('Window resized');
}, 250));

window.addEventListener('scroll', throttle(() => {
    // Scroll events otimizados
}, 100));
