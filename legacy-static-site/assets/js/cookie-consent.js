/**
 * PRODUCTION COOKIE CONSENT BANNER
 * GDPR & Uganda Data Protection Compliant
 */

(function () {
    'use strict';

    // Configuration
    const COOKIE_NAME = 'todeke_cookie_consent';
    const COOKIE_DURATION = 365; // days

    // Check if consent already given
    if (getCookie(COOKIE_NAME)) {
        enableAnalytics();
        return;
    }

    // Create and show cookie banner
    createCookieBanner();

    function createCookieBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
      <div class="cookie-consent-content">
        <div class="cookie-text">
          <h4>🍪 We Value Your Privacy</h4>
          <p>We use cookies to enhance your experience, analyze site traffic, and improve our services. By clicking "Accept", you consent to our use of cookies.</p>
          <a href="/privacy-policy.html" target="_blank">Learn more about our Privacy Policy</a>
        </div>
        <div class="cookie-buttons">
          <button id="cookie-accept" class="btn-primary">Accept All</button>
          <button id="cookie-reject" class="btn-secondary">Reject Non-Essential</button>
        </div>
      </div>
    `;

        // Styles
        const style = document.createElement('style');
        style.textContent = `
      #cookie-consent-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #0F1829 0%, #1a2332 100%);
        color: white;
        padding: 1.5rem;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideUp 0.5s ease-out;
      }
      
      .cookie-consent-content {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
      }
      
      .cookie-text h4 {
        font-family: 'Playfair Display', Georgia, serif;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        color: #D4AF37;
      }
      
      .cookie-text p {
        margin-bottom: 0.5rem;
        line-height: 1.6;
      }
      
      .cookie-text a {
        color: #D4AF37;
        text-decoration: underline;
        font-size: 0.9rem;
      }
      
      .cookie-buttons {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
      }
      
      .cookie-buttons button {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
      }
      
      #cookie-accept {
        background: linear-gradient(135deg, #D4AF37, #b8941f);
        color: #0F1829;
      }
      
      #cookie-accept:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
      }
      
      #cookie-reject {
        background: transparent;
        border: 2px solid #D4AF37;
        color: #D4AF37;
      }
      
      #cookie-reject:hover {
        background: rgba(212, 175, 55, 0.1);
      }
      
      @keyframes slideUp {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      @media (max-width: 768px) {
        .cookie-consent-content {
          flex-direction: column;
          align-items: stretch;
        }
        
        .cookie-buttons {
          flex-direction: column;
        }
        
        .cookie-buttons button {
          width: 100%;
        }
      }
    `;

        document.head.appendChild(style);
        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('cookie-accept').addEventListener('click', acceptCookies);
        document.getElementById('cookie-reject').addEventListener('click', rejectCookies);
    }

    function acceptCookies() {
        setCookie(COOKIE_NAME, 'accepted', COOKIE_DURATION);
        enableAnalytics();
        removeBanner();

        // Track consent (if analytics already loaded)
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
        }
    }

    function rejectCookies() {
        setCookie(COOKIE_NAME, 'rejected', COOKIE_DURATION);
        removeBanner();



        // Only essential cookies
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    }

    function removeBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.animation = 'slideDown 0.5s ease-in';
            setTimeout(() => banner.remove(), 500);
        }
    }

    function enableAnalytics() {
        // Google Analytics 4
        if (window.GA4_MEASUREMENT_ID) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA4_MEASUREMENT_ID}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', window.GA4_MEASUREMENT_ID);
            window.gtag = gtag;
        }

        // Facebook Pixel
        if (window.FACEBOOK_PIXEL_ID) {
            !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; n = f.fbq = function () {
                    n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                n.queue = []; t = b.createElement(e); t.async = !0;
                t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', window.FACEBOOK_PIXEL_ID);
            fbq('track', 'PageView');
        }
    }

    // Cookie utilities
    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax; Secure`;
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, c) => {
            const [key, val] = c.split('=');
            return key === name ? decodeURIComponent(val) : r;
        }, '');
    }

    // Add slideDown animation
    const slideDownStyle = document.createElement('style');
    slideDownStyle.textContent = `
    @keyframes slideDown {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(100%);
        opacity: 0;
      }
    }
  `;
    document.head.appendChild(slideDownStyle);
})();
