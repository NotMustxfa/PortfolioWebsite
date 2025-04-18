import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  UserIcon,
  AcademicCapIcon,
  SparklesIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import { personalInfo } from '../data/personal';

const interests = [
  { 
    icon: CodeBracketIcon, 
    title: 'Full Stack Development', 
    description: 'Building complete web applications with modern technologies like React, Node.js, and TypeScript',
    color: 'from-blue-500/20 to-blue-600/10'
  },
  { 
    icon: DevicePhoneMobileIcon, 
    title: 'Mobile App Development', 
    description: 'Creating mobile applications using Flutter and Dart',
    color: 'from-green-500/20 to-green-600/10'
  },
  { 
    icon: RocketLaunchIcon, 
    title: 'Game Development', 
    description: 'Developing engaging games using C# and other game development technologies',
    color: 'from-purple-500/20 to-purple-600/10'
  },
  { 
    icon: WrenchScrewdriverIcon, 
    title: 'Software Engineering', 
    description: 'Building robust and scalable software solutions',
    color: 'from-yellow-500/20 to-yellow-600/10'
  },
  { 
    icon: CommandLineIcon, 
    title: 'Management', 
    description: 'Leading and managing software development projects',
    color: 'from-red-500/20 to-red-600/10'
  }
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

// Background element animations
const floatingCircleVariants = {
  initial: { y: 0, opacity: 0.7 },
  animate: { 
    y: [0, -15, 0], 
    opacity: [0.7, 1, 0.7],
    transition: {
      y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
      opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" }
    }
  }
};

export default function About() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 dark:opacity-20" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-70 dark:opacity-20" />
        
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-60 right-20 w-16 h-16 rounded-full bg-primary/20 blur-xl hidden xl:block"
          initial="initial"
          animate="animate"
          variants={floatingCircleVariants}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-secondary/20 blur-xl hidden xl:block"
          initial="initial"
          animate="animate"
          variants={floatingCircleVariants}
          style={{ animationDelay: "1s" }}
        />
      
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <SparklesIcon className="h-5 w-5 text-primary" />
              <h2 className="text-primary font-medium">Get to know me</h2>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              About <span className="text-primary">Me</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate developer with a keen interest in creating digital experiences that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3 space-y-8"
            >
              <motion.div 
                variants={itemVariants} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Subtle decorative accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <UserIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Who I Am
                    </h2>
                  </div>
                  
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      I am a motivated and detail-oriented BCA student at {personalInfo?.education?.institution || "a leading institution"} with a strong foundation in software development. I'm passionate about leveraging my technical expertise and problem-solving skills to develop innovative solutions.
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or engaging in continuous learning to stay at the cutting edge of software development.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <CodeBracketIcon className="h-6 w-6 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Technical Expertise
                    </h2>
                  </div>
                  
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      My technical toolkit includes a wide range of programming languages and technologies, from {personalInfo?.skills?.programming?.slice(0, 3).join(', ') || "JavaScript, TypeScript, React"} to modern frameworks like {personalInfo?.skills?.programming?.slice(8, 11).join(', ') || "Node.js, Express, MongoDB"}. I'm particularly experienced with cloud platforms such as {personalInfo?.skills?.cloudPlatforms?.join(', ') || "AWS, Google Cloud"}.
                    </p>
                  </div>
                  
                  {/* Key skills visual display */}
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Git'].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 rounded-xl flex items-center gap-2 border border-gray-100 dark:border-gray-600"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-8"
            >
              <motion.div 
                variants={itemVariants} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <LightBulbIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Approach
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm committed to continuous learning and professional growth, always seeking new challenges and opportunities to expand my skillset. My approach combines {personalInfo?.skills?.softSkills?.join(', ') || "problem-solving, creativity, attention to detail"} to deliver high-quality solutions.
                </p>
                
                {/* Visual representation of approach */}
                <div className="space-y-4 mt-6">
                  {[
                    { title: 'Problem Analysis', percentage: 95 },
                    { title: 'Design & Planning', percentage: 90 },
                    { title: 'Implementation', percentage: 85 },
                    { title: 'Testing & QA', percentage: 80 }
                  ].map((item) => (
                    <div key={item.title} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.title}</span>
                        <span className="text-sm font-medium text-primary">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all backdrop-blur-sm border border-primary/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <AcademicCapIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Current Focus
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Currently pursuing my BCA at {personalInfo?.education?.institution || "a leading institution"}, expected to graduate in {personalInfo?.education?.expectedGraduation || "2024"}. Focusing on building real-world projects while maintaining a strong academic foundation.
                </p>
                
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <ChartBarIcon className="h-5 w-5" /> 
                    <span>Currently working on portfolio projects</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Areas of Interest Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Areas of <span className="text-primary">Interest</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are the key areas that I'm passionate about and constantly exploring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className={`bg-gradient-to-br ${interest.color} dark:bg-opacity-20 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all backdrop-blur-sm border border-gray-100 dark:border-gray-700`}
                  >
                    <div className="h-14 w-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-sm mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {interest.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {interest.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 