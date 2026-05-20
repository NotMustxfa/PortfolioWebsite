import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const AnimatedHero: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { config, mode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-visible w-full"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Animated gradient overlays */}
      <motion.div
        key={`gradient-${mode}`}
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `radial-gradient(at 0% 0%, ${config.primary}15 0%, transparent 50%)`,
            `radial-gradient(at 100% 100%, ${config.primary}15 0%, transparent 50%)`,
            `radial-gradient(at 0% 0%, ${config.primary}15 0%, transparent 50%)`,
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default AnimatedHero;
