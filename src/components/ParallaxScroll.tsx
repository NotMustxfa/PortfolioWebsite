import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
  blur?: boolean;
  scale?: boolean;
  rotate?: boolean;
}

/**
 * Advanced Parallax Scroll Component
 * Creates depth and dynamic motion with scroll-triggered parallax effects
 * Supports blur, scale, and rotation transformations
 */
export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 'medium',
  className = '',
  blur = false,
  scale = false,
  rotate = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [elementOffset, setElementOffset] = useState(0);

  const speedMap = {
    slow: 0.3,
    medium: 0.5,
    fast: 0.8,
  };

  // Get element position on mount
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setElementOffset(window.scrollY + rect.top);
    }
  }, []);

  // Transform values based on scroll
  const blurAmount = useTransform(
    scrollY,
    [elementOffset - 500, elementOffset, elementOffset + 500],
    [10, 0, 10]
  );

  const scaleAmount = useTransform(
    scrollY,
    [elementOffset - 500, elementOffset, elementOffset + 500],
    [0.8, 1, 1.2]
  );

  const rotateAmount = useTransform(
    scrollY,
    [elementOffset - 500, elementOffset, elementOffset + 500],
    [-15, 0, 15]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: useTransform(() => (scrollY.get() - elementOffset) * speedMap[speed]),
        ...(blur && { filter: blurAmount }),
        ...(scale && { scale: scaleAmount }),
        ...(rotate && { rotate: rotateAmount }),
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Advanced Multi-Layer Parallax
 * Creates complex depth effects with multiple layers moving at different speeds
 */
interface MultiLayerParallaxProps {
  layers: Array<{
    content: React.ReactNode;
    speed: number;
    className?: string;
  }>;
  className?: string;
}

export const MultiLayerParallax: React.FC<MultiLayerParallaxProps> = ({
  layers,
  className = '',
}) => {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerOffset, setContainerOffset] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerOffset(window.scrollY + rect.top);
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${layer.className || ''}`}
          style={{
            y: useTransform(
              scrollY,
              [containerOffset - 500, containerOffset + 500],
              [0, -layer.speed * 100]
            ),
          }}
        >
          {layer.content}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Parallax Image Component
 * Optimized for background images with parallax effect
 */
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  height?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  height = 'h-96',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOffset(window.scrollY + rect.top);
    }
  }, []);

  const y = useTransform(scrollY, [offset - 300, offset + 300], [80, -80]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${height} ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

/**
 * Scroll-Triggered Scale Component
 * Elements scale in/out based on scroll position
 */
interface ScrollScaleProps {
  children: React.ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
}

export const ScrollScale: React.FC<ScrollScaleProps> = ({
  children,
  className = '',
  minScale = 0.8,
  maxScale = 1.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOffset(window.scrollY + rect.top);
    }
  }, []);

  const scale = useTransform(
    scrollY,
    [offset - 500, offset, offset + 500],
    [minScale, 1, maxScale]
  );

  return (
    <motion.div ref={ref} className={className} style={{ scale }}>
      {children}
    </motion.div>
  );
};

export default ParallaxScroll;
