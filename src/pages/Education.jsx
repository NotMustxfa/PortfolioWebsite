import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  CalendarIcon,
  MapPinIcon,
  SparklesIcon,
  CheckIcon,
  BookOpenIcon
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
    subjects: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web Development',
      'Object-Oriented Programming'
    ],
    color: 'from-indigo-500/20 to-indigo-600/10'
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

const EducationCard = ({ edu, index }) => {
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <AcademicCapIcon className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                {edu.degree}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <UserGroupIcon className="h-4 w-4 text-primary" />
                <div className="text-lg font-medium text-primary">
                  {edu.institution}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              <CalendarIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{edu.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              <MapPinIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{edu.location}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/30 dark:to-gray-800/30 p-6 rounded-xl mb-8 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {edu.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          {edu.achievements && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <TrophyIcon className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Achievements & Activities
                </h3>
              </div>
              <ul className="space-y-3">
                {edu.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
          
          {edu.subjects && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <BookOpenIcon className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Key Subjects
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {edu.subjects.map((subject, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg font-medium border border-blue-100 dark:border-blue-800/30"
                  >
                    {subject}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Education() {
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
              <h2 className="text-primary font-medium">Academic background</h2>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Education & <span className="text-primary">Learning</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              My academic journey and educational background that have provided me with a strong foundation in computer science and software development.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 relative"
          >
            {/* Timeline line (visible with multiple education entries) */}
            {education.length > 1 && (
              <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-primary/20 dark:bg-primary/10"></div>
            )}
            
            {education.map((edu, index) => (
              <EducationCard key={`${edu.degree}-${index}`} edu={edu} index={index} />
            ))}
          </motion.div>
          
          {/* Additional Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-10 rounded-2xl shadow-soft border border-primary/10"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/30 dark:bg-gray-800/30 rounded-lg">
                    <BookOpenIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Continuous Learning
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Beyond my formal education, I'm continuously expanding my knowledge through self-learning and online courses.
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Web Development Bootcamp',
                  'Advanced React & Redux',
                  'Flutter Development Masterclass',
                  'Data Structures & Algorithms'
                ].map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 dark:border-gray-700/30"
                  >
                    <div className="flex items-center gap-3">
                      <AcademicCapIcon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-gray-800 dark:text-gray-200">{course}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 