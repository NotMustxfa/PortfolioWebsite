import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  DocumentTextIcon,
  CameraIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import projects from '../data/projects';

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const screenshotVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Background element animations
const floatingShapeVariants = {
  initial: ({ delay = 0 }) => ({ 
    y: 0, 
    opacity: 0.5,
    rotate: 0 
  }),
  animate: ({ delay = 0 }) => ({ 
    y: [0, -15, 0], 
    opacity: [0.5, 0.7, 0.5],
    rotate: [0, 5, 0],
    transition: {
      y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay },
      opacity: { repeat: Infinity, duration: 5, ease: "easeInOut", delay },
      rotate: { repeat: Infinity, duration: 5, ease: "easeInOut", delay }
    }
  })
};

// Function to get technology color (same as in Projects.jsx)
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

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Projects
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const mainTech = project.technologies[0];
  const bgGradient = getTechColor(mainTech);

  return (
    <PageTransition>
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 dark:opacity-20" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-70 dark:opacity-20" />
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-40 right-10 w-16 h-16 rounded-full bg-primary/20 blur-xl hidden lg:block"
          custom={{ delay: 0 }}
          initial="initial"
          animate="animate"
          variants={floatingShapeVariants}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-secondary/20 blur-xl hidden lg:block"
          custom={{ delay: 1 }}
          initial="initial"
          animate="animate"
          variants={floatingShapeVariants}
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 font-medium group"
            >
              <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-soft backdrop-blur-sm relative"
            >
              {/* Subtle glow effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <div className={`bg-gradient-to-r ${bgGradient} py-12 px-8 relative overflow-hidden`}>
                {/* Decorative shapes in header */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 blur-md" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2 blur-sm" />
                
                <div className="relative z-10">
                  <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-sm">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 text-sm bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="flex flex-wrap gap-4 mb-12">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 hover:shadow-md"
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 hover:shadow-md"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      Live Demo
                    </a>
                  )}
                </div>
                
                <motion.div 
                  variants={sectionVariants}
                  className="mb-14"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <DocumentTextIcon className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Project Overview
                    </h2>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                </motion.div>
                
                {project.screenshots && project.screenshots.length > 0 && (
                  <motion.div
                    variants={sectionVariants}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <CameraIcon className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Project Screenshots
                      </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.screenshots.map((screenshot, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          variants={screenshotVariants}
                          className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 group hover:scale-[1.02]"
                        >
                          <img
                            src={screenshot}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetails; 