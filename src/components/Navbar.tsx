import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  UserIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  FolderIcon,
  BriefcaseIcon,
  DocumentCheckIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserIcon },
  { name: 'Education', href: '/education', icon: AcademicCapIcon },
  { name: 'Skills', href: '/skills', icon: CodeBracketIcon },
  { name: 'Projects', href: '/projects', icon: FolderIcon },
  { name: 'Experience', href: '/experience', icon: BriefcaseIcon },
  { name: 'Certifications', href: '/certifications', icon: DocumentCheckIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
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

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Force dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'dark:bg-dark/95 backdrop-blur-md shadow-soft py-2' 
        : 'dark:bg-dark/90 backdrop-blur-sm py-4'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold dark:text-white"
            >
              MP<span className="text-primary">.</span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, i) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  whileHover="hover"
                >
                  <Link
                    to={item.href}
                    className={`${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5'
                    } px-4 py-2 rounded-lg text-base font-medium relative group flex items-center gap-2 transition-all duration-200`}
                  >
                    <Icon className={`h-5 w-5 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                        layoutId="navbar-underline"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">            
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              type="button"
              className="dark:text-gray-300 p-2 rounded-lg dark:bg-gray-800 transition-colors"
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 shadow-md rounded-b-xl mx-4 mt-2 border border-gray-100 dark:border-gray-700">
              {navigation.map((item, i) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={menuItemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.href}
                      className={`${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                      } block px-4 py-2.5 rounded-lg text-base font-medium hover:bg-primary/5 transition-all duration-200 flex items-center gap-2`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 