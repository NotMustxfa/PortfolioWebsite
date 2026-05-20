/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'serif': ['Instrument Serif', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        /* Bold & Unconventional Palette */
        lime: {
          DEFAULT: '#00FF41',
          dark: '#00DD33',
          light: '#33FF66',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dark: '#E8DFD3',
        },
        black: {
          DEFAULT: '#000000',
          soft: '#0A0A0A',
        },
        warm: {
          gray: '#8B8680',
        },
        /* Base Colors - Keep white for fallback */
        slate: {
          900: '#0A0E27',
          800: '#1A1F3A',
          700: '#2D3142',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F8FAFC',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.1)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': `linear-gradient(45deg, #0F172A 25%, #1E293B 25%, #1E293B 50%, #0F172A 50%, #0F172A 75%, #1E293B 75%, #1E293B)`,
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 65, 0.3), 0 0 15px rgba(245, 241, 232, 0.1)' },
          '50%': { boxShadow: '0 0 10px rgba(0, 255, 65, 0.5), 0 0 25px rgba(245, 241, 232, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        typewriter: {
          '0%': { width: '0', borderRight: '3px solid #00FF41' },
          '99%': { borderRight: '3px solid #00FF41' },
          '100%': { width: '100%', borderRight: 'none' },
        },
        revealLine: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        strikethrough: {
          '0%': { textDecoration: 'none' },
          '50%': { textDecoration: 'line-through' },
          '100%': { textDecoration: 'none' },
        },
      },
      animation: {
        'fade-in': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-left': 'slideInLeft 0.6s ease-out',
        'slide-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s infinite',
        'typewriter': 'typewriter 0.8s steps(40, end)',
        'reveal-line': 'revealLine 0.6s ease-out',
        'strikethrough': 'strikethrough 0.6s ease-out',
      },
    },
  },
  plugins: [],
} 