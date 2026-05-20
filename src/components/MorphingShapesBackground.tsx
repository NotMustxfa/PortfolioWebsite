import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface MorphingShapesBackgroundProps {
  className?: string;
  count?: number;
  colors?: string[];
  speed?: 'slow' | 'medium' | 'fast';
  opacity?: number;
  blur?: boolean;
}

/**
 * Morphing Shapes Background Component
 * Creates animated, morphing geometric shapes in the background
 * Perfect for hero sections and visual depth
 */
export const MorphingShapesBackground: React.FC<MorphingShapesBackgroundProps> = ({
  className = '',
  count = 5,
  colors,
  speed = 'medium',
  opacity = 0.1,
  blur = true,
}) => {
  const { config } = useTheme();
  const defaultColors = colors || [
    config.primary,
    config.secondary,
    '#3B82F6',
    '#10B981',
  ];

  const speedMap = {
    slow: 12,
    medium: 8,
    fast: 4,
  };

  const morphVariants = {
    animate: () => ({
      borderRadius: [
        '60% 40% 30% 70% / 60% 30% 70% 40%',
        '30% 60% 70% 40% / 50% 60% 30% 60%',
        '70% 30% 66% 33% / 33% 66% 33% 67%',
        '60% 40% 30% 70% / 60% 30% 70% 40%',
      ],
      scale: [1, 1.1, 0.9, 1],
      x: [0, 100, -100, 0],
      y: [0, -100, 100, 0],
    }),
  };

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          variants={morphVariants}
          custom={i}
          animate="animate"
          transition={{
            duration: speedMap[speed],
            repeat: Infinity,
            ease: 'easeInOut',
            delay: (i / count) * 2,
          }}
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            background: defaultColors[i % defaultColors.length],
            opacity: opacity,
            filter: blur ? 'blur(80px)' : 'none',
            left: `${(i / count) * 100}%`,
            top: `${(i % 3) * 30}%`,
          }}
        />
      ))}
    </div>
  );
};

/**
 * Animated Grid Background
 * Creates animated grid patterns with perspective
 */
interface AnimatedGridBackgroundProps {
  className?: string;
  color?: string;
  opacity?: number;
  cellSize?: number;
}

export const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
  className = '',
  color,
  opacity = 0.05,
  cellSize = 50,
}) => {
  const { config } = useTheme();
  const gridColor = color || config.primary;

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }}>
      <svg className="w-full h-full" style={{ opacity }}>
        <defs>
          <pattern id="grid" width={cellSize} height={cellSize} patternUnits="userSpaceOnUse">
            <path
              d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
              fill="none"
              stroke={gridColor}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `linear-gradient(
            45deg,
            transparent 48%,
            ${gridColor} 49%,
            ${gridColor} 51%,
            transparent 52%
          )`,
          backgroundSize: `${cellSize * 2}px ${cellSize * 2}px`,
          opacity: opacity * 2,
        }}
      />
    </div>
  );
};

/**
 * Gradient Mesh Background
 * Creates animated gradient mesh similar to modern design tools
 */
interface GradientMeshBackgroundProps {
  className?: string;
  colors?: string[];
  speed?: number;
}

export const GradientMeshBackground: React.FC<GradientMeshBackgroundProps> = ({
  className = '',
  colors,
  speed = 1,
}) => {
  const { config } = useTheme();
  const meshColors = colors || [
    config.primary,
    config.secondary,
    '#3B82F6',
    '#10B981',
  ];

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: -1 }}>
      <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
          </filter>
        </defs>

        <motion.g filter="url(#noise)" opacity="0.2">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 600}
              r="300"
              fill={meshColors[i % meshColors.length]}
              animate={{
                cx: Math.random() * 1200,
                cy: Math.random() * 600,
              }}
              transition={{
                duration: 15 / speed,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

/**
 * Animated Lines Background
 * Creates flowing, animated lines across the background
 */
interface AnimatedLinesBackgroundProps {
  className?: string;
  color?: string;
  opacity?: number;
  count?: number;
}

export const AnimatedLinesBackground: React.FC<AnimatedLinesBackgroundProps> = ({
  className = '',
  color,
  opacity = 0.1,
  count = 8,
}) => {
  const { config } = useTheme();
  const lineColor = color || config.primary;

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: -1 }}>
      <svg className="w-full h-full" preserveAspectRatio="none">
        {Array.from({ length: count }).map((_, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={`${(i / count) * 100}%`}
            x2="100%"
            y2={`${(i / count) * 100}%`}
            stroke={lineColor}
            strokeWidth="2"
            opacity={opacity}
            animate={{
              x2: ['100%', '120%', '100%'],
              x1: ['0%', '-20%', '0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i / count) * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

/**
 * Radial Gradient Background
 * Creates animated radial gradients
 */
interface RadialGradientBackgroundProps {
  className?: string;
  color1?: string;
  color2?: string;
}

export const RadialGradientBackground: React.FC<RadialGradientBackgroundProps> = ({
  className = '',
  color1,
  color2,
}) => {
  const { config } = useTheme();
  const primary = color1 || config.primary;
  const secondary = color2 || config.secondary;

  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      initial={{
        background: `radial-gradient(circle at 20% 50%, ${primary}, transparent 50%), radial-gradient(circle at 80% 50%, ${secondary}, transparent 50%)`,
      }}
    />
  );
};

/**
 * Nebula Background
 * Creates cosmic nebula-like background effects
 */
interface NebulaBackgroundProps {
  className?: string;
  colors?: string[];
  intensity?: 'low' | 'medium' | 'high';
}

export const NebulaBackground: React.FC<NebulaBackgroundProps> = ({
  className = '',
  colors,
  intensity = 'medium',
}) => {
  const { config } = useTheme();
  const nebulaColors = colors || [
    config.primary,
    config.secondary,
    '#3B82F6',
    '#10B981',
  ];

  const intensityMap = {
    low: 0.05,
    medium: 0.15,
    high: 0.3,
  };

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      {/* Multiple nebula clouds */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: Math.random() * 600 + 300,
            height: Math.random() * 600 + 300,
            background: nebulaColors[i % nebulaColors.length],
            opacity: intensityMap[intensity] * (Math.random() * 0.5 + 0.5),
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default MorphingShapesBackground;
