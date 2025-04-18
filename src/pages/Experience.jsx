import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  MapPinIcon,
  CheckCircleIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';

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
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <BriefcaseIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
              {exp.title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <BuildingOfficeIcon className="h-4 w-4 text-primary" />
              <div className="text-lg text-primary font-medium">
                {exp.company}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <CalendarIcon className="h-4 w-4 text-primary" />
            <span>{exp.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <MapPinIcon className="h-4 w-4 text-primary" />
            <span>{exp.location}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {exp.description}
      </p>

      <motion.div 
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <CheckCircleIcon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Key Responsibilities
          </h3>
        </div>
        <ul className="space-y-2">
          {exp.responsibilities.map((responsibility, i) => (
            <motion.li 
              key={i}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
            >
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span>{responsibility}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <CodeBracketIcon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-primary/10 rounded-lg">
            <BriefcaseIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h1>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
} 