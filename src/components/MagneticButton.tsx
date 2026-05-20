import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  target,
  className = '',
  variant = 'primary',
}) => {
  const { config } = useTheme();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const pull = (1 - distance / maxDistance) * 15;
      setButtonPos({
        x: Math.cos(angle) * pull,
        y: Math.sin(angle) * pull,
      });
    } else {
      setButtonPos({ x: 0, y: 0 });
    }
  };

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      animate={{ x: buttonPos.x, y: buttonPos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setButtonPos({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      className={`
        relative px-6 py-3 rounded-lg font-semibold cursor-pointer overflow-hidden
        transition-all duration-300 ${className}
      `}
      style={{
        backgroundColor:
          variant === 'primary'
            ? config.primary
            : variant === 'secondary'
              ? config.secondary
              : 'transparent',
        color: variant === 'outline' ? config.primary : config.bg,
        border: variant === 'outline' ? `2px solid ${config.primary}` : 'none',
        boxShadow: isHovered
          ? `0 0 30px ${config.primary}60, inset 0 0 20px ${config.primary}20`
          : 'none',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Premium glow background layer */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${config.primary}30, transparent 70%)`,
          pointerEvents: 'none',
          filter: 'blur(1px)',
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{ opacity: isHovered ? 0.6 : 0.2 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${config.primary}40, transparent 80%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Ripple effect on hover */}
      {isHovered && (
        <>
          <motion.span
            className="absolute inset-0 rounded-lg"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              background: config.primary,
              top: '50%',
              left: '50%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <motion.span
            className="absolute inset-0 rounded-lg"
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            style={{
              background: config.primary,
              top: '50%',
              left: '50%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </>
      )}

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : ''}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="border-none bg-transparent p-0">
      {buttonContent}
    </button>
  );
};

export default MagneticButton;
