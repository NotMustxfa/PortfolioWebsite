import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import projects from '../data/projects';

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

// Function to get a consistent color based on technology
const getTechColor = (tech) => {
  const colors = {
    'React': 'from-blue-500 to-blue-600',
    'TypeScript': 'from-blue-400 to-blue-500',
    'JavaScript': 'from-yellow-400 to-yellow-500',
    'Web Development': 'from-indigo-500 to-indigo-600',
    'Database Management': 'from-green-500 to-green-600',
    'Analytics': 'from-purple-500 to-purple-600',
    'API Integration': 'from-red-500 to-red-600',
    'Location API': 'from-green-400 to-green-500',
    'Game Development': 'from-orange-500 to-orange-600',
    'C#': 'from-purple-400 to-purple-500'
  };
  
  return colors[tech] || 'from-primary to-primary-dark';
};

const ProjectCard = ({ project, index }) => {
  const mainTech = project.technologies[0];
  const bgGradient = getTechColor(mainTech);
  
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer h-full border border-gray-100 dark:border-gray-700 backdrop-blur-sm relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
        
        <div className={`h-24 bg-gradient-to-r ${bgGradient} p-6 flex flex-col justify-center relative overflow-hidden`}>
          {/* Animated decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 blur-md" />
          <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2 blur-sm" />
          
          <div className="flex justify-between items-center relative z-10">
            <span className="text-white font-medium text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
              {mainTech}
            </span>
            
            <span className="text-white/90 text-xs font-medium">
              {project.technologies.length > 1 ? `+${project.technologies.length - 1} more` : ''}
            </span>
          </div>
        </div>
        
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary hover:text-primary-dark transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary hover:text-primary-dark transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Projects() {
  // Separate featured and regular projects
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);
  const mainFeatured = featuredProjects[0];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70 dark:opacity-30" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-70 dark:opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 relative"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <SparklesIcon className="h-5 w-5 text-primary" />
              <h2 className="text-primary font-medium">Portfolio Showcase</h2>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              My Creative <span className="text-primary">Projects</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Explore my collection of projects that showcase my skills and expertise in different 
              areas of development. Each project represents a unique challenge and solution.
            </p>
            
            {/* Decorative floating elements */}
            <motion.div
              className="absolute -top-4 right-4 w-12 h-12 rounded-full bg-primary/30 blur-xl hidden md:block"
              initial="initial"
              animate="animate"
              variants={floatingCircleVariants}
            />
            <motion.div
              className="absolute top-20 right-20 w-8 h-8 rounded-full bg-secondary/30 blur-lg hidden md:block"
              initial="initial"
              animate="animate"
              variants={floatingCircleVariants}
              style={{ animationDelay: "1s" }}
            />
          </div>
        </motion.div>

        {/* Featured Project Section */}
        {mainFeatured && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Featured Project</h2>
            <div className="w-full mx-auto">
              <ProjectCard project={mainFeatured} index={0} />
            </div>
          </div>
        )}

        {/* Visual Separator */}
        <div className="my-12 flex items-center justify-center">
          <div className="w-full max-w-2xl border-t-4 border-primary/40" />
          <span className="mx-4 text-lg font-semibold text-primary/70">Other Projects</span>
          <div className="w-full max-w-2xl border-t-4 border-primary/40" />
        </div>

        {/* All Other Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative"
        >
          {regularProjects.concat(featuredProjects.slice(1)).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
} 