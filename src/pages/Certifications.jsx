import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  CheckBadgeIcon,
  CalendarIcon,
  LinkIcon,
  SparklesIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const certifications = [
  {
    title: 'Android App Development',
    issuer: 'Technolook',
    issueDate: '2023',
    credentialURL: '#',
    description: 'Comprehensive training in Android application development covering core concepts and practical implementation.',
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

const CertificationCard = ({ cert, index }) => {
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
              <CheckBadgeIcon className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                {cert.title}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <BuildingOfficeIcon className="h-4 w-4 text-primary" />
                <div className="text-lg text-primary font-medium">
                  {cert.issuer}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              <CalendarIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{cert.issueDate}</span>
            </div>
            <motion.a 
              href={cert.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-primary hover:text-primary-dark"
            >
              <LinkIcon className="h-4 w-4" />
              <span className="font-medium">View Credential</span>
              <ArrowTopRightOnSquareIcon className="h-3 w-3" />
            </motion.a>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/30 dark:to-gray-800/30 p-6 rounded-xl mb-8 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {cert.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <DocumentTextIcon className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Skills Acquired
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Certifications() {
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
              <h2 className="text-primary font-medium">Professional development</h2>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Courses & <span className="text-primary">Certifications</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Professional certifications and courses I've completed to enhance my skills and stay updated with the latest technologies.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 relative"
          >
            {certifications.map((cert, index) => (
              <CertificationCard key={`${cert.title}-${index}`} cert={cert} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 