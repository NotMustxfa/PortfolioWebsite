import { motion } from 'framer-motion';
import { 
  ArrowDownIcon, 
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skills = [
  { icon: CodeBracketIcon, name: 'Web Development' },
  { icon: CommandLineIcon, name: 'Backend Development' },
  { icon: CpuChipIcon, name: 'Full Stack' },
  { icon: RocketLaunchIcon, name: 'Problem Solving' }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Mustafa Pitolwala
            </motion.h1>
            <motion.h2 
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6"
            >
              Full Stack Developer & Software Engineer
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Motivated and detail-oriented BCA student passionate about developing innovative tech solutions.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-200 bg-primary rounded-lg group-hover:mt-0 group-hover:ml-0"></span>
                <span className="relative">View Projects</span>
              </Link>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-gray-900 dark:text-white transition-all duration-200 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-200 bg-gray-300 dark:bg-gray-700 rounded-lg group-hover:mt-0 group-hover:ml-0"></span>
                <span className="relative">Contact Me</span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <ArrowDownIcon className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 