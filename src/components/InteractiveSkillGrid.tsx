import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface SkillItemProps {
  name: string;
  level: number; // 0-100
  category: string;
  color?: string;
}

interface InteractiveSkillGridProps {
  skills: SkillItemProps[];
}

export const SkillBar: React.FC<SkillItemProps> = ({
  name,
  level,
  category,
  color,
}) => {
  const { config } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const barColor = color || config.primary;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-30px' }}
      transition={{ duration: 0.5 }}
      className="mb-8 relative"
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <h4 style={{ color: config.text }} className="font-semibold text-sm tracking-wide">
            {name}
          </h4>
          <p style={{ color: config.textSecondary }} className="text-xs mt-1 font-medium">
            {category}
          </p>
        </div>
        <motion.span
          animate={{ opacity: isHovered ? 1 : 0.6, scale: isHovered ? 1.1 : 1 }}
          style={{ color: barColor }}
          className="font-bold text-sm"
        >
          {level}%
        </motion.span>
      </div>

      {/* Background bar */}
      <div
        style={{
          backgroundColor: `${config.primary}12`,
          borderRadius: config.borderRadius,
          overflow: 'hidden',
          height: '6px',
          position: 'relative',
        }}
      >
        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ margin: '-30px' }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: 'easeOut',
          }}
          style={{
            background: `linear-gradient(90deg, ${barColor}, ${config.secondary})`,
            height: '100%',
            borderRadius: config.borderRadius,
            boxShadow: isHovered ? `0 0 15px ${barColor}60, inset 0 0 10px ${barColor}40` : '0 0 8px ' + barColor + '30',
          }}
          className="transition-shadow duration-300"
        />
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{ backgroundColor: barColor }}
              initial={{
                opacity: 1,
                x: `${(level * 1.2)}%`,
                y: -4,
              }}
              animate={{
                opacity: 0,
                x: `${(level * 1.2) + (Math.random() - 0.5) * 40}%`,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export const InteractiveSkillGrid: React.FC<InteractiveSkillGridProps> = ({
  skills,
}) => {
  const { config } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(skills.map((s) => s.category))];
  const filteredSkills = selectedCategory
    ? skills.filter((s) => s.category === selectedCategory)
    : skills;

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setSelectedCategory(null)}
          style={{
            backgroundColor:
              selectedCategory === null ? config.primary : `${config.primary}20`,
            color:
              selectedCategory === null ? config.bg : config.primary,
            borderRadius: config.borderRadius,
            padding: '0.625rem 1.25rem',
            fontSize: config.fontSize.sm,
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            boxShadow: selectedCategory === null ? `0 0 20px ${config.primary}40` : 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="skill-ripple"
        >
          All Skills
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor:
                selectedCategory === category ? config.primary : `${config.primary}20`,
              color:
                selectedCategory === category ? config.bg : config.primary,
              borderRadius: config.borderRadius,
              padding: '0.625rem 1.25rem',
              fontSize: config.fontSize.sm,
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              boxShadow: selectedCategory === category ? `0 0 20px ${config.primary}40` : 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="skill-ripple"
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills display */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {filteredSkills.map((skill, idx) => (
          <SkillBar key={idx} {...skill} />
        ))}
      </motion.div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-30px' }}
        className="mt-12 grid grid-cols-3 gap-4"
      >
        {[
          {
            label: 'Total Skills',
            value: filteredSkills.length,
          },
          {
            label: 'Avg. Proficiency',
            value: `${Math.round(filteredSkills.reduce((sum, s) => sum + s.level, 0) / filteredSkills.length)}%`,
          },
          {
            label: 'Expert Level',
            value: filteredSkills.filter((s) => s.level >= 85).length,
          },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            style={{
              backgroundColor: config.bgSecondary,
              borderColor: config.primary,
              borderWidth: config.borderWidth,
              borderRadius: config.borderRadius,
              padding: config.spacing.md,
              textAlign: 'center',
            }}
          >
            <p style={{ color: config.textSecondary }} className="text-sm mb-2">
              {stat.label}
            </p>
            <p style={{ color: config.primary }} className="text-2xl font-bold">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InteractiveSkillGrid;
