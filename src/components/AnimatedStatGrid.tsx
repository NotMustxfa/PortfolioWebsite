import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface StatMetric {
  value: string | number;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
}

interface StatGridProps {
  stats: StatMetric[];
}

export const AnimatedStatGrid: React.FC<StatGridProps> = ({ stats }) => {
  const { config } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: '-50px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        const colorValue = stat.color || config.primary;

        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative"
          >
            {/* Glowing background */}
            <motion.div
              className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: `${colorValue}40` }}
            />

            {/* Card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                backgroundColor: config.bgSecondary,
                borderColor: config.primary,
                borderWidth: config.borderWidth,
                borderRadius: config.borderRadius,
                padding: config.spacing.lg,
              }}
              className="relative z-10 h-full flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              {/* Icon with animation */}
              {Icon && (
                <motion.div
                  className="mb-4 p-3 rounded-lg"
                  style={{ backgroundColor: `${colorValue}20` }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div style={{ color: colorValue }}>
                    <Icon className="w-8 h-8" />
                  </div>
                </motion.div>
              )}

              {/* Value with counter animation */}
              <motion.div
                className="mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <p
                  style={{ color: colorValue }}
                  className="text-4xl font-bold"
                >
                  {stat.value}
                </p>
              </motion.div>

              {/* Label */}
              <motion.p
                style={{ color: config.textSecondary }}
                className="text-sm font-semibold"
              >
                {stat.label}
              </motion.p>

              {/* Animated bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                style={{ background: `linear-gradient(90deg, transparent, ${colorValue}, transparent)` }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AnimatedStatGrid;
