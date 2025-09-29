/**
 * Form Validation Utilities
 * Provides frontend form validation functionality
 */

/**
 * Validation patterns and messages
 */
const patterns = {
  name: {
    regex: /^[a-zA-Z\s-']{2,50}$/,
    message: 'Please enter a valid name (2-50 characters, letters only)'
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    regex: /^[\d\s+()-]{10,20}$/,
    message: 'Please enter a valid phone number (10-20 digits)'
  },
  required: {
    regex: /\S+/,
    message: 'This field is required'
  },
  message: {
    regex: /^[\s\S]{10,1000}$/,
    message: 'Message must be between 10 and 1000 characters'
  },
  date: {
    regex: /^\d{4}-\d{2}-\d{2}$/,
    message: 'Please enter a valid date (YYYY-MM-DD)'
  },
  time: {
    regex: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    message: 'Please enter a valid time (HH:MM)'
  }
};

/**
 * Validate a single form field
 * @param {HTMLInputElement} field - The form field to validate
 * @param {Object} rules - Validation rules to apply
 * @returns {Object} Validation result { isValid: boolean, message: string }
 */
export const validateField = (field, rules = {}) => {
  const value = field.value.trim();
  const fieldName = field.getAttribute('name') || field.getAttribute('id') || 'This field';
  
  // Check required fields
  if (field.required && (!value || value === '')) {
    return {
      isValid: false,
      message: `${fieldName} is required`
    };
  }
  
  // Skip further validation if field is empty and not required
  if (!value) {
    return { isValid: true, message: '' };
  }
  
  // Apply custom validation rules
  for (const [rule, ruleValue] of Object.entries(rules)) {
    switch (rule) {
      case 'pattern':
        if (!new RegExp(ruleValue).test(value)) {
          return {
            isValid: false,
            message: field.dataset.errorMessage || 'Please enter a valid value'
          };
        }
        break;
        
      case 'minLength':
        if (value.length < ruleValue) {
          return {
            isValid: false,
            message: `Must be at least ${ruleValue} characters`
          };
        }
        break;
        
      case 'maxLength':
        if (value.length > ruleValue) {
          return {
            isValid: false,
            message: `Must be less than ${ruleValue} characters`
          };
        }
        break;
        
      case 'match':
        if (value !== document.querySelector(ruleValue).value) {
          return {
            isValid: false,
            message: 'Values do not match'
          };
        }
        break;
        
      // Add more validation rules as needed
    }
  }
  
  // Check against predefined patterns
  const patternName = field.dataset.validate;
  if (patternName && patterns[patternName]) {
    if (!patterns[patternName].regex.test(value)) {
      return {
        isValid: false,
        message: field.dataset.errorMessage || patterns[patternName].message
      };
    }
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validate an entire form
 * @param {HTMLFormElement} form - The form to validate
 * @returns {Object} Validation result { isValid: boolean, errors: Array }
 */
export const validateForm = (form) => {
  const fields = form.querySelectorAll('[data-validate]');
  const errors = [];
  
  fields.forEach(field => {
    const rules = {};
    
    // Extract validation rules from data attributes
    if (field.dataset.minLength) rules.minLength = parseInt(field.dataset.minLength, 10);
    if (field.dataset.maxLength) rules.maxLength = parseInt(field.dataset.maxLength, 10);
    if (field.dataset.pattern) rules.pattern = field.dataset.pattern;
    if (field.dataset.match) rules.match = field.dataset.match;
    
    const result = validateField(field, rules);
    
    if (!result.isValid) {
      errors.push({
        field: field.name || field.id,
        message: result.message
      });
      
      // Add error class to field
      field.classList.add('is-invalid');
      
      // Show error message
      let errorElement = field.nextElementSibling;
      if (!errorElement || !errorElement.classList.contains('invalid-feedback')) {
        errorElement = document.createElement('div');
        errorElement.className = 'invalid-feedback';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
      }
      errorElement.textContent = result.message;
    } else {
      // Remove error state
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      
      // Remove error message if exists
      const errorElement = field.nextElementSibling;
      if (errorElement && errorElement.classList.contains('invalid-feedback')) {
        errorElement.remove();
      }
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Initialize form validation
 * @param {string} formSelector - CSS selector for the form
 * @param {Function} onSubmit - Callback function when form is valid
 */
export const initFormValidation = (formSelector, onSubmit) => {
  const form = document.querySelector(formSelector);
  if (!form) return;
  
  // Validate on submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const { isValid } = validateForm(form);
    
    if (isValid && typeof onSubmit === 'function') {
      onSubmit(form);
    }
  });
  
  // Real-time validation on blur
  form.querySelectorAll('[data-validate]').forEach(field => {
    field.addEventListener('blur', () => {
      const rules = {};
      if (field.dataset.minLength) rules.minLength = parseInt(field.dataset.minLength, 10);
      if (field.dataset.maxLength) rules.maxLength = parseInt(field.dataset.maxLength, 10);
      if (field.dataset.pattern) rules.pattern = field.dataset.pattern;
      
      validateField(field, rules);
    });
    
    // Clear validation on focus
    field.addEventListener('focus', () => {
      field.classList.remove('is-invalid', 'is-valid');
      const errorElement = field.nextElementSibling;
      if (errorElement && errorElement.classList.contains('invalid-feedback')) {
        errorElement.textContent = '';
      }
    });
  });
};

// Example usage:
/*
// In your component:
import { initFormValidation } from '../utils/formValidation';

useEffect(() => {
  initFormValidation('#contactForm', (form) => {
    // Form is valid, handle submission
    const formData = new FormData(form);
    // ... handle form submission
  });
}, []);

// In your form:
/*
<form id="contactForm">
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input 
      type="text" 
      className="form-control" 
      id="name" 
      name="name" 
      required
      data-validate="name"
      data-error-message="Please enter your full name"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input 
      type="email" 
      className="form-control" 
      id="email" 
      name="email" 
      required
      data-validate="email"
    />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
*/

export default {
  validateField,
  validateForm,
  initFormValidation,
  patterns
};
