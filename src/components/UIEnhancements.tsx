import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface SectionDividerProps {
  variant?: 'wave' | 'gradient' | 'dots' | 'lines' | 'flow' | 'spiral' | 'particles';
  animated?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  animated = true,
}) => {
  const { config } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; opacity: number }>>([]);

  // Initialize particles for particle variant
  useEffect(() => {
    if (variant === 'particles' && animated) {
      setParticles(
        Array.from({ length: 30 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          opacity: Math.random() * 0.5 + 0.3,
        }))
      );
    }
  }, [variant, animated]);

  // Particle animation loop
  useEffect(() => {
    if (variant !== 'particles' || !animated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;

          if (newX < 0 || newX > 100) {
            newX = newX < 0 ? 100 : 0;
          }
          if (newY < 0 || newY > 100) {
            newY = newY < 0 ? 100 : 0;
          }

          return { ...p, x: newX, y: newY };
        })
      );

      particles.forEach((p) => {
        ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc((p.x / 100) * canvas.width, (p.y / 100) * canvas.height, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [variant, particles, animated]);

  if (variant === 'wave') {
    return (
      <div className="relative h-20 flex items-center justify-center overflow-hidden my-12">
        {animated ? (
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,50 Q300,0 600,50 T1200,50"
              fill="none"
              stroke={config.primary}
              strokeWidth="3"
              opacity="0.8"
              strokeDasharray="20"
              animate={{
                strokeDashoffset: [-20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M0,60 Q300,20 600,60 T1200,60"
              fill="none"
              stroke={config.secondary}
              strokeWidth="2"
              opacity="0.5"
              strokeDasharray="20"
              animate={{
                strokeDashoffset: [20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M0,45 Q300,80 600,45 T1200,45"
              fill="none"
              stroke={config.primary}
              strokeWidth="1"
              opacity="0.3"
              animate={{
                strokeDashoffset: [-40, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </svg>
        ) : (
          <div
            style={{
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${config.primary}, transparent)`,
              width: '100%',
            }}
          />
        )}
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <motion.div
        className="h-1 my-12 relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, transparent, ${config.primary}, ${config.secondary}, transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    );
  }

  if (variant === 'dots') {
    return (
      <motion.div
        className="flex justify-center gap-3 my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: '-50px' }}
      >
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full will-animate"
            style={{ backgroundColor: config.primary }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
              boxShadow: ['0 0 0px rgba(124, 58, 237, 0)', '0 0 10px rgba(124, 58, 237, 1)', '0 0 0px rgba(124, 58, 237, 0)'],
            }}
            transition={{
              duration: 2,
              delay: i * 0.12,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    );
  }

  if (variant === 'lines') {
    return (
      <div className="my-12">
        <svg viewBox="0 0 1200 100" className="w-full h-20" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1={i * 100}
              y1="20"
              x2={i * 100}
              y2="80"
              stroke={config.primary}
              strokeWidth="2"
              opacity="0.6"
              animate={{
                y1: [20, 10, 20],
                y2: [80, 90, 80],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === 'flow') {
    return (
      <div className="relative h-16 my-12 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 1200 60" className="w-full h-full absolute" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={100 + i * 200}
              cy="30"
              r="8"
              fill={config.primary}
              opacity="0.6"
              animate={{
                cx: [100 + i * 200, 1200 + i * 200],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
        <motion.div
          className="absolute h-0.5 w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${config.primary}, transparent)` }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    );
  }

  if (variant === 'spiral') {
    return (
      <div className="relative h-20 my-12 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${100 + i * 300},60 Q${150 + i * 300},20 ${200 + i * 300},60 T${300 + i * 300},60`}
              fill="none"
              stroke={config.primary}
              strokeWidth={3 - i}
              opacity={0.7 - i * 0.2}
              animate={{
                strokeDashoffset: [-30, 0],
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className="relative h-16 my-12 flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        />
      </div>
    );
  }

  return (
    <div className="my-12">
      <svg viewBox="0 0 1200 100" className="w-full h-20" preserveAspectRatio="none">
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={i}
            x1={i * 100}
            y1="20"
            x2={i * 100}
            y2="80"
            stroke={config.primary}
            strokeWidth="2"
            opacity="0.4"
            animate={{
              y1: [20, 10, 20],
              y2: [80, 90, 80],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </div>
  );
};


interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const { config } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const backdropBlur = {
    low: 'blur(5px)',
    medium: 'blur(10px)',
    high: 'blur(20px)',
  };

  return (
    <motion.div
      ref={panelRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-50px' }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: `${config.bg}${isHovered ? 'AA' : '80'}`,
        backdropFilter: backdropBlur[intensity],
        borderColor: isHovered ? config.primary : `${config.primary}40`,
        borderWidth: config.borderWidth,
        borderRadius: config.borderRadius,
        padding: config.spacing.lg,
      }}
      className={`transition-all duration-300 relative overflow-hidden ${className}`}
      whileHover={{
        boxShadow: `0 0 40px ${config.primary}50, inset 0 0 30px ${config.primary}20`,
      }}
    >
      {/* Animated background glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${config.primary}30, transparent 50%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}

      {/* Animated border glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            boxShadow: `inset 0 0 30px ${config.primary}30`,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Corner accents on hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${config.primary}40, transparent)`,
              borderRadius: config.borderRadius,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent, ${config.secondary}40)`,
              borderRadius: config.borderRadius,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  animated?: boolean;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  animated = true,
}) => {
  const { config } = useTheme();
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!animated) {
      setCount(end);
      return;
    }

    let startValue = 0;
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      startValue += 1;
      if (startValue <= end) {
        setCount(startValue);
      } else {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, animated]);

  return (
    <motion.span
      style={{
        color: config.primary,
        fontWeight: 'bold',
      }}
      animate={{
        textShadow: animated ? ['0 0 0px rgba(124, 58, 237, 0)', '0 0 20px rgba(124, 58, 237, 0.8)', '0 0 0px rgba(124, 58, 237, 0)'] : 'none',
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  );
};

// NEW: Animated Gradient Border
interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorder: React.FC<GradientBorderProps> = ({ children, className = '' }) => {
  const { config } = useTheme();

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        background: `linear-gradient(45deg, ${config.primary}, ${config.secondary})`,
        padding: '2px',
        borderRadius: config.borderRadius,
      }}
    >
      <div
        style={{
          background: config.bg,
          borderRadius: config.borderRadius,
          padding: '1rem',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

// NEW: Floating Orb
interface FloatingOrbProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  delay?: number;
}

export const FloatingOrb: React.FC<FloatingOrbProps> = ({
  size = 'medium',
  color,
  delay = 0,
}) => {
  const { config } = useTheme();
  const sizeMap = { small: '100px', medium: '200px', large: '300px' };

  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        backgroundColor: color || config.primary,
        opacity: 0.1,
      }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default { SectionDivider, GlassPanel, CountUp, GradientBorder, FloatingOrb };
