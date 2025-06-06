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
            right: -300px; /* Start off-screen */
            background-color: #FBBF24; /* Yellow for success */
            color: #121A2D; /* Dark text */
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
            background-color: #f44336; /* Red for error */
            color: #FFFFFF; /* White text */
        }
        .notification.show {
            right: 20px; /* Slide in */
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

    // Trigger slide-in animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10); // Small delay to ensure transition works

    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500); // Wait for slide-out animation to complete
    }, 4000); // Visible for 4 seconds
}

// Run once to inject styles
injectNotificationStyles();

// Navigation
const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');
const navLinks = document.querySelectorAll('.nav__link');

// Show/Hide Navigation Menu
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
        navMenu.querySelector('.nav__link')?.focus(); // Focus on first link for accessibility
    });
}

if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle?.focus(); // Return focus to toggle button
    });
}

// Keyboard support for navigation toggle and close
if (navToggle) {
    navToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navMenu?.classList.add('show');
            navMenu?.querySelector('.nav__link')?.focus();
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
        const width = bar.dataset.width || 0; // Fallback to 0 if data-width is missing
        if (width) {
            bar.style.width = `${width}%`;
        } else {
            console.warn(`Missing data-width for element:`, bar);
        }
    });
}

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
                observer.unobserve(skillsSection); // Run animation only once
            }
        });
    }, { threshold: 0.1 }); // Lower threshold for mobile
    observer.observe(skillsSection);

    // Fallback for immediate visibility on page load
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
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Load EmailJS SDK if not already loaded
            if (typeof emailjs === 'undefined') {
                await loadEmailJSSDK();
                emailjs.init('G0iq-bLzqAU94-4zW'); // Your EmailJS Public Key
            }
            
            // Send form data via EmailJS
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