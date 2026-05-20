import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CursorTrail from './components/CursorTrail';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import HomeUnified from './pages/HomeUnified.jsx';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import InteractiveBackground from './components/InteractiveBackground';
import './styles/effects.css';
import './styles/theme-transitions.css';
import './styles/advanced-animations.css';
import './styles/visual-enhancements.css';
import './styles/hero-animations.css';
import './styles/interactive-background.css';

// Wrapper to provide theme context to Background
// Component to handle scroll reset on route change
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { mode, config } = useTheme();

  // Update body background when theme changes
  useEffect(() => {
    document.body.style.backgroundColor = config.bg;
  }, [mode, config.bg]);

  return (
    <Router>
      <div 
        className="min-h-screen relative transition-all w-full overflow-visible"
        data-mode={mode}
        data-theme={mode}
        style={{
          color: config.text,
          fontFamily: config.fontFamily,
          transitionDuration: config.transitionDuration,
          backgroundColor: 'transparent',
        }}
      >
        <InteractiveBackground />
        {mode === 'creative' && <CursorTrail />}
        <ScrollProgress color={config.primary} />

        <Navbar />
        <main 
          className="pt-16 min-h-screen relative w-full overflow-visible"
          style={{
            letterSpacing: mode === 'creative' ? '0.05em' : '0em'
          }}
        >
          <ScrollToTopOnNavigate />
          <AnimatePresence mode="wait">
            <motion.div
              key="page-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-full overflow-visible"
            >
              <Routes>
                <Route path="/" element={<HomeUnified />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Floating Elements */}
        <ScrollToTop scrollThreshold={300} showLabel={true} />

        {/* Theme-aware Footer */}
        <footer 
          className="relative py-16 overflow-hidden transition-all"
          style={{
            backgroundColor: config.bgSecondary,
            borderColor: config.primary,
            transitionDuration: config.transitionDuration,
            fontFamily: config.fontFamily
          }}
        >
          <div className="container relative z-10">
            <div 
              className="grid gap-12 mb-8"
              style={{
                gridTemplateColumns: mode === 'professional' ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
                rowGap: config.spacing.lg
              }}
            >
              {/* Brand */}
              <div>
                <div 
                  className="font-bold mb-2 transition-all"
                  style={{
                    fontSize: config.fontSize['3xl'],
                    color: config.primary,
                    fontFamily: config.headingFamily,
                    fontWeight: mode === 'professional' ? '600' : '700'
                  }}
                >
                  M<span style={{ opacity: 0.5 }}>.</span>
                </div>
                <p 
                  style={{
                    color: config.textSecondary,
                    fontSize: config.fontSize.sm,
                    fontWeight: mode === 'professional' ? '400' : '500',
                    letterSpacing: mode === 'creative' ? '0.05em' : '0em'
                  }}
                >
                  Product Manager • Systems Thinker
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 
                  className="font-bold mb-4 transition-all"
                  style={{
                    color: config.primary,
                    fontSize: config.fontSize.lg,
                    fontFamily: config.headingFamily,
                    fontWeight: mode === 'professional' ? '600' : '700'
                  }}
                >
                  Navigation
                </h4>
                <div 
                  className="space-y-2 transition-all"
                  style={{
                    color: config.text,
                    fontSize: config.fontSize.sm
                  }}
                >
                  {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                    <p 
                      key={item} 
                      className="hover:opacity-70 transition-opacity cursor-pointer"
                      style={{
                        fontWeight: mode === 'professional' ? '400' : '500'
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 
                  className="font-bold mb-4 transition-all"
                  style={{
                    color: config.primary,
                    fontSize: config.fontSize.lg,
                    fontFamily: config.headingFamily,
                    fontWeight: mode === 'professional' ? '600' : '700'
                  }}
                >
                  Connect
                </h4>
                <div 
                  className="space-y-2 transition-all"
                  style={{
                    color: config.text,
                    fontSize: config.fontSize.sm
                  }}
                >
                  {[
                    { name: 'GitHub', url: 'https://github.com/NotMustxfa' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mustafa-pitolwala-6872472b2' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity block"
                      style={{
                        color: config.text,
                        fontWeight: mode === 'professional' ? '400' : '500'
                      }}
                    >
                      {item.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div 
              className="pt-8 flex flex-col md:flex-row justify-between items-center transition-all"
              style={{
                borderTopColor: config.accent,
                borderTopWidth: config.borderWidth,
                color: config.textSecondary,
                fontSize: config.fontSize.sm,
                gap: config.spacing.md
              }}
            >
              <p>© {new Date().getFullYear()} Mustafa Pitolwala. All rights reserved.</p>
              <p>Crafted with intention & powered by React</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App; 