import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface ExperienceTimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
  isRight?: boolean;
  index?: number;
}

export const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({
  date,
  title,
  company,
  description,
  highlights,
  technologies,
  isRight = false,
  index = 0,
}) => {
  const { config } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex gap-8 mb-12 ${isRight ? 'flex-row-reverse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="flex-1 group" ref={cardRef} onMouseMove={handleMouseMove}>
        <motion.div
          style={{
            backgroundColor: config.bgSecondary,
            borderColor: isHovered ? config.primary : `${config.primary}40`,
            borderWidth: config.borderWidth,
            borderRadius: config.borderRadius,
            padding: config.spacing.lg,
          }}
          animate={{
            boxShadow: isHovered 
              ? `0 10px 40px ${config.primary}30, inset 0 0 30px ${config.primary}08` 
              : `0 4px 15px ${config.primary}10`,
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="transition-all relative overflow-hidden"
        >
          {/* Animated shimmer effect on hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: [0, 0.3, 0], x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                background: `linear-gradient(90deg, transparent, ${config.primary}20, transparent)`,
              }}
            />
          )}

          {/* Glow background that follows cursor */}
          <motion.div
            className="absolute inset-0 rounded-lg blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
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
            <motion.span
              animate={{ 
                color: isHovered ? config.primary : config.textSecondary,
                letterSpacing: isHovered ? '0.08em' : '0em'
              }}
              className="text-xs font-semibold uppercase tracking-wider"
            >
              {date}
            </motion.span>

            <h3 style={{ color: config.text }} className="text-lg font-bold mt-3 mb-1 leading-tight">
              {title}
            </h3>

            <p style={{ color: config.primary }} className="text-sm font-semibold mb-4 tracking-wide">
              {company}
            </p>

            <p style={{ color: config.textSecondary }} className="text-sm leading-relaxed mb-4">
              {description}
            </p>

            {highlights && highlights.length > 0 && (
              <div className="mb-4 space-y-2">
                {highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    style={{ color: config.textSecondary }}
                    className="text-xs list-disc ml-4 font-medium"
                  >
                    {highlight}
                  </motion.li>
                ))}
              </div>
            )}

            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-solid" style={{ borderColor: `${config.primary}20` }}>
                {technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.15, translateY: -2 }}
                    style={{
                      backgroundColor: `${config.primary}20`,
                      color: config.primary,
                      borderRadius: config.borderRadius,
                      fontSize: config.fontSize.xs,
                      padding: '0.25rem 0.75rem',
                      fontWeight: '600',
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        {/* Outer glow ring */}
        <motion.div
          animate={{
            scale: isHovered ? [1.5, 1.8, 1.5] : 1,
            opacity: isHovered ? [0.3, 0.1, 0.3] : 0,
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: config.primary,
            position: 'absolute',
            zIndex: 5,
            filter: 'blur(8px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Main dot */}
        <motion.div
          animate={{
            scale: isHovered ? 1.4 : 1,
            boxShadow: isHovered 
              ? `0 0 30px ${config.primary}90, 0 0 50px ${config.primary}40, inset 0 0 10px ${config.primary}60`
              : `0 0 15px ${config.primary}50`,
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 0.3 },
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
            boxShadow: { duration: 0.3 },
          }}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${config.primary}, ${config.secondary})`,
            border: `3px solid ${config.bg}`,
            position: 'relative',
            zIndex: 10,
            marginTop: '8px',
          }}
        />

        {/* Vertical line */}
        <motion.div
          style={{
            width: '3px',
            flex: 1,
            background: `linear-gradient(180deg, ${config.primary}60, ${config.primary}10, transparent)`,
            marginTop: '16px',
          }}
        />
      </div>
    </motion.div>
  );
};

interface ExperienceTimelineProps {
  items: Array<{
    date: string;
    title: string;
    company: string;
    description: string;
    highlights?: string[];
    technologies?: string[];
  }>;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline items */}
      {items.map((item, idx) => (
        <ExperienceTimelineItem
          key={idx}
          {...item}
          isRight={idx % 2 === 1}
          index={idx}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
