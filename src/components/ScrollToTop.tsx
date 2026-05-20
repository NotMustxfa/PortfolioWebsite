import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

interface ScrollToTopProps {
  scrollThreshold?: number;
  showLabel?: boolean;
}

export function ScrollToTop({
  scrollThreshold = 300,
  showLabel = true
}: ScrollToTopProps) {
  const { config } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercent = (scrolled / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-40"
        style={{
          background: `linear-gradient(90deg, ${config.primary}, ${config.secondary}, ${config.primary})`
        }}
        animate={{
          scaleX: scrollProgress / 100
        }}
        transition={{ ease: 'easeOut' }}
      />

      {/* Scroll to top button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-40 pointer-events-auto"
      >
        <motion.button
          onClick={handleScrollToTop}
          className="relative p-4 rounded-full font-bold text-lg transition-all duration-300 group"
          style={{
            backgroundColor: config.primary,
            color: config.bg,
            boxShadow: `0 10px 30px ${config.primary}33`
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: `0 0 30px ${config.primary}66, 0 0 0 2px ${config.bg}`
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${config.primary}`,
              opacity: 0.3,
              pointerEvents: 'none'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />

          {/* Button content */}
          <div className="relative flex items-center gap-2">
            <motion.div
              animate={{
                y: [0, -4, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <ArrowUpIcon className="w-6 h-6" />
            </motion.div>

            {showLabel && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="whitespace-nowrap overflow-hidden font-mono"
              >
                Back to top
              </motion.span>
            )}
          </div>

          {/* Ripple effect on click */}
          <style>{`
            @keyframes ripple {
              to {
                transform: scale(4);
                opacity: 0;
              }
            }
          `}</style>
        </motion.button>
      </motion.div>

      {/* Page scroll indicator (optional) */}
      <motion.div
        className="fixed left-8 bottom-8 z-40 text-xs font-mono opacity-50 pointer-events-none transition-colors duration-300"
        style={{ color: config.text }}
        animate={{
          opacity: isVisible ? 0.7 : 0.3
        }}
      >
        {Math.round(scrollProgress)}%
      </motion.div>
    </>
  );
}
