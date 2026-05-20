import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Hook to get inline CSS for theme-aware colors
 * Useful for dynamic colors that can't be handled with Tailwind classes
 */
export const useThemeColors = () => {
  const { config, mode, isDark } = useTheme();

  const styles = useMemo(() => ({
    // Primary color styles
    primaryBg: { backgroundColor: config.primary },
    primaryText: { color: config.primary },
    primaryBorder: { borderColor: config.primary, borderWidth: '2px' },
    
    // Secondary color styles
    secondaryBg: { backgroundColor: config.secondary },
    secondaryText: { color: config.secondary },
    secondaryBorder: { borderColor: config.secondary, borderWidth: '2px' },
    
    // Background styles
    bgPrimary: { backgroundColor: config.bg },
    bgSecondary: { backgroundColor: config.bgSecondary },
    bgTertiary: { backgroundColor: config.bgTertiary },
    
    // Text styles
    textPrimary: { color: config.text },
    textSecondary: { color: config.textSecondary },
    textTertiary: { color: config.textTertiary },
    
    // Accent styles
    accentBg: { backgroundColor: config.accent },
    accentStrongBg: { backgroundColor: config.accentStrong },
    
    // Icon background
    iconBg: {
      backgroundColor: config.primary,
      padding: '0.75rem',
      borderRadius: config.borderRadius,
    },
    
    // Card style
    card: {
      backgroundColor: config.bgSecondary,
      borderColor: config.primary,
      borderWidth: config.borderWidth,
      borderRadius: config.borderRadius,
      padding: config.spacing.md,
    },
    
    // Gradient backgrounds
    gradient: {
      background: `linear-gradient(135deg, ${config.gradientStart} 0%, ${config.gradientEnd} 100%)`,
    },
    
    // Shadow with theme color
    shadow: {
      boxShadow: `0 10px 30px ${config.shadowColor}`,
    },
    
    // Hover states
    hoverBorder: { borderColor: config.primary },
    
    // Specific theme colors for dynamic use
    accentHue: {
      primary: config.primary,
      secondary: config.secondary,
      text: config.text,
      bg: config.bg,
      bgSecondary: config.bgSecondary,
    }
  }), [config]);

  return {
    styles,
    config,
    mode,
    isDark,
    isProfessional: mode === 'professional',
    isCreative: mode === 'creative'
  };
};
