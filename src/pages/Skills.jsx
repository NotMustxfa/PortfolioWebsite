import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  UserGroupIcon,
  SparklesIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  LightBulbIcon,
  ChartBarIcon,
  SquaresPlusIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import { personalInfo } from '../data/personal';

const skills = {
  'Programming Languages': {
    icon: CodeBracketIcon,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'C#', level: 80 },
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 85 },
      { name: 'SQL', level: 85 }
    ]
  },
  'Web Development': {
    icon: ServerIcon,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-purple-600',
    items: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'PHP', level: 80 }
    ]
  },
  'Data/Business Analytics': {
    icon: SquaresPlusIcon,
    color: 'bg-pink-500',
    gradient: 'from-pink-500 to-pink-600',
    items: [
      { name: 'Data Analytics', level: 80 },
      { name: 'Business Analytics', level: 80 },
      { name: 'Power BI', level: 75 },
      { name: 'Tableau', level: 70 },
      { name: 'Excel', level: 90 },
      { name: 'SQL', level: 85 }
    ]
  },
  'Mobile Development': {
    icon: DevicePhoneMobileIcon,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-green-600',
    items: [
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 85 }
    ]
  },
  'Cloud & Databases': {
    icon: CloudIcon,
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-indigo-600',
    items: [
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'SQL', level: 85 }
    ]
  },
  'Soft Skills': {
    icon: UserGroupIcon,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600',
    items: [
      { name: 'Problem-solving', level: 95 },
      { name: 'Teamwork', level: 90 },
      { name: 'Time Management', level: 85 }
    ]
  }
};

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

const SkillBar = ({ name, level, index, gradient }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="mb-5 group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400 font-medium">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const SkillCard = ({ name, Icon, level, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      <div className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full bg-primary/5 blur-xl"></div>
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{name}</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 + (index * 0.05) }}
            />
          </div>
        </div>
        <div className="flex-shrink-0 text-lg font-semibold text-primary">{level}%</div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  // Extract top skills for the highlight section
  const topSkills = [
    { name: 'JavaScript', level: 85, icon: CodeBracketIcon },
    { name: 'React', level: 90, icon: SquaresPlusIcon },
    { name: 'SQL', level: 85, icon: ServerIcon },
    { name: 'Data Analytics', level: 85, icon: ChartBarIcon },
    { name: 'Cloud Services', level: 75, icon: CloudIcon },
    { name: 'Problem-solving', level: 95, icon: LightBulbIcon },
  ];

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
              <h2 className="text-primary font-medium">My expertise</h2>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Technical <span className="text-primary">Skills</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I have developed expertise in various technologies and methodologies, continuously expanding my skillset to deliver high-quality solutions.
            </p>
          </motion.div>

          {/* Top Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Highlighted Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  Icon={skill.icon}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Detailed Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {Object.entries(skills).map(([category, { icon: Icon, items, gradient }]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category}
                    </h2>
                  </div>
                  <div>
                    {items.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={index}
                        gradient={gradient}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-10 rounded-2xl shadow-soft border border-primary/10"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continuous Learning</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              I am constantly expanding my knowledge and refining my abilities in the ever-evolving field of technology. Currently exploring:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Machine Learning', icon: CpuChipIcon },
                { name: 'Data/Business Analytics', icon: ChartBarIcon },
                { name: 'Full Stack Development', icon: CodeBracketIcon }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="flex items-center gap-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm py-4 px-5 rounded-xl">
                    <div className="p-2 bg-white/30 dark:bg-gray-700/30 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 