import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  vx?: number;
  vy?: number;
  life: number;
}

interface RippleEffect {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const idCounterRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rippleCounterRef = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const { mode } = useTheme();
  
  const primaryColor = mode === 'creative' ? '#00FF41' : '#4A90E2';
  const rgbColor = mode === 'creative' ? 'rgba(0, 255, 65' : 'rgba(74, 144, 226';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      // Check if hovering interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target?.closest('button, a, [role="button"], input, textarea, .interactive') !== null;
      setIsHoveringInteractive(isInteractive);
      
      const now = Date.now();
      
      // Create particles at controlled interval
      if (now - lastTimeRef.current > 16) { // ~60fps
        const newParticles: Particle[] = [];
        
        // Main particle
        newParticles.push({
          id: idCounterRef.current++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1
        });

        // Secondary particles for more fill
        if (Math.random() > 0.5) {
          for (let i = 0; i < 2; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 20 + 5;
            
            newParticles.push({
              id: idCounterRef.current++,
              x: e.clientX + Math.cos(angle) * distance,
              y: e.clientY + Math.sin(angle) * distance,
              size: Math.random() * 2 + 1,
              vx: Math.cos(angle) * (Math.random() + 0.5),
              vy: Math.sin(angle) * (Math.random() + 0.5),
              life: 0.8
            });
          }
        }

        setParticles((prev) => {
          const updated = [...prev, ...newParticles];
          return updated.length > 100 ? updated.slice(-100) : updated;
        });

        lastTimeRef.current = now;
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create ripple effect on click
      setRipples((prev) => [
        ...prev,
        {
          id: rippleCounterRef.current++,
          x: e.clientX,
          y: e.clientY,
          createdAt: Date.now()
        }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Particle lifecycle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        return prev
          .map(p => ({
            ...p,
            life: Math.max(0, p.life - 0.08)
          }))
          .filter(p => p.life > 0);
      });

      // Clean up old ripples
      setRipples((prev) => {
        const now = Date.now();
        return prev.filter(r => now - r.createdAt < 600);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 9999 }}>
      {/* Ripple effects on click */}
      {ripples.map((ripple) => {
        const progress = (Date.now() - ripple.createdAt) / 600;
        return (
          <motion.div
            key={`ripple-${ripple.id}`}
            className="fixed rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 2,
              height: 2,
              border: `2px solid ${primaryColor}`,
              opacity: 1 - progress,
              transform: `translate(-50%, -50%) scale(${progress * 40})`,
              zIndex: 9999
            }}
          />
        );
      })}

      {/* Outer glow layer */}
      {particles.slice(0, 25).map((particle) => (
        <motion.div
          key={`glow-${particle.id}`}
          className="fixed rounded-full"
          style={{
            left: particle.x - particle.size * 1.5,
            top: particle.y - particle.size * 1.5,
            width: particle.size * 3,
            height: particle.size * 3,
            opacity: particle.life * 0.3,
            filter: 'blur(12px)',
            pointerEvents: 'none',
            zIndex: 9999,
            background: `linear-gradient(to right, ${primaryColor}, transparent)`
          }}
        />
      ))}

      {/* Main particles with glow */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${rgbColor}, ${particle.life}), ${rgbColor}, ${particle.life * 0.5}))`,
            boxShadow: `0 0 ${particle.size * 2}px ${rgbColor}, ${particle.life * 0.8}), 0 0 ${particle.size * 4}px ${rgbColor}, ${particle.life * 0.4})`,
            opacity: particle.life,
            pointerEvents: 'none',
            filter: `drop-shadow(0 0 2px ${rgbColor}, 0.6))`
          }}
          animate={{
            scale: [1, 0.6],
            opacity: [particle.life, 0]
          }}
          transition={{
            duration: 1.2,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Cursor dot with enhanced glow */}
      <motion.div
        className="fixed pointer-events-none"
        animate={{
          x: mousePositionRef.current.x - 4,
          y: mousePositionRef.current.y - 4
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          width: isHoveringInteractive ? 12 : 8,
          height: isHoveringInteractive ? 12 : 8,
          background: `radial-gradient(circle, ${primaryColor}, ${primaryColor.slice(0, -1)}, 0.5))`,
          borderRadius: '50%',
          boxShadow: `0 0 ${isHoveringInteractive ? 30 : 20}px ${primaryColor}, 0 0 ${isHoveringInteractive ? 60 : 40}px ${primaryColor.slice(0, -1)}, 0.6), 0 0 ${isHoveringInteractive ? 90 : 60}px ${primaryColor.slice(0, -1)}, 0.3)`,
          filter: `drop-shadow(0 0 ${isHoveringInteractive ? 12 : 8}px ${primaryColor.slice(0, -1)}, 0.8))`
        }}
      />

      {/* Trail connecting line effect */}
      {particles.length > 2 && (
        <svg
          className="fixed inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%', zIndex: 9999 }}
        >
          <motion.path
            d={particles
              .slice(Math.max(0, particles.length - 15))
              .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
              .join(' ')}
            stroke={mode === 'creative' ? 'rgba(0, 255, 65, 0.3)' : 'rgba(74, 144, 226, 0.3)'}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default CursorTrail;
