import { motion } from 'framer-motion';

// Fade in animation
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Card hover animation
export const cardHover = {
  scale: 1.02,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20
  }
};

// Button tap animation
export const buttonTap = {
  scale: 0.98,
  transition: {
    type: 'spring',
    stiffness: 500,
    damping: 20
  }
};

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '-100vw',
    scale: 1.2
  }
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

// Animated wrapper components
export const AnimatedDiv = ({ children, className = '', ...props }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeIn}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default {
  fadeIn,
  staggerContainer,
  cardHover,
  buttonTap,
  pageVariants,
  pageTransition,
  AnimatedDiv,
  AnimatedPage
};
