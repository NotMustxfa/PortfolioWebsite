import { motion } from 'framer-motion';
import { 
  ArrowDownIcon, 
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ArrowUpRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Animation variants
const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const heroTitleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const floatingCircleVariants = {
  initial: { y: 0, opacity: 0.5 },
  animate: { 
    y: [0, -15, 0], 
    opacity: [0.5, 0.8, 0.5],
    transition: {
      y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
      opacity: { repeat: Infinity, duration: 6, ease: "easeInOut" }
    }
  }
};

// Skill cards data
const skills = [
  { 
    icon: CodeBracketIcon, 
    name: 'Web Development',
    description: 'Building modern, responsive web applications'
  },
  { 
    icon: CommandLineIcon, 
    name: 'Backend Development',
    description: 'Creating robust server-side applications and APIs'
  },
  { 
    icon: CpuChipIcon, 
    name: 'Full Stack',
    description: 'End-to-end solutions from database to user interface'
  },
  { 
    icon: RocketLaunchIcon, 
    name: 'Problem Solving',
    description: 'Innovative solutions for complex challenges'
  }
];

// Animated gradient background
const GradientBg = () => (
  <div className="absolute -z-10 inset-0 overflow-hidden opacity-40 dark:opacity-20">
    <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
    <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px]" />
  </div>
);

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 relative overflow-hidden"
    >
      <GradientBg />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                Full Stack Developer
              </div>
              
              <motion.h1 
                variants={heroTitleVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">Mustafa Pitolwala</span>
                I build <span className="text-primary">digital</span> experiences
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Motivated and detail-oriented BCA student passionate about developing innovative tech solutions. Focused on creating seamless user experiences and robust applications.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-5 mb-10"
              >
                <Link
                  to="/projects"
                  className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 font-medium text-white transition-all duration-300 bg-primary rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary group"
                >
                  <span className="relative z-10">View Projects</span>
                  <ArrowUpRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                
                <Link
                  to="/contact"
                  className="relative inline-flex items-center justify-center px-6 py-3.5 font-medium text-gray-900 dark:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                  <span>Contact Me</span>
                </Link>
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-40 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl hidden lg:block"
                initial="initial"
                animate="animate"
                variants={floatingCircleVariants}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-secondary/20 blur-lg hidden lg:block"
                initial="initial"
                animate="animate"
                variants={floatingCircleVariants}
                style={{ animationDelay: "1s" }}
              />
            </motion.div>
            
            {/* Hero Image/Illustration */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute inset-10 bg-white dark:bg-gray-800 rounded-full shadow-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer flex flex-col items-center gap-2"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">Scroll</span>
            <ArrowDownIcon className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the key areas where I excel and bring value to every project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
} 