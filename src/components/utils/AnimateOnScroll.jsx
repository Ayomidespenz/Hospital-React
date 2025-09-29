import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const AnimateOnScroll = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  style = {},
  once = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once]);

  const animationClasses = {
    'fade-in': 'fade-in',
    'slide-up': 'slide-up',
    'slide-down': 'fade-in-down',
    'slide-left': 'slide-in-left',
    'slide-right': 'slide-in-right',
    'scale-in': 'scale-in',
    'fade-in-up': 'fade-in-up',
  };

  const animationClass = animationClasses[animation] || 'fade-in-up';

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${isVisible ? 'animate ' + animationClass : ''} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

AnimateOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    'fade-in',
    'slide-up',
    'slide-down',
    'slide-left',
    'slide-right',
    'scale-in',
    'fade-in-up',
  ]),
  delay: PropTypes.number,
  threshold: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  once: PropTypes.bool,
};

export default AnimateOnScroll;
