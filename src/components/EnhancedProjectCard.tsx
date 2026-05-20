import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface EnhancedProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  icon?: React.ComponentType<{ className?: string }>;
  metrics?: { label: string; value: string }[];
  onClick?: () => void;
}

export const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
  icon: Icon,
  metrics,
  onClick,
}) => {
  const { config } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationX = ((y - centerY) / rect.height) * 5;
    const rotationY = ((centerX - x) / rect.width) * 5;

    setRotation({ x: rotationX, y: rotationY });
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={onClick}
      style={{
        perspective: '1200px',
      }}
      className="cursor-pointer group"
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          transformStyle: 'preserve-3d',
          backgroundColor: config.bgSecondary,
          borderColor: isHovered ? config.primary : `${config.primary}40`,
          borderWidth: config.borderWidth,
          borderRadius: config.borderRadius,
          padding: config.spacing.lg,
        }}
        className="h-full transition-all duration-300 relative overflow-hidden"
      >
        {/* Animated shimmer effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: [0, 0.5, 0], x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              background: `linear-gradient(90deg, transparent, ${config.primary}30, transparent)`,
            }}
          />
        )}

        {/* Glow background that follows cursor */}
        <motion.div
          className="absolute inset-0 rounded-lg blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
          style={{
            backgroundColor: config.primary,
            left: isHovered ? `${mousePos.x}%` : '50%',
            top: isHovered ? `${mousePos.y}%` : '50%',
            width: '200px',
            height: '200px',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Border glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              boxShadow: `0 0 40px ${config.primary}50, inset 0 0 20px ${config.primary}20`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              {Icon && (
                <motion.div
                  animate={{
                    rotate: isHovered ? 360 : 0,
                    scale: isHovered ? 1.15 : 1,
                  }}
                  transition={{
                    rotate: { duration: 0.8, ease: 'easeInOut' },
                    scale: { duration: 0.3 },
                  }}
                  className="mb-3 p-2 rounded-lg inline-block"
                  style={{
                    backgroundColor: isHovered ? `${config.primary}25` : `${config.primary}10`,
                    color: config.primary,
                    transition: 'background-color 0.3s',
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              )}
              <motion.h3
                animate={{
                  color: isHovered ? config.primary : config.text,
                }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold mb-2"
              >
                {title}
              </motion.h3>
            </div>
          </div>

          {/* Description */}
          <motion.p
            animate={{
              color: isHovered ? config.textSecondary : config.textSecondary,
            }}
            className="text-sm leading-relaxed mb-4"
            style={{ color: config.textSecondary }}
          >
            {description}
          </motion.p>

          {/* Metrics if provided */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    backgroundColor: `${config.primary}15`,
                    borderRadius: config.borderRadius,
                  }}
                  className="p-3 cursor-pointer transition-all"
                >
                  <p style={{ color: config.primary }} className="text-xs font-semibold">
                    {metric.value}
                  </p>
                  <p style={{ color: config.textSecondary }} className="text-xs mt-1">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Technologies - Enhanced with stagger animation */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: `${config.primary}40`,
                  y: -3,
                }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.3,
                }}
                style={{
                  backgroundColor: isHovered ? `${config.primary}30` : `${config.primary}15`,
                  color: config.primary,
                  borderRadius: config.borderRadius,
                  fontSize: config.fontSize.xs,
                  padding: '0.25rem 0.75rem',
                  display: 'inline-block',
                }}
                className="font-semibold transition-colors duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 3 && (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                style={{ color: config.textSecondary }}
                className="text-xs py-1 cursor-pointer"
              >
                +{technologies.length - 3} more
              </motion.span>
            )}
          </div>

          {/* CTA Link - Enhanced animation */}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 8 }}
              style={{
                color: config.primary,
                fontSize: config.fontSize.sm,
                fontWeight: '600',
              }}
              className="inline-flex items-center gap-2 group/link hover:gap-3 transition-all"
            >
              <motion.span
                animate={{
                  background: isHovered
                    ? `linear-gradient(90deg, ${config.primary}, ${config.secondary})`
                    : 'none',
                  backgroundClip: 'text',
                }}
                className="inline-block"
              >
                Learn more
              </motion.span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0, rotate: isHovered ? 45 : 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EnhancedProjectCard;
