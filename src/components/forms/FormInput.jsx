import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaExclamationCircle, FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';

/**
 * FormInput Component
 * A reusable form input with validation and error handling
 */
const FormInput = ({
  id,
  name,
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onBlur,
  error = '',
  touched = false,
  required = false,
  disabled = false,
  readOnly = false,
  autoComplete = 'off',
  className = '',
  inputClassName = '',
  labelClassName = '',
  errorClassName = '',
  startIcon: StartIcon,
  endIcon: EndIcon,
  showSuccess = true,
  showError = true,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  
  // Handle focus state
  const handleFocus = (e) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };
  
  // Handle blur event
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // Focus the input after toggling
    setTimeout(() => inputRef.current?.focus(), 0);
  };
  
  // Determine input state
  const hasError = touched && error && showError;
  const isValid = touched && !error && value && showSuccess;
  
  // Input container classes
  const containerClasses = `relative ${className}`;
  
  // Input classes
  const inputClasses = `
    block w-full px-4 py-2.5 rounded-md border shadow-sm
    focus:ring-2 focus:ring-offset-1 focus:outline-none
    transition duration-150 ease-in-out
    ${hasError 
      ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
      : isValid 
        ? 'border-green-300 text-green-900 focus:ring-green-500 focus:border-green-500' 
        : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
    }
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
    ${readOnly ? 'bg-gray-50' : ''}
    ${StartIcon ? 'pl-10' : ''}
    ${EndIcon || isPassword ? 'pr-10' : ''}
    ${inputClassName}
  `;
  
  // Label classes
  const labelClasses = `
    block text-sm font-medium mb-1
    ${hasError ? 'text-red-700' : 'text-gray-700'}
    ${labelClassName}
  `;
  
  // Error message classes
  const errorClasses = `mt-1 text-sm text-red-600 ${errorClassName}`;
  
  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={id || name} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative rounded-md shadow-sm">
        {/* Start Icon */}
        {StartIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <StartIcon 
              className={`h-5 w-5 ${hasError ? 'text-red-400' : 'text-gray-400'}`} 
              aria-hidden="true" 
            />
          </div>
        )}
        
        {/* Input Field */}
        <input
          ref={inputRef}
          id={id || name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          className={inputClasses}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${name}-error` : undefined}
          {...props}
        />
        
        {/* End Icon or Password Toggle */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {isPassword ? (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              tabIndex="-1" // Prevent tabbing to this button
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
              ) : (
                <FaEye className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          ) : EndIcon ? (
            <EndIcon 
              className={`h-5 w-5 ${hasError ? 'text-red-400' : 'text-gray-400'}`} 
              aria-hidden="true" 
            />
          ) : null}
          
          {/* Validation Icons */}
          {!EndIcon && !isPassword && (
            <>
              {hasError && (
                <FaExclamationCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
              )}
              {isValid && (
                <FaCheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Error Message */}
      {hasError && (
        <p className={errorClasses} id={`${name}-error`}>
          {error}
        </p>
      )}
      
      {/* Character Counter (if maxLength is provided) */}
      {props.maxLength && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {value.length}/{props.maxLength}
        </div>
      )}
    </div>
  );
};

// Prop Types
FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text', 'email', 'password', 'number', 'tel', 'url', 'date', 'time', 'datetime-local', 'month', 'week', 'search', 'color'
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  startIcon: PropTypes.elementType,
  endIcon: PropTypes.elementType,
  showSuccess: PropTypes.bool,
  showError: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default FormInput;

// Example usage:
/*
// Basic text input
<FormInput
  name="username"
  label="Username"
  placeholder="Enter your username"
  value={formData.username}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.username}
  touched={touched.username}
  required
/>

// Email input with icon
<FormInput
  name="email"
  type="email"
  label="Email Address"
  placeholder="your@email.com"
  value={formData.email}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.email}
  touched={touched.email}
  startIcon={FaEnvelope}
  required
/>

// Password input with toggle
<FormInput
  name="password"
  type="password"
  label="Password"
  placeholder="Enter your password"
  value={formData.password}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.password}
  touched={touched.password}
  required
  minLength={8}
/>

// Textarea (using as prop)
<FormInput
  as="textarea"
  name="message"
  label="Your Message"
  rows={4}
  value={formData.message}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.message}
  touched={touched.message}
  className="mb-4"
/>
*/
