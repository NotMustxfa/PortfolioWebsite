import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  DocumentCheckIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';

const certifications = [
  {
    title: 'Android App Development',
    issuer: 'Technolook',
    date: '2023',
    skills: [
      'Android Development',
      'Java',
      'XML',
      'Android Studio',
      'Material Design',
      'SQLite',
      'REST APIs',
      'Firebase'
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

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <AcademicCapIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
              {cert.title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <BuildingOfficeIcon className="h-4 w-4 text-primary" />
              <div className="text-lg text-primary font-medium">
                {cert.issuer}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <CalendarIcon className="h-4 w-4 text-primary" />
            <span>{cert.date}</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-3">
          <CheckCircleIcon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Skills Covered
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Certifications() {
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
            Certifications
          </h1>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
} 