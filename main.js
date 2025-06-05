document.addEventListener('DOMContentLoaded', () => {
    console.log('main.js loaded successfully'); // Debug: Confirm script loads

    // Dynamically load EmailJS SDK
    function loadEmailJSSDK() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.emailjs.com/dist/email.min.js';
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load EmailJS SDK'));
            document.head.appendChild(script);
        });
    }

    // Inject CSS for notification animation
    function injectNotificationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: -300px;
                background-color: #FBBF24;
                color: #121A2D;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                font-family: 'Inter', sans-serif;
                font-size: 16px;
                max-width: 300px;
                transition: right 0.5s ease-in-out;
            }
            .notification.error {
                background-color: #f44336;
                color: #FFFFFF;
            }
            .notification.show {
                right: 20px;
            }
        `;
        document.head.appendChild(style);
    }

    // Create and show notification
    function showNotification(message, isError = false) {
        const notification = document.createElement('div');
        notification.className = `notification ${isError ? 'error' : ''}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 4000);
    }

    // Run once to inject styles
    injectNotificationStyles();

    // Navigation
    const header = document.querySelector('.header');
    const navMenu = document.querySelector('#nav-menu');
    const navToggle = document.querySelector('#nav-toggle');
    const navClose = document.querySelector('#nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Debug: Log if elements are found
    if (!navToggle) console.error('Nav toggle not found. Check #nav-toggle in HTML.');
    if (!navMenu) console.error('Nav menu not found. Check #nav-menu in HTML.');
    if (!navClose) console.error('Nav close not found. Check #nav-close in HTML.');

    // Show/Hide Navigation Menu
    if (navToggle && navMenu) {
        const toggleMenu = (e) => {
            e.preventDefault();
            navMenu.classList.toggle('show');
            if (navMenu.classList.contains('show')) {
                navMenu.querySelector('.nav__link')?.focus();
                console.log('Menu opened');
            } else {
                console.log('Menu closed');
            }
        };
        navToggle.addEventListener('click', toggleMenu);
        navToggle.addEventListener('touchstart', toggleMenu);
    }

    if (navClose && navMenu) {
        const closeMenu = (e) => {
            e.preventDefault();
            navMenu.classList.remove('show');
            navToggle?.focus();
            console.log('Menu closed via close button');
        };
        navClose.addEventListener('click', closeMenu);
        navClose.addEventListener('touchstart', closeMenu);
    }

    // Keyboard support for navigation toggle and close
    if (navToggle) {
        navToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navMenu?.classList.toggle('show');
                if (navMenu?.classList.contains('show')) {
                    navMenu.querySelector('.nav__link')?.focus();
                }
            }
        });
    }

    if (navClose) {
        navClose.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navMenu?.classList.remove('show');
                navToggle?.focus();
            }
        });
    }

    // Smooth scrolling and close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href')?.substring(1);
            if (targetId) {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                navMenu?.classList.remove('show');
            }
        });
    });

    // Change header background on scroll
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
            
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else if (navLink) {
                navLink.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // Skills Animation
    const skillBars = document.querySelectorAll('.skill__progress');

    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.dataset.width || 0;
            if (width) {
                bar.style.width = `${width}%`;
            } else {
                console.warn(`Missing data-width for element:`, bar);
            }
        });
    }

    // Reset skill bar widths to 0 initially
    skillBars.forEach(bar => {
        bar.style.width = '0';
    });

    // Intersection Observer for skill bars
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(skillsSection);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(skillsSection);

        // Fallback for immediate visibility
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            animateSkills();
            observer.unobserve(skillsSection);
        }
    }

    // Image Error Handling
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
            img.alt = 'Image not available';
        });
    });

    // Contact Form with EmailJS
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            try {
                if (typeof emailjs === 'undefined') {
                    await loadEmailJSSDK();
                    emailjs.init('G0iq-bLzqAU94-4zW'); // Replace with your EmailJS Public Key
                }
                
                const response = await emailjs.sendForm('service_85m638d', 'template_i0uv1gm', contactForm);
                console.log('Form submitted successfully:', data, response);
                showNotification('Message Sent Successfully! I will reach u soon 📧🚀');
                contactForm.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                showNotification('Failed to send message. Please try again. 😔', true);
            }
        });
    }
});