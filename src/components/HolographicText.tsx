import { motion } from 'framer-motion';
import React from 'react';

interface HolographicTextProps {
  children: string;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}

export const HolographicText: React.FC<HolographicTextProps> = ({ 
  children, 
  color, 
  className = '', 
  style = {} 
}) => {
  return (
    <motion.div className={`relative inline-block ${className}`} style={style}>
      {/* Base text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ color }}
      >
        {children}
      </motion.span>



      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-lg blur-lg pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}40, transparent)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rainbow chromatic aberration effect */}
      {[1, 2, 3].map((offset) => (
        <motion.span
          key={`aberration-${offset}`}
          className="absolute inset-0 pointer-events-none"
          style={{
            color: offset === 1 ? '#FF0080' : offset === 2 ? '#00FF80' : '#0080FF',
            opacity: 0.1,
            filter: `blur(${offset}px)`,
            textShadow: `${offset * 2}px ${offset}px 0px ${color}40`,
          }}
          animate={{
            x: [0, offset * 2, 0],
            y: [0, -offset * 2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HolographicText;
