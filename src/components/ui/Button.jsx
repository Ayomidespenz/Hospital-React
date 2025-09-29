import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

/**
 * Button Component
 * A reusable button with various styles, sizes, and states
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  fullWidth = false,
  className = '',
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
  // Variant classes
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
    info: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-400',
    light: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300',
    dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    'outline-primary': 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    'outline-success': 'bg-transparent border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
    'outline-danger': 'bg-transparent border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
    link: 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline focus:ring-blue-500 p-0',
  };

  // Size classes
  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-base',
  };

  // Disabled state
  const disabledClasses = disabled || isLoading ? 'opacity-60 cursor-not-allowed' : '';
  
  // Full width
  const fullWidthClass = fullWidth ? 'w-full' : '';
  
  // Loading spinner
  const spinner = (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      className={children ? 'mr-2' : ''}
    />
  );

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${disabledClasses}
        ${fullWidthClass}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && spinner}
      {StartIcon && !isLoading && <StartIcon className="mr-2 h-4 w-4" />}
      {isLoading && loadingText ? loadingText : children}
      {EndIcon && !isLoading && <EndIcon className="ml-2 h-4 w-4" />}
    </button>
  );
};

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Button style variant */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'outline',
    'outline-primary',
    'outline-success',
    'outline-danger',
    'link',
  ]),
  /** Button size */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Button type */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Click handler */
  onClick: PropTypes.func,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Loading state */
  isLoading: PropTypes.bool,
  /** Loading text (replaces children when loading) */
  loadingText: PropTypes.string,
  /** Full width button */
  fullWidth: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Icon component to display at the start */
  startIcon: PropTypes.elementType,
  /** Icon component to display at the end */
  endIcon: PropTypes.elementType,
};

export default Button;

// Example usage:
/*
import { FaArrowRight, FaDownload } from 'react-icons/fa';

// Basic button
<Button onClick={() => console.log('Clicked')}>
  Click me
</Button>

// With icons
<Button 
  variant="primary" 
  startIcon={FaDownload} 
  endIcon={FaArrowRight}
>
  Download
</Button>

// Loading state
<Button 
  variant="primary" 
  isLoading 
  loadingText="Processing..."
>
  Submit
</Button>

// Disabled state
<Button 
  variant="danger" 
  disabled
>
  Delete
</Button>

// Full width
<Button 
  variant="primary" 
  fullWidth
>
  Full width button
</Button>

// Link button
<Button 
  variant="link" 
  onClick={() => navigate('/about')}
>
  Learn more
</Button>
*/
