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

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-soft' 
        : 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-center h-24">
          <div className="hidden md:flex space-x-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5'
                  } px-6 py-3 rounded-lg text-lg font-medium relative group flex items-center gap-3 transition-all duration-200 hover:shadow-sm`}
                >
                  <Icon className={`h-6 w-6 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                      layoutId="navbar-underline"
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-primary p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-3 pb-4 space-y-2 bg-white dark:bg-dark shadow-soft rounded-b-xl">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className={`${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                      } block px-6 py-3.5 rounded-lg text-lg font-medium hover:bg-primary/5 transition-all duration-200 flex items-center gap-3`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className={`h-6 w-6 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
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