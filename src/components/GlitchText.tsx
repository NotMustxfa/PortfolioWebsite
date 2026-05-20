import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  type?: 'glitch' | 'flicker' | 'shimmer';
  glitchColor1?: string;
  glitchColor2?: string;
}

/**
 * Advanced Glitch Text Component
 * Creates premium glitch/digital distortion effects on text
 * Perfect for hero sections and eye-catching headlines
 */
export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  intensity = 'medium',
  type = 'glitch',
  glitchColor1,
  glitchColor2,
}) => {
  const { config } = useTheme();
  const color1 = glitchColor1 || config.primary;
  const color2 = glitchColor2 || config.secondary;

  const intensityValues = {
    low: { duration: 2, delay: 0.1 },
    medium: { duration: 1.5, delay: 0.05 },
    high: { duration: 0.8, delay: 0.02 },
  };

  const charVariants = {
    glitch: (i: number) => ({
      initial: { opacity: 1, x: 0 },
      animate: {
        x: [0, -2, 2, -1, 1, 0],
        opacity: [1, 0.8, 1, 0.9, 1, 1],
        transition: {
          duration: intensityValues[intensity].duration,
          delay: i * intensityValues[intensity].delay,
          repeat: Infinity,
          repeatType: 'reverse' as const,
        },
      },
    }),
    flicker: (i: number) => ({
      initial: { opacity: 1 },
      animate: {
        opacity: [1, 0.3, 1, 0.8, 1],
        transition: {
          duration: 0.3,
          delay: i * 0.03,
          repeat: Infinity,
          repeatType: 'reverse' as const,
        },
      },
    }),
    shimmer: (i: number) => ({
      initial: { backgroundPosition: '0% 0%' },
      animate: {
        backgroundPosition: ['200% 0%', '-200% 0%'],
        transition: {
          duration: 2,
          delay: i * 0.05,
          repeat: Infinity,
          ease: 'linear',
        },
      },
    }),
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Glitch shadow effect layers */}
      {(type === 'glitch') && (
        <>
          <motion.div
            className="absolute inset-0 text-transparent pointer-events-none"
            style={{
              color: color1,
              filter: 'blur(0px)',
            }}
            animate={{
              x: [0, -3, 3, 0],
              opacity: [0, 0.5, 0, 0],
            }}
            transition={{
              duration: intensityValues[intensity].duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {text}
          </motion.div>
          <motion.div
            className="absolute inset-0 text-transparent pointer-events-none"
            style={{
              color: color2,
              filter: 'blur(0px)',
            }}
            animate={{
              x: [0, 3, -3, 0],
              opacity: [0, 0.5, 0, 0],
            }}
            transition={{
              duration: intensityValues[intensity].duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.1,
            }}
          >
            {text}
          </motion.div>
        </>
      )}

      {/* Main text with character-level animation */}
      <div className="flex">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={charVariants[type] as any}
            initial="initial"
            animate="animate"
            className={`relative inline-block ${
              type === 'shimmer' ? 'bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent' : ''
            }`}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      {/* Glow overlay */}
      <motion.div
        className="absolute inset-0 blur-lg pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${color1}, ${color2})`,
          opacity: 0.1,
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default GlitchText;
