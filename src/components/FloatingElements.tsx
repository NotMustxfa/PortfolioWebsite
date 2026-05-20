import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useTheme } from '../context/ThemeContext';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
  interactive?: boolean;
  speed?: 'slow' | 'medium' | 'fast';
  blur?: boolean;
  pulseOnHover?: boolean;
  colors?: string[];
}

/**
 * Advanced Floating Elements Component
 * Physics-based floating particles with optional interactivity
 * GPU-optimized for smooth 60fps animations
 */
export const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 20,
  className = '',
  interactive = true,
  speed = 'medium',
  blur = false,
  pulseOnHover = true,
  colors,
}) => {
  const { config } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number>(0);
  const mousePos = useMousePosition();
  const [hovering, setHovering] = useState(false);

  const speedMap = {
    slow: 0.3,
    medium: 0.6,
    fast: 1,
  };

  const defaultColors = colors || [
    config.primary,
    config.secondary,
    '#3B82F6',
    '#10B981',
    '#F59E0B',
  ];

  // Initialize floating elements
  useEffect(() => {
    elementsRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * speedMap[speed],
      vy: (Math.random() - 0.5) * speedMap[speed],
      size: Math.random() * 30 + 10,
      opacity: Math.random() * 0.5 + 0.2,
      color: defaultColors[Math.floor(Math.random() * defaultColors.length)],
      rotation: Math.random() * 360,
    }));
  }, [count, speed, defaultColors]);

  // Physics animation loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      elementsRef.current.forEach((element) => {
        // Update position
        element.x += element.vx;
        element.y += element.vy;

        // Bounce off walls with friction
        if (element.x < 0 || element.x > window.innerWidth) {
          element.vx *= -0.95;
          element.x = Math.max(0, Math.min(window.innerWidth, element.x));
        }
        if (element.y < 0 || element.y > window.innerHeight) {
          element.vy *= -0.95;
          element.y = Math.max(0, Math.min(window.innerHeight, element.y));
        }

        // Apply gravity
        element.vy += 0.1;

        // Mouse interaction
        if (interactive && mousePos) {
          const dx = mousePos.x - element.x;
          const dy = mousePos.y - element.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - distance) / 150;
            element.vx -= Math.cos(angle) * force * 0.3;
            element.vy -= Math.sin(angle) * force * 0.3;

            if (pulseOnHover) {
              element.opacity = Math.min(1, element.opacity + 0.1);
            }
          }
        }

        // Update rotation
        element.rotation += element.vx * 2;

        // Damping
        element.vx *= 0.995;
        element.vy *= 0.995;

        // Fade opacity
        if (!interactive || !hovering) {
          element.opacity = Math.max(0.1, element.opacity - 0.001);
        }
      });

      // Render to DOM
      container.innerHTML = elementsRef.current
        .map(
          (el) =>
            `<div style="position: absolute; left: ${el.x}px; top: ${el.y}px; width: ${el.size}px; height: ${el.size}px; border-radius: 50%; background: ${el.color}; opacity: ${el.opacity}; transform: rotate(${el.rotation}deg) scale(1); box-shadow: 0 0 ${el.size}px ${el.color}; will-change: transform, opacity;"></div>`
        )
        .join('');

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [interactive, mousePos, pulseOnHover]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none ${blur ? 'backdrop-blur-sm' : ''} ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        zIndex: -1,
        filter: blur ? 'blur(1px)' : 'none',
      }}
    />
  );
};

/**
 * Orbiting Elements Component
 * Elements orbit around a center point with customizable speed
 */
interface OrbitingElementsProps {
  count?: number;
  radius?: number;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
  colors?: string[];
}

export const OrbitingElements: React.FC<OrbitingElementsProps> = ({
  count = 12,
  radius = 200,
  speed = 1,
  className = '',
  children,
  colors,
}) => {
  const { config } = useTheme();
  const defaultColors = colors || [
    config.primary,
    config.secondary,
    '#3B82F6',
  ];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Center content */}
      <div className="z-10 relative">{children}</div>

      {/* Orbiting elements */}
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: defaultColors[i % defaultColors.length],
              boxShadow: `0 0 15px ${defaultColors[i % defaultColors.length]}`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 / speed,
              repeat: Infinity,
              ease: 'linear',
              delay: (i / count) * 0.1,
            }}
            initial={{
              x: x,
              y: y,
            }}
          />
        );
      })}

      {/* Orbit rings */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 0 2px rgba(124, 58, 237, 0.3))' }}
      >
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke={config.primary}
          strokeWidth="1"
          opacity="0.2"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius * 0.7}
          fill="none"
          stroke={config.secondary}
          strokeWidth="1"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

/**
 * Floating Blob Component
 * Morphing blob with floating animation
 */
interface FloatingBlobProps {
  className?: string;
  color?: string;
  size?: number;
}

export const FloatingBlob: React.FC<FloatingBlobProps> = ({
  className = '',
  color,
  size = 300,
}) => {
  const { config } = useTheme();
  const blobColor = color || config.primary;

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: blobColor,
        opacity: 0.1,
        zIndex: 0,
      }}
      animate={{
        scale: [1, 1.2, 0.8, 1],
        borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '70% 30% 66% 33% / 33% 66% 33% 67%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default FloatingElements;
