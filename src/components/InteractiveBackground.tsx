import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

export const InteractiveBackground: React.FC = () => {
  const { config, mode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));
    particlesRef.current = initialParticles;
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;

    const animate = () => {
      // Clear canvas completely for theme switch
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Clear canvas with fade effect
      const bgColor = mode === 'professional' ? `rgba(255, 255, 255, 0.05)` : `rgba(0, 0, 0, 0.05)`;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particlesRef.current.forEach((particle) => {
        // Cursor repulsion
        const dx = particle.x - mousePosRef.current.x;
        const dy = particle.y - mousePosRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 120;

        if (distance < repulsionRadius && distance > 0) {
          const angle = Math.atan2(dy, dx);
          const repulsionForce = (repulsionRadius - distance) / repulsionRadius * 0.8;
          particle.vx += Math.cos(angle) * repulsionForce;
          particle.vy += Math.sin(angle) * repulsionForce;
        }

        // Add gentle random drift to keep particles moving
        particle.vx += (Math.random() - 0.5) * 0.15;
        particle.vy += (Math.random() - 0.5) * 0.15;

        // Apply lighter damping
        particle.vx *= 0.97;
        particle.vy *= 0.97;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.fillStyle = `rgba(${parseInt(config.primary.slice(1, 3), 16)}, ${parseInt(config.primary.slice(3, 5), 16)}, ${parseInt(config.primary.slice(5, 7), 16)}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(${parseInt(config.primary.slice(1, 3), 16)}, ${parseInt(config.primary.slice(3, 5), 16)}, ${parseInt(config.primary.slice(5, 7), 16)}, ${(1 - distance / 150) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw cursor glow
      const gradient = ctx.createRadialGradient(mousePosRef.current.x, mousePosRef.current.y, 0, mousePosRef.current.x, mousePosRef.current.y, 100);
      gradient.addColorStop(0, `rgba(${parseInt(config.primary.slice(1, 3), 16)}, ${parseInt(config.primary.slice(3, 5), 16)}, ${parseInt(config.primary.slice(5, 7), 16)}, 0.1)`);
      gradient.addColorStop(1, `rgba(${parseInt(config.primary.slice(1, 3), 16)}, ${parseInt(config.primary.slice(3, 5), 16)}, ${parseInt(config.primary.slice(5, 7), 16)}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(mousePosRef.current.x - 100, mousePosRef.current.y - 100, 200, 200);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [config, mode]);

  // Handle scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="interactive-bg fixed inset-0 overflow-hidden"
      data-mode={mode}
      style={{
        backgroundColor: config.bg,
        zIndex: -10,
      }}
    >
      {/* Scroll progress indicator */}
      <div
        className="bg-scroll-indicator"
        style={{
          width: `${scrollProgress}%`,
          transition: 'width 0.1s linear',
        }}
      />

      {/* Particle network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

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
    </div>
  );
};

export default InteractiveBackground;
