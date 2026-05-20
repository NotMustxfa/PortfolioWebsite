import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  UserIcon,
  CodeBracketIcon,
  FolderIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

// ===== SIMPLIFIED NAVBAR - SCROLL-BASED NAVIGATION =====

interface NavigationItem {
  name: string;
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navigation: NavigationItem[] = [
  { name: 'About', id: 'about', icon: UserIcon },
  { name: 'Skills', id: 'skills', icon: CodeBracketIcon },
  { name: 'Projects', id: 'projects', icon: FolderIcon },
  { name: 'Contact', id: 'contact', icon: EnvelopeIcon },
];

// Custom button animation variants
const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
};

// Menu item animations
const menuItemVariants = {
  closed: { opacity: 0, y: -10 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

// Mobile menu animations
const mobileMenuVariants = {
  closed: { 
    opacity: 0, 
    height: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Scroll-to-section function
const scrollToSection = (sectionId: string) => {
  const refs = (window as any).scrollRefs;
  if (refs && refs[sectionId] && refs[sectionId].current) {
    refs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { mode, config } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed w-full z-50 transition-all"
      style={{
        backgroundColor: scrolled ? `${config.bg}F2` : `${config.bg}CC`,
        backdropFilter: mode === 'creative' ? 'blur(20px)' : 'blur(12px)',
        borderBottomColor: config.primary,
        borderBottomWidth: config.borderWidth,
        transitionDuration: config.transitionDuration
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div 
          className="flex items-center justify-between transition-all"
          style={{
            paddingTop: config.spacing.sm,
            paddingBottom: config.spacing.sm
          }}
        >
          {/* Logo - Links to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center relative group transition-all cursor-pointer"
            style={{
              fontSize: config.fontSize['3xl'],
              fontFamily: config.headingFamily,
              fontWeight: '700',
              color: config.text,
              background: 'none',
              border: 'none',
              padding: 0
            }}
          >
            M
            <span style={{ color: config.primary }}>P</span>
            <span style={{ color: config.textSecondary }}>.</span>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              style={{
                position: 'absolute',
                left: 0,
                top: '100%',
                backgroundColor: config.bg,
                borderColor: config.primary,
                borderWidth: config.borderWidth,
                color: config.primary,
                fontSize: config.fontSize.sm,
                padding: `${config.spacing.sm} ${config.spacing.md}`,
                borderRadius: config.borderRadius,
                opacity: 0,
                pointerEvents: 'none',
                marginTop: config.spacing.md,
                whiteSpace: 'nowrap',
                fontFamily: config.fontFamily,
                letterSpacing: mode === 'creative' ? '0.05em' : '0em'
              }}
              className="group-hover:opacity-100 transition-opacity"
            >
              Mustafa Pitolwala
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex items-center transition-all"
            style={{
              gap: mode === 'creative' ? '0.25rem' : '0.5rem'
            }}
          >
            {navigation.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  whileHover="hover"
                >
                  <motion.button
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="transition-all group relative flex items-center gap-1 rounded-none whitespace-nowrap cursor-pointer"
                    style={{
                      padding: `0.375rem 0.75rem`,
                      fontSize: config.fontSize.sm,
                      fontFamily: config.fontFamily,
                      fontWeight: mode === 'professional' ? '500' : '700',
                      color: config.text,
                      letterSpacing: mode === 'creative' ? '0.05em' : '0em',
                      transitionDuration: config.transitionDuration,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    whileHover={{ color: config.primary, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5 transition-all" />
                    <span className="hidden lg:inline">{item.name}</span>
                    
                    {/* Underline reveal effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 group-hover:w-full transition-all"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      style={{
                        background: config.primary,
                        transformOrigin: 'left',
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile menu button */}
          <div 
            className="flex items-center transition-all"
            style={{
              gap: config.spacing.md
            }}
          >
            <ThemeToggle />
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              type="button"
              className="md:hidden rounded-none transition-all cursor-pointer"
              style={{
                padding: config.spacing.sm,
                borderWidth: config.borderWidth,
                borderColor: 'transparent',
                color: config.text,
                background: 'none',
                border: 'none'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="overflow-hidden md:hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div 
            className="space-y-1 mx-2 mt-2 rounded-none transition-all"
            style={{
              backgroundColor: config.bg,
              borderWidth: config.borderWidth,
              borderColor: config.primary,
              padding: config.spacing.md
            }}
          >
            {navigation.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={menuItemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.button
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full transition-all rounded-none flex items-center gap-3 cursor-pointer text-left"
                    style={{
                      padding: `${config.spacing.sm} ${config.spacing.md}`,
                      fontSize: config.fontSize.sm,
                      fontFamily: config.fontFamily,
                      fontWeight: mode === 'professional' ? '500' : '700',
                      color: config.text,
                      backgroundColor: 'transparent',
                      letterSpacing: mode === 'creative' ? '0.05em' : '0em',
                      transitionDuration: config.transitionDuration,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    whileHover={{ color: config.primary, x: 5 }}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {item.name}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 