import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Navrachana University',
    location: 'Vadodara, Gujarat',
    duration: '2023 - 2026 (Expected)',
    description: 'Currently pursuing BCA with a focus on software development and computer science fundamentals.',
    achievements: [
      'Maintaining excellent academic performance',
      'Active participant in coding competitions',
      'Member of the university tech club',
    ],
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

const EducationCard = ({ edu, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <AcademicCapIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
            {edu.degree}
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mt-1">
            <div className="flex items-center gap-1">
              <AcademicCapIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{edu.institution}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1">
              <MapPinIcon className="h-4 w-4 text-primary" />
              <span>{edu.location}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4 text-primary" />
              <span>{edu.duration}</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {edu.description}
      </p>
      
      {edu.achievements && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <TrophyIcon className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Achievements & Activities
            </h3>
          </div>
          <ul className="space-y-2">
            {edu.achievements.map((achievement, i) => (
              <motion.li 
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
              >
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Education() {
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
            <AcademicCapIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h1>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
} 