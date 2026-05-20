import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useTheme } from '../context/ThemeContext';

interface AdvancedGlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'neon';
  blur?: number;
  glow?: boolean;
  interactive?: boolean;
  border?: boolean;
  borderColor?: string;
  hoverEffect?: boolean;
  shine?: boolean;
  onClick?: () => void;
}

/**
 * Advanced Glass Panel Component
 * Premium glassmorphism with real-time mouse tracking and effects
 * Includes glow, border, and interactive hover animations
 */
export const AdvancedGlassPanel: React.FC<AdvancedGlassPanelProps> = ({
  children,
  className = '',
  variant = 'light',
  blur = 15,
  glow = true,
  interactive = true,
  border = true,
  borderColor,
  hoverEffect = true,
  shine = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const mouse = useMousePosition();

  const variantStyles = {
    light: {
      bg: 'rgba(255, 255, 255, 0.08)',
      border: borderColor || 'rgba(255, 255, 255, 0.2)',
      glow: 'rgba(124, 58, 237, 0.2)',
    },
    dark: {
      bg: 'rgba(0, 0, 0, 0.3)',
      border: borderColor || 'rgba(255, 255, 255, 0.1)',
      glow: 'rgba(0, 255, 65, 0.1)',
    },
    neon: {
      bg: 'rgba(0, 255, 65, 0.05)',
      border: borderColor || 'rgba(0, 255, 65, 0.3)',
      glow: 'rgba(0, 255, 65, 0.3)',
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !interactive) return;

    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const style = variantStyles[variant];

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={{
        boxShadow: isHovering && glow
          ? `0 0 40px ${style.glow}, inset 0 0 40px ${style.glow}`
          : `0 0 20px ${style.glow}, inset 0 0 20px ${style.glow}`,
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Glassmorphism base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          background: style.bg,
          transition: 'all 0.4s ease',
        }}
      />

      {/* Border effect */}
      {border && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            border: `1px solid ${style.border}`,
            boxShadow: isHovering && glow
              ? `inset 0 0 20px ${style.glow}`
              : 'inset 0 0 10px rgba(255, 255, 255, 0.05)',
          }}
        />
      )}

      {/* Shine effect */}
      {shine && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at ${mousePos.x}px ${mousePos.y}px,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0) 50%
            )`,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover glow effect */}
      {hoverEffect && isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              800px at ${mouse?.x || 0}px ${mouse?.y || 0}px,
              ${style.glow},
              transparent 80%
            )`,
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}
    </motion.div>
  );
};

/**
 * Floating Glass Card Component
 * Advanced card with floating animation and glass effect
 */
interface FloatingGlassCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export const FloatingGlassCard: React.FC<FloatingGlassCardProps> = ({
  title,
  description,
  icon,
  className = '',
  onClick,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      }}
      className={`relative ${className}`}
    >
      <AdvancedGlassPanel
        variant="light"
        blur={15}
        glow={true}
        interactive={true}
        hoverEffect={true}
        className="p-6 rounded-2xl cursor-pointer"
        onClick={onClick}
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {icon && (
            <div className="mb-4 text-3xl">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-sm opacity-80">{description}</p>
          )}
        </motion.div>
      </AdvancedGlassPanel>
    </motion.div>
  );
};

/**
 * Glass Gradient Panel
 * Glass panel with animated gradient background
 */
interface GlassGradientPanelProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: string[];
}

export const GlassGradientPanel: React.FC<GlassGradientPanelProps> = ({
  children,
  className = '',
  gradientColors,
}) => {
  const { config } = useTheme();
  const colors = gradientColors || [config.primary, config.secondary];

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: `linear-gradient(
            135deg,
            ${colors[0]} 0%,
            ${colors[1]} 100%
          )`,
          backgroundSize: '200% 200%',
          opacity: 0.1,
        }}
      />

      {/* Glass layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

/**
 * 3D Glass Panel
 * Glass panel with 3D perspective effects
 */
interface Glass3DPanelProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
}

export const Glass3DPanel: React.FC<Glass3DPanelProps> = ({
  children,
  className = '',
  perspective = 1000,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientY - centerY) / (rect.height / 2);
    const y = (e.clientX - centerX) / (rect.width / 2);

    setRotationX(x * 5);
    setRotationY(y * 5);
  };

  const handleMouseLeave = () => {
    setRotationX(0);
    setRotationY(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: `${perspective}px` }}
      className={className}
    >
      <motion.div
        animate={{
          rotateX: rotationX,
          rotateY: rotationY,
        }}
        transition={{ duration: 0.3 }}
      >
        <AdvancedGlassPanel variant="light" blur={15} interactive={false}>
          {children}
        </AdvancedGlassPanel>
      </motion.div>
    </div>
  );
};

export default AdvancedGlassPanel;
