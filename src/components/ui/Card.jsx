import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Card Component
 * A flexible card component for displaying content
 */
const Card = ({
  children,
  className = '',
  variant = 'default',
  hoverable = false,
  padding = 'md',
  rounded = 'lg',
  shadow = 'md',
  border = true,
  ...props
}) => {
  // Base classes
  const baseClasses = 'overflow-hidden transition-all duration-200';
  
  // Variant classes
  const variants = {
    default: 'bg-white',
    primary: 'bg-blue-50 border-blue-100',
    secondary: 'bg-gray-50 border-gray-100',
    success: 'bg-green-50 border-green-100',
    danger: 'bg-red-50 border-red-100',
    warning: 'bg-yellow-50 border-yellow-100',
    info: 'bg-cyan-50 border-cyan-100',
    light: 'bg-gray-50 border-gray-100',
    dark: 'bg-gray-800 border-gray-700 text-white',
  };
  
  // Padding classes
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  // Border radius classes
  const borderRadius = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };
  
  // Shadow classes
  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-md',
    xl: 'shadow-lg',
    '2xl': 'shadow-xl',
    inner: 'shadow-inner',
  };
  
  // Border classes
  const borderClasses = border ? 'border' : 'border-0';
  
  // Hover effect
  const hoverClasses = hoverable 
    ? 'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200' 
    : '';
  
  // Combine all classes
  const cardClasses = classNames(
    baseClasses,
    variants[variant] || variants.default,
    paddings[padding] || paddings.md,
    borderRadius[rounded] || borderRadius.lg,
    shadows[shadow] || shadows.md,
    borderClasses,
    hoverClasses,
    className
  );
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Card Header Component
 */
const CardHeader = ({ children, className = '', ...props }) => (
  <div 
    className={classNames(
      'px-6 py-4 border-b border-gray-100',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

/**
 * Card Body Component
 */
const CardBody = ({ children, className = '', ...props }) => (
  <div 
    className={classNames('p-6', className)} 
    {...props}
  >
    {children}
  </div>
);

/**
 * Card Footer Component
 */
const CardFooter = ({ children, className = '', ...props }) => (
  <div 
    className={classNames(
      'px-6 py-4 bg-gray-50 border-t border-gray-100',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

// Add sub-components to Card
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

// Prop types
const commonPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.propTypes = {
  ...commonPropTypes,
  variant: PropTypes.oneOf([
    'default', 'primary', 'secondary', 'success', 
    'danger', 'warning', 'info', 'light', 'dark'
  ]),
  hoverable: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
  shadow: PropTypes.oneOf([
    'none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'
  ]),
  border: PropTypes.bool,
};

CardHeader.propTypes = commonPropTypes;
CardBody.propTypes = commonPropTypes;
CardFooter.propTypes = commonPropTypes;

export default Card;

// Example usage:
/*
// Basic card
<Card>
  <Card.Header>
    <h3 className="text-lg font-medium">Card Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here.</p>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Action</Button>
  </Card.Footer>
</Card>

// Card with hover effect
<Card hoverable>
  <Card.Body>
    <h3 className="text-lg font-medium mb-2">Hoverable Card</h3>
    <p>This card has a nice hover effect.</p>
  </Card.Body>
</Card>

// Colored card
<Card variant="primary">
  <Card.Body>
    <h3 className="text-lg font-medium mb-2">Primary Card</h3>
    <p>This is a primary variant card.</p>
  </Card.Body>
</Card>

// Card with custom padding and no border
<Card padding="lg" border={false}>
  <Card.Body>
    <h3 className="text-lg font-medium mb-2">No Border Card</h3>
    <p>This card has no border and extra padding.</p>
  </Card.Body>
</Card>
*/
