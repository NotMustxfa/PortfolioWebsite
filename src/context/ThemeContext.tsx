import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeMode = 'creative' | 'professional';

interface ThemeConfig {
  // Colors
  primary: string;
  primaryRgb: string;
  secondary: string;
  secondaryRgb: string;
  bg: string;
  bgSecondary: string;
  bgTertiary: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  accentStrong: string;
  
  // Typography
  fontFamily: string;
  headingFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  
  // Spacing & Layout
  borderRadius: string;
  borderWidth: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  // Animation
  animationIntensity: number;
  transitionDuration: string;
  glassOpacity: number;
  gradientStart: string;
  gradientEnd: string;
  shadowColor: string;
  
  // Layout Mode
  layoutMode: 'chaotic' | 'organized'; // visual arrangement style
  cardStyle: 'neon' | 'minimal'; // card appearance
}

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  isDark: boolean;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('themeMode');
    return (saved as ThemeMode) || 'professional';
  });

  const toggleTheme = () => {
    setMode(prev => {
      const newMode = prev === 'creative' ? 'professional' : 'creative';
      localStorage.setItem('themeMode', newMode);
      document.documentElement.setAttribute('data-theme', newMode);
      return newMode;
    });
  };

  // Set theme attribute on HTML element on mount and when mode changes
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, isDark: mode === 'professional', config: themeConfig[mode] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Theme configuration - COMPREHENSIVE
export const themeConfig: Record<ThemeMode, ThemeConfig> = {
  creative: {
    // Colors - Bold & Vibrant
    primary: '#00FF41',
    primaryRgb: '0, 255, 65',
    secondary: '#FFD700',
    secondaryRgb: '255, 215, 0',
    bg: '#000000',
    bgSecondary: '#0a0a0a',
    bgTertiary: '#151515',
    text: '#FFFAF0',
    textSecondary: '#B0B0B0',
    textTertiary: '#707070',
    accent: 'rgba(0, 255, 65, 0.15)',
    accentStrong: 'rgba(0, 255, 65, 0.35)',
    
    // Typography - Monospace & Bold
    fontFamily: '"IBM Plex Mono", monospace',
    headingFamily: '"Crimson Text", serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3rem',
    },
    
    // Spacing & Layout - Loose & Chaotic
    borderRadius: '0',
    borderWidth: '2px',
    spacing: {
      xs: '0.25rem',
      sm: '0.75rem',
      md: '1.5rem',
      lg: '2.5rem',
      xl: '4rem',
    },
    
    // Animation - Intense & Fast
    animationIntensity: 1,
    transitionDuration: '200ms',
    glassOpacity: 0.15,
    gradientStart: '#1a1a1a',
    gradientEnd: '#000000',
    shadowColor: 'rgba(0, 255, 65, 0.4)',
    
    // Layout
    layoutMode: 'chaotic',
    cardStyle: 'neon',
  },
  professional: {
    // Colors - Modern & Vibrant (Indigo + Rose + Violet Palette)
    primary: '#7C3AED',
    primaryRgb: '124, 58, 237',
    secondary: '#EC4899',
    secondaryRgb: '236, 72, 153',
    bg: '#FDFCFE',
    bgSecondary: '#FAF8FF',
    bgTertiary: '#F3EFFF',
    text: '#1E1B4B',
    textSecondary: '#6D28D9',
    textTertiary: '#7C3AED',
    accent: 'rgba(236, 72, 153, 0.12)',
    accentStrong: 'rgba(124, 58, 237, 0.2)',
    
    // Typography - Clean & Professional
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    headingFamily: '"Poppins", sans-serif',
    fontSize: {
      xs: '0.8125rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.0625rem',
      xl: '1.1875rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    
    // Spacing & Layout - Clean & Organized
    borderRadius: '12px',
    borderWidth: '1px',
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    
    // Animation - Smooth & Professional
    animationIntensity: 0.3,
    transitionDuration: '350ms',
    glassOpacity: 0.08,
    gradientStart: '#FAF8FF',
    gradientEnd: '#FDFCFE',
    shadowColor: 'rgba(124, 58, 237, 0.1)',
    
    // Layout
    layoutMode: 'organized',
    cardStyle: 'minimal',
  }
};
