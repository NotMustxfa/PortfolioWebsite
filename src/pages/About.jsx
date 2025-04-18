import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  UserIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import { personalInfo } from '../data/personal';

const interests = [
  { 
    icon: CodeBracketIcon, 
    title: 'Full Stack Development', 
    description: 'Building complete web applications with modern technologies like React, Node.js, and TypeScript' 
  },
  { 
    icon: DevicePhoneMobileIcon, 
    title: 'Mobile App Development', 
    description: 'Creating mobile applications using Flutter and Dart' 
  },
  { 
    icon: RocketLaunchIcon, 
    title: 'Game Development', 
    description: 'Developing engaging games using C# and other game development technologies' 
  },
  { 
    icon: WrenchScrewdriverIcon, 
    title: 'Software Engineering', 
    description: 'Building robust and scalable software solutions' 
  },
  { 
    icon: CommandLineIcon, 
    title: 'Management', 
    description: 'Leading and managing software development projects' 
  }
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

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <UserIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Who I Am
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a motivated and detail-oriented BCA student at {personalInfo.education.institution} with a strong foundation in software development. I'm passionate about leveraging my technical expertise and problem-solving skills to develop innovative solutions.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CodeBracketIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Technical Expertise
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My technical toolkit includes a wide range of programming languages and technologies, from {personalInfo.skills.programming.slice(0, 3).join(', ')} to modern frameworks like {personalInfo.skills.programming.slice(8, 11).join(', ')}. I'm particularly experienced with cloud platforms such as {personalInfo.skills.cloudPlatforms.join(', ')}.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <RocketLaunchIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  My Approach
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm committed to continuous learning and professional growth, always seeking new challenges and opportunities to expand my skillset. My approach combines {personalInfo.skills.softSkills.join(', ')} to deliver high-quality solutions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <RocketLaunchIcon className="h-6 w-6 text-primary" />
                </div>
                Areas of Interest
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.title}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                            {interest.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {interest.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <AcademicCapIcon className="h-6 w-6 text-primary" />
                </div>
                Current Focus
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my BCA at {personalInfo.education.institution}, expected to graduate in {personalInfo.education.expectedGraduation}. Focusing on building real-world projects while maintaining a strong academic foundation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 