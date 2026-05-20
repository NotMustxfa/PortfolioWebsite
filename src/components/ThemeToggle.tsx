import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme, config } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center gap-2 font-bold transition-all overflow-hidden group"
      style={{
        padding: `${config.spacing.sm} ${config.spacing.md}`,
        borderRadius: config.borderRadius,
        borderWidth: config.borderWidth,
        borderColor: config.primary,
        color: config.primary,
        backgroundColor: `${config.primary}${mode === 'creative' ? '15' : '08'}`,
        fontSize: config.fontSize.sm,
        fontFamily: config.fontFamily,
        transitionDuration: config.transitionDuration,
        letterSpacing: mode === 'creative' ? '0.05em' : '0em'
      }}
    >
      {/* Background glow effect for creative mode */}
      {mode === 'creative' && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle, ${config.primary}30 0%, transparent 70%)`,
            transitionDuration: config.transitionDuration
          }}
          animate={{
            boxShadow: [
              `0 0 20px ${config.primary}40`,
              `0 0 40px ${config.primary}30`,
              `0 0 20px ${config.primary}40`
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
      )}

      {/* Smooth glow for professional mode */}
      {mode === 'professional' && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(45deg, transparent, ${config.primary}20, transparent)`,
            transitionDuration: config.transitionDuration
          }}
        />
      )}

      <motion.span
        key={mode}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        {mode === 'creative' ? '✦ Creative' : '◆ Professional'}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
