import React from 'react';
import './LoadingSpinner.css';

/**
 * LoadingSpinner Component
 * A reusable loading indicator with different sizes and variants
 * 
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size of the spinner (sm, md, lg, xl)
 * @param {string} [props.variant='primary'] - Color variant (primary, secondary, light, dark)
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.text=''] - Optional loading text to display below the spinner
 * @param {boolean} [props.fullPage=false] - Whether to show a full-page overlay
 * @param {string} [props.overlayColor='rgba(255, 255, 255, 0.8)'] - Overlay background color
 * @returns {JSX.Element} LoadingSpinner component
 */
const LoadingSpinner = ({
  size = 'md',
  variant = 'primary',
  className = '',
  text = '',
  fullPage = false,
  overlayColor = 'rgba(255, 255, 255, 0.8)'
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-4',
    xl: 'h-16 w-16 border-4'
  };

  // Variant classes
  const variantClasses = {
    primary: 'border-t-blue-600 border-r-blue-600 border-b-transparent border-l-transparent',
    secondary: 'border-t-gray-600 border-r-gray-600 border-b-transparent border-l-transparent',
    light: 'border-t-white border-r-white border-b-transparent border-l-transparent',
    dark: 'border-t-gray-800 border-r-gray-800 border-b-transparent border-l-transparent',
    success: 'border-t-green-500 border-r-green-500 border-b-transparent border-l-transparent',
    danger: 'border-t-red-500 border-r-red-500 border-b-transparent border-l-transparent',
    warning: 'border-t-yellow-500 border-r-yellow-500 border-b-transparent border-l-transparent',
    info: 'border-t-blue-400 border-r-blue-400 border-b-transparent border-l-transparent'
  };

  // Text size mapping
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  // Spinner element
  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        className={`
          animate-spin 
          rounded-full 
          ${sizeClasses[size] || sizeClasses.md} 
          ${variantClasses[variant] || variantClasses.primary}
        `}
        role="status"
        aria-label="Loading..."
      >
        <span className="sr-only">Loading...</span>
      </div>
      {text && (
        <span className={`mt-2 ${textSizes[size] || 'text-sm'} text-gray-600`}>
          {text}
        </span>
      )}
    </div>
  );

  // Return full page overlay if needed
  if (fullPage) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80"
        style={{ backgroundColor: overlayColor }}
        aria-live="polite"
        aria-busy="true"
      >
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;

// Example usage:
/*
// Basic usage
<LoadingSpinner />

// With custom size and variant
<LoadingSpinner size="lg" variant="primary" />

// With loading text
<LoadingSpinner text="Loading data..." />

// Full page overlay
<LoadingSpinner fullPage text="Processing your request..." />

// Custom overlay color
<LoadingSpinner 
  fullPage 
  overlayColor="rgba(0, 0, 0, 0.7)" 
  variant="light"
  text="Please wait..."
/>
*/
