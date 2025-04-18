import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  MapPinIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const experience = [
  {
    title: 'Flutter Developer Intern',
    company: 'Weboin',
    location: 'Vadodara, Gujarat',
    duration: 'Dec 2023 – Jan 2024',
    description: 'Worked as a Flutter developer intern, contributing to real-world mobile application projects.',
    responsibilities: [
      'Developed and maintained Flutter applications',
      'Collaborated with the team on feature implementation',
      'Worked with REST APIs and state management',
      'Participated in code reviews and testing',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git'],
    color: 'from-blue-500/20 to-blue-600/10'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

// For floating background elements
const floatingCircleVariants = {
  initial: { y: 0, opacity: 0.5 },
  animate: (i) => ({ 
    y: [0, -15, 0], 
    opacity: [0.5, 0.8, 0.5],
    transition: {
      y: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" },
      opacity: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" }
    }
  })
};

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <BriefcaseIcon className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                {exp.title}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <BuildingOfficeIcon className="h-4 w-4 text-primary" />
                <div className="text-lg text-primary font-medium">
                  {exp.company}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              <CalendarIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{exp.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPinIcon className="h-4 w-4 text-primary" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/30 dark:to-gray-800/30 p-6 rounded-xl mb-8 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {exp.description}
          </p>
        </div>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Key Responsibilities
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
            {exp.responsibilities.map((responsibility, i) => (
              <motion.li 
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <ArrowRightIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{responsibility}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CodeBracketIcon className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Technologies Used
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden pb-16">
        {/* Background decorative elements */}
        <div className="absolute top-60 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] opacity-60 dark:opacity-20" />
        <div className="absolute -bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] opacity-60 dark:opacity-20" />
        
        {/* Floating orbs */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`orb-${i}`}
            custom={i * 0.5}
            initial="initial"
            animate="animate"
            variants={floatingCircleVariants}
            className={`absolute hidden xl:block rounded-full blur-xl bg-primary/20 ${
              i === 1 ? 'top-20 right-40 w-16 h-16' : 
              i === 2 ? 'top-1/3 left-20 w-20 h-20' : 
              'bottom-40 right-20 w-12 h-12'
            }`}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <SparklesIcon className="h-5 w-5 text-primary" />
              <h2 className="text-primary font-medium">Professional journey</h2>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Work <span className="text-primary">Experience</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My professional journey and the valuable experiences that have shaped my skills and approach to software development.
            </p>
          </motion.div>
          
          {experience.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-10 relative"
            >
              {/* Timeline line (visible with multiple experiences) */}
              {experience.length > 1 && (
                <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-primary/20 dark:bg-primary/10"></div>
              )}
              
              {experience.map((exp, index) => (
                <ExperienceCard key={`${exp.company}-${index}`} exp={exp} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 text-center"
            >
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                <BriefcaseIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Building Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                Currently focusing on personal and academic projects while actively seeking professional opportunities.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
} 