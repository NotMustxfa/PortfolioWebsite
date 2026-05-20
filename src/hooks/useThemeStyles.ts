import { CSSProperties } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Hook to generate theme-aware CSS properties
 * Simplifies creating components that respond to theme changes
 */
export const useThemeStyles = () => {
  const { mode, config } = useTheme();

  const styles = {
    // Common utility styles
    container: {
      backgroundColor: config.bg,
      color: config.text,
      fontFamily: config.fontFamily,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    card: {
      backgroundColor: config.bg,
      borderColor: config.primary,
      borderWidth: config.borderWidth,
      borderRadius: config.borderRadius,
      color: config.text,
      padding: config.spacing.md,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    button: {
      backgroundColor: config.bg,
      borderColor: config.primary,
      borderWidth: config.borderWidth,
      color: config.primary,
      fontFamily: config.fontFamily,
      padding: `${config.spacing.sm} ${config.spacing.md}`,
      borderRadius: config.borderRadius,
      cursor: 'pointer',
      transitionDuration: config.transitionDuration,
      fontWeight: mode === 'professional' ? '500' : '700',
      letterSpacing: mode === 'creative' ? '0.05em' : '0em'
    } as CSSProperties,

    primaryButton: {
      backgroundColor: config.primary,
      borderColor: config.primary,
      borderWidth: config.borderWidth,
      color: config.bg,
      fontFamily: config.fontFamily,
      padding: `${config.spacing.sm} ${config.spacing.md}`,
      borderRadius: config.borderRadius,
      cursor: 'pointer',
      transitionDuration: config.transitionDuration,
      fontWeight: mode === 'professional' ? '600' : '700',
      letterSpacing: mode === 'creative' ? '0.05em' : '0em'
    } as CSSProperties,

    heading: {
      fontFamily: config.headingFamily,
      color: config.text,
      fontWeight: mode === 'professional' ? '600' : '700',
      letterSpacing: mode === 'creative' ? '0.02em' : '-0.02em',
      transitionDuration: config.transitionDuration,
      textTransform: mode === 'creative' ? 'uppercase' : 'none'
    } as CSSProperties,

    text: {
      fontFamily: config.fontFamily,
      color: config.text,
      fontSize: config.fontSize.base,
      lineHeight: mode === 'creative' ? '1.7' : '1.6',
      letterSpacing: mode === 'creative' ? '0.05em' : '0em'
    } as CSSProperties,

    secondaryText: {
      fontFamily: config.fontFamily,
      color: config.textSecondary,
      fontSize: config.fontSize.sm,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    border: {
      borderColor: config.primary,
      borderWidth: config.borderWidth,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    accentBorder: {
      borderColor: config.accent,
      borderWidth: config.borderWidth,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    background: {
      backgroundColor: config.bgSecondary,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    glassEffect: {
      backgroundColor: `${config.bg}CC`,
      backdropFilter: mode === 'creative' ? 'blur(20px)' : 'blur(12px)',
      borderColor: config.primary,
      borderWidth: config.borderWidth,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    link: {
      color: config.primary,
      textDecoration: 'none',
      cursor: 'pointer',
      transitionDuration: config.transitionDuration,
      fontWeight: mode === 'professional' ? '500' : '600',
      letterSpacing: mode === 'creative' ? '0.05em' : '0em'
    } as CSSProperties,

    grid: {
      display: 'grid',
      gap: config.spacing.lg,
      transitionDuration: config.transitionDuration
    } as CSSProperties,

    gridAuto: {
      display: 'grid',
      gridTemplateColumns: mode === 'professional' ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: config.spacing.lg,
      transitionDuration: config.transitionDuration
    } as CSSProperties
  };

  return {
    styles,
    mode,
    config,
    isCreative: mode === 'creative',
    isProfessional: mode === 'professional'
  };
};

/**
 * Hook to get animation configuration based on theme
 */
export const useThemeAnimation = () => {
  const { mode, config } = useTheme();

  return {
    duration: parseInt(config.transitionDuration) || 200,
    durationMs: config.transitionDuration,
    animationIntensity: config.animationIntensity,
    isCreative: mode === 'creative',
    isProfessional: mode === 'professional',
    
    // Framer Motion variants based on theme
    containerVariants: {
      hidden: mode === 'creative' 
        ? { opacity: 0, y: 20 }
        : { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: config.animationIntensity * 0.4,
          staggerChildren: config.animationIntensity * 0.1
        }
      }
    },

    itemVariants: {
      hidden: mode === 'creative'
        ? { opacity: 0, x: -20 }
        : { opacity: 0, y: 10 },
      visible: (i?: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: (i ?? 0) * config.animationIntensity * 0.05
        }
      })
    }
  };
};
