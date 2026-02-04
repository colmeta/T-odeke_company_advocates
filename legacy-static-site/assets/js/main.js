/* ============================================
   T ODEKE & CO. ADVOCATES - INTERACTIONS
   Premium JavaScript for World-Class UX
  ============================================ */

// ============================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Trigger counter animation if element has counter class
        if (entry.target.classList.contains('counter') && !entry.target.dataset.counted) {
          animateCounter(entry.target);
          entry.target.dataset.counted = 'true';
        }
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-up, .scale-in, .slide-in-left, .slide-in-right, .counter'
  );

  animatedElements.forEach(el => observer.observe(el));
});

// ============================================
// ANIMATED COUNTER
// ============================================

function animateCounter(element) {
  const target = parseInt(element.dataset.target || element.textContent);
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const updateCounter = () => {
    current += increment;

    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

// ============================================
// STICKY HEADER
// ============================================

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============================================
// MOBILE NAVIGATION
// ============================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navPrimary = document.querySelector('.nav-primary');
const body = document.body;

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navPrimary.classList.toggle('active');
    body.style.overflow = navPrimary.classList.contains('active') ? 'hidden' : '';

    // Animate hamburger icon
    const isActive = navPrimary.classList.contains('active');
    mobileMenuToggle.textContent = isActive ? '✕' : '☰';
  });

  // Close menu when clicking nav link
  const navLinks = document.querySelectorAll('.nav-primary a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navPrimary.classList.remove('active');
      body.style.overflow = '';
      mobileMenuToggle.textContent = '☰';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navPrimary.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      navPrimary.classList.remove('active');
      body.style.overflow = '';
      mobileMenuToggle.textContent = '☰';
    }
  });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if it's just "#"
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// WHATSAPP INTEGRATION
// ============================================

const whatsappNumbers = {
  nakasero: '256700000000', // Replace with actual numbers
  nsambya: '256700000001',
  soroti: '256700000002'
};

function openWhatsApp(location, practiceArea = '') {
  const number = whatsappNumbers[location];
  let message = `Hello T Odeke & Co. Advocates. I'm interested in`;

  if (practiceArea) {
    message += ` ${practiceArea} legal services at your ${location} office.`;
  } else {
    message += ` your legal services at your ${location} office.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${number}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    // Phone validation (Uganda format)
    const phoneRegex = /^(\+256|0)[37]\d{8}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      showNotification('Please enter a valid Ugandan phone number.', 'error');
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
      // Get reCAPTCHA token if enabled
      let recaptchaToken = null;
      if (typeof grecaptcha !== 'undefined') {
        recaptchaToken = await grecaptcha.execute(window.RECAPTCHA_SITE_KEY, { action: 'submit' });
      }

      // Send to production form handler
      const result = await handleFormSubmission(data, recaptchaToken);

      if (result.success) {
        showNotification(result.message, 'success');
        contactForm.reset();

        // Track conversion in analytics
        trackEvent('conversion', 'form_submit', 'contact_form');

        // Optional: Redirect to thank you page after 2 seconds
        // setTimeout(() => window.location.href = '/thank-you.html', 2000);
      } else {
        showNotification(result.message, 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showNotification('Something went wrong. Please call us directly at +256 700 000 000', 'error');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
  // Remove existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Style notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '100px',
    right: '20px',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
    color: 'white',
    fontWeight: '600',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
    animation: 'slideInRight 0.3s ease-out',
    maxWidth: '350px'
  });

  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ============================================
// EXIT INTENT POPUP (Non-intrusive)
// ============================================

let exitIntentShown = false;

document.addEventListener('mouseleave', (e) => {
  // Only trigger if mouse leaves from top of page
  if (e.clientY < 0 && !exitIntentShown && window.scrollY > 500) {
    showExitIntentPopup();
    exitIntentShown = true;
  }
});

function showExitIntentPopup() {
  const popup = document.createElement('div');
  popup.className = 'exit-intent-popup';
  popup.innerHTML = `
    <div class="exit-intent-content glass-card">
      <button class="exit-intent-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h3>Wait! Before You Go...</h3>
      <p>Get your <strong>FREE</strong> legal consultation guide</p>
      <form class="exit-intent-form">
        <input type="email" placeholder="Enter your email" required>
        <button type="submit" class="btn-primary">Get Free Guide</button>
      </form>
    </div>
  `;

  // Style popup
  const style = document.createElement('style');
  style.textContent = `
    .exit-intent-popup {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease-out;
    }
    
    .exit-intent-content {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      max-width: 500px;
      position: relative;
      animation: scaleIn 0.3s ease-out;
    }
    
    .exit-intent-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #666;
    }
    
    .exit-intent-form {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .exit-intent-form input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes scaleIn {
      from { transform: scale(0.9); }
      to { transform: scale(1); }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(popup);

  // Handle form submission
  popup.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Thanks! Check your email for the guide.', 'success');
    popup.remove();
  });

  // Close on background click
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.remove();
    }
  });
}

// ============================================
// PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(element => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;

    element.style.transform = `translateY(${rate}px)`;
  });
});

// ============================================
// LAZY LOADING IMAGES (if native not supported)
// ============================================

if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers without native lazy loading
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  const lazyImages = document.querySelectorAll('img.lazy');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// ANALYTICS TRACKING (Ready for GA4)
// ============================================

function trackEvent(category, action, label) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }

  // Also log to console in development
  console.log('Event:', category, action, label);
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-whatsapp').forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent.trim();
    trackEvent('engagement', 'button_click', buttonText);
  });
});

// Track form submissions
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', () => {
    trackEvent('conversion', 'form_submit', form.id || 'unnamed_form');
  });
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('engagement', 'phone_click', link.href);
  });
});

// Track email clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('engagement', 'email_click', link.href);
  });
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

window.addEventListener('load', () => {
  // Measure page load time
  const perfData = performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

  console.log(`Page loaded in ${pageLoadTime}ms`);

  // Track in analytics if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'timing_complete', {
      'name': 'load',
      'value': pageLoadTime,
      'event_category': 'Performance'
    });
  }
});

console.log('🚀 T Odeke & Co. Advocates - Premium Experience Loaded');
