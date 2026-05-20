/**
 * Advanced Animation Library
 * Production-grade animation variants for Framer Motion
 * Optimized for performance and visual impact
 */

import { Variants } from 'framer-motion';

// ==================== ENTRANCE ANIMATIONS ====================

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
};

// ==================== SCALE & ZOOM ANIMATIONS ====================

export const scaleInCenter: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } },
};

export const scaleInBounce: Variants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const zoomInRotate: Variants = {
  initial: { opacity: 0, scale: 0, rotate: -180 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: 'backOut' },
  },
};

// ==================== FLIP & ROTATION ANIMATIONS ====================

export const flipInX: Variants = {
  initial: { opacity: 0, rotateX: 90 },
  animate: { opacity: 1, rotateX: 0, transition: { duration: 0.6 } },
};

export const flipInY: Variants = {
  initial: { opacity: 0, rotateY: 90 },
  animate: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
};

export const spinIn: Variants = {
  initial: { opacity: 0, rotate: -360 },
  animate: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// ==================== BOUNCE ANIMATIONS ====================

export const bounceIn: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

export const bounceInUp: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

// ==================== FLOATING & OSCILLATION ====================

export const floatingVariant: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const floatingVariantSlow: Variants = {
  animate: {
    y: [0, -30, 0],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const floatingVariantFast: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const driftingVariant: Variants = {
  animate: {
    x: [0, 15, -15, 0],
    y: [0, -10, 10, 0],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  },
};

// ==================== PULSING & BREATHING ====================

export const pulseVariant: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const breathingVariant: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [1, 0.8, 1],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

// ==================== GLOW & LIGHT EFFECTS ====================

export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      '0 0 0px rgba(124, 58, 237, 0)',
      '0 0 20px rgba(124, 58, 237, 0.8)',
      '0 0 0px rgba(124, 58, 237, 0)',
    ],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const glowIntense: Variants = {
  animate: {
    boxShadow: [
      '0 0 5px rgba(0, 255, 65, 0.5)',
      '0 0 40px rgba(0, 255, 65, 1)',
      '0 0 5px rgba(0, 255, 65, 0.5)',
    ],
    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
  },
};

// ==================== STAGGER ANIMATIONS ====================

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ==================== SCROLL TRIGGERED ANIMATIONS ====================

export const scrollFadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { margin: '-100px' },
  transition: { duration: 0.7, ease: 'easeOut' },
};

export const scrollScaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { margin: '-100px' },
  transition: { duration: 0.7, ease: 'easeOut' },
};

export const scrollRotateIn = {
  initial: { opacity: 0, rotate: -45 },
  whileInView: { opacity: 1, rotate: 0 },
  viewport: { margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
};

// ==================== SLIDE ANIMATIONS ====================

export const slideInFromLeft: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const slideInFromRight: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const slideInFromTop: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const slideInFromBottom: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// ==================== 3D ANIMATIONS ====================

export const perspective3D: Variants = {
  initial: { opacity: 0, rotateX: -90, z: -200 },
  animate: { opacity: 1, rotateX: 0, z: 0, transition: { duration: 0.8 } },
};

export const tiltOnHover: Variants = {
  whileHover: {
    rotateX: 10,
    rotateY: 10,
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

// ==================== TEXT ANIMATIONS ====================

export const letterSpacing: Variants = {
  animate: {
    letterSpacing: [0, 3, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const textWave: Variants = {
  animate: (custom: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      delay: custom * 0.05,
      ease: 'easeInOut',
    },
  }),
};

export const textGlitch: Variants = {
  animate: {
    x: [0, -2, 2, -2, 0],
    transition: { duration: 0.3, repeat: Infinity, ease: 'easeInOut' },
  },
};

// ==================== HOVER ANIMATIONS ====================

export const hoverScale: Variants = {
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
};

export const hoverGlow: Variants = {
  whileHover: {
    boxShadow: '0 0 30px rgba(124, 58, 237, 0.8)',
    transition: { duration: 0.3 },
  },
};

export const hoverLift: Variants = {
  whileHover: {
    y: -10,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3 },
  },
};

// ==================== PARALLAX SCROLL ====================

export const parallaxScroll = (distance: number) => ({
  initial: { y: 0 },
  whileInView: { y: distance },
  viewport: { margin: '-100px' },
});

// ==================== MORPHING ANIMATIONS ====================

export const morphScale: Variants = {
  animate: {
    borderRadius: ['0%', '50%', '0%'],
    scale: [1, 1.1, 1],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const morphRotate: Variants = {
  animate: {
    rotate: [0, 180, 360],
    borderRadius: ['20%', '50%', '20%'],
    transition: { duration: 4, repeat: Infinity, ease: 'linear' },
  },
};

// ==================== SPOTLIGHT EFFECT ====================

export const spotlightPan: Variants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
};

// ==================== SHIMMER EFFECT ====================

export const shimmerVariant: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: { duration: 3, repeat: Infinity, ease: 'linear' },
  },
};

// ==================== COMBINED ANIMATION SETS ====================

export const cardHoverAnimation: Variants = {
  whileHover: {
    y: -15,
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  whileTap: { scale: 0.98 },
};

export const buttonPressAnimation: Variants = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.92 },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};
