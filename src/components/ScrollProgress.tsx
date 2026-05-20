import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  color?: string;
}

export function ScrollProgress({ color = '#00ff00' }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-50"
      style={{
        width: `${progress}%`,
        backgroundColor: color,
        boxShadow: `0 0 20px ${color}80`
      }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
}
