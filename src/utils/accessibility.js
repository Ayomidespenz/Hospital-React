/**
 * Accessibility Utilities
 * This file contains various accessibility enhancement functions
 */

/**
 * Add ARIA attributes to interactive elements
 */
export const enhanceInteractiveElements = () => {
  // Add aria-label to buttons with only icons
  document.querySelectorAll('button:not([aria-label])').forEach(button => {
    if (button.textContent.trim() === '' && button.querySelector('i, svg, img')) {
      const label = button.getAttribute('title') || 'Action button';
      button.setAttribute('aria-label', label);
    }
  });

  // Add aria-expanded to collapsible elements
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(toggle => {
    const target = document.querySelector(toggle.getAttribute('data-bs-target') || toggle.getAttribute('href'));
    if (target) {
      const expanded = target.classList.contains('show') ? 'true' : 'false';
      toggle.setAttribute('aria-expanded', expanded);
      
      // Update on click
      toggle.addEventListener('click', () => {
        const newExpanded = target.classList.contains('show') ? 'true' : 'false';
        toggle.setAttribute('aria-expanded', newExpanded);
      });
    }
  });
};

/**
 * Add skip to main content link
 */
export const addSkipToContentLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-to-content';
  skipLink.textContent = 'Skip to main content';
  
  skipLink.style.position = 'absolute';
  skipLink.style.left = '-9999px';
  skipLink.style.zIndex = '999';
  skipLink.style.padding = '1em';
  skipLink.style.backgroundColor = '#fff';
  skipLink.style.color = '#000';
  skipLink.style.fontWeight = 'bold';
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.left = '0';
    skipLink.style.top = '0';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

/**
 * Make tables more accessible
 */
export const enhanceTables = () => {
  document.querySelectorAll('table:not([role="presentation"])').forEach(table => {
    // Add role="table" if not present
    if (!table.getAttribute('role')) {
      table.setAttribute('role', 'table');
    }
    
    // Add scope to header cells
    const headers = table.querySelectorAll('th');
    headers.forEach(header => {
      if (!header.getAttribute('scope')) {
        header.setAttribute('scope', 'col');
      }
    });
    
    // Add caption if missing
    if (!table.querySelector('caption') && !table.getAttribute('aria-label') && !table.getAttribute('aria-labelledby')) {
      const caption = document.createElement('caption');
      caption.textContent = 'Data table';
      table.insertBefore(caption, table.firstChild);
    }
  });
};

/**
 * Add aria-live regions for dynamic content
 */
export const addLiveRegions = () => {
  // Add a live region for alerts
  const alertRegion = document.createElement('div');
  alertRegion.setAttribute('aria-live', 'polite');
  alertRegion.setAttribute('aria-atomic', 'true');
  alertRegion.className = 'sr-only';
  alertRegion.id = 'a11y-alert';
  document.body.appendChild(alertRegion);
  
  // Add a live region for status updates
  const statusRegion = document.createElement('div');
  statusRegion.setAttribute('aria-live', 'polite');
  statusRegion.setAttribute('aria-atomic', 'true');
  statusRegion.className = 'sr-only';
  statusRegion.id = 'a11y-status';
  document.body.appendChild(statusRegion);
};

/**
 * Announce a message to screen readers
 * @param {string} message - The message to announce
 * @param {string} type - The type of announcement ('polite' or 'assertive')
 */
export const announce = (message, type = 'polite') => {
  const region = type === 'assertive' ? 'a11y-alert' : 'a11y-status';
  const regionEl = document.getElementById(region);
  if (regionEl) {
    regionEl.textContent = message;
    // Clear the message after a short delay
    setTimeout(() => {
      regionEl.textContent = '';
    }, 1000);
  }
};

/**
 * Add focus styles for keyboard navigation
 */
export const enhanceFocusStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    :focus-visible {
      outline: 3px solid #0d6efd;
      outline-offset: 2px;
    }
    
    button:focus-visible,
    [role="button"]:focus-visible,
    a:focus-visible {
      position: relative;
      z-index: 1;
      box-shadow: 0 0 0 3px #fff, 0 0 0 6px #0d6efd;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Initialize all accessibility enhancements
 */
export const initAccessibility = () => {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      // Add skip to content link
      addSkipToContentLink();
      
      // Enhance interactive elements
      enhanceInteractiveElements();
      
      // Enhance tables
      enhanceTables();
      
      // Add live regions
      addLiveRegions();
      
      // Enhance focus styles
      enhanceFocusStyles();
      
      // Add keyboard navigation for dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.setAttribute('aria-orientation', 'vertical');
      });
      
      // Add proper roles to navigation elements
      document.querySelectorAll('nav').forEach(nav => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }
      });
    });
  }
};

export default {
  enhanceInteractiveElements,
  addSkipToContentLink,
  enhanceTables,
  addLiveRegions,
  announce,
  enhanceFocusStyles,
  initAccessibility
};
