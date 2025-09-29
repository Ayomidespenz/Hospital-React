/**
 * Performance Optimization Utilities
 * This file contains various performance optimization functions
 */

/**
 * Optimize images by adding loading="lazy" and decoding="async"
 * @param {string} selector - CSS selector for images to optimize
 */
export const lazyLoadImages = (selector = 'img') => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll(`${selector}:not([loading])`);
    images.forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
    });
  }
};

/**
 * Add resource hints for better performance
 */
export const addResourceHints = () => {
  const links = [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' },
    { rel: 'preconnect', href: 'https://maps.googleapis.com', crossOrigin: '' },
  ];

  links.forEach(link => {
    const element = document.createElement('link');
    Object.entries(link).forEach(([key, value]) => {
      if (value !== '') {
        element[key] = value;
      }
    });
    document.head.appendChild(element);
  });
};

/**
 * Initialize service worker for offline capabilities
 */
export const initServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registration successful');
      return registration;
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
    }
  }
  return null;
};

/**
 * Optimize Web Vitals
 * @param {Function} onPerfEntry - Callback function to handle metrics
 */
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * Optimize animations for better performance
 */
export const optimizeAnimations = () => {
  // Add will-change property to elements with animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .hover-scale');
  animatedElements.forEach(el => {
    el.style.willChange = 'transform, opacity';
  });
};

/**
 * Debounce function to limit the rate at which a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit the rate at which a function can fire
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Initialize all performance optimizations
 */
export const initPerformanceOptimizations = () => {
  // Add resource hints
  addResourceHints();
  
  // Lazy load images
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      lazyLoadImages();
      optimizeAnimations();
    });
    
    // Initialize service worker in production
    if (process.env.NODE_ENV === 'production') {
      initServiceWorker();
    }
  }
};

export default {
  lazyLoadImages,
  addResourceHints,
  initServiceWorker,
  reportWebVitals,
  optimizeAnimations,
  debounce,
  throttle,
  initPerformanceOptimizations
};
