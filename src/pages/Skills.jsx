import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import { personalInfo } from '../data/personal';

const skills = {
  'Programming Languages': {
    icon: CodeBracketIcon,
    items: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'C#', level: 80 },
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 85 }
    ]
  },
  'Web Development': {
    icon: ServerIcon,
    items: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'TypeScript', level: 80 }
    ]
  },
  'Mobile Development': {
    icon: ServerIcon,
    items: [
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 85 }
    ]
  },
  'Cloud & Databases': {
    icon: CloudIcon,
    items: [
      { name: 'AWS', level: 75 },
      { name: 'Google Cloud', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'SQL', level: 85 }
    ]
  },
  'Soft Skills': {
    icon: UserGroupIcon,
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

const SkillBar = ({ name, level, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="mb-6 group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary-dark"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Skills
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
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
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
} 