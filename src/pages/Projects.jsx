import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';
import projects from '../data/projects';

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

const ProjectCard = ({ project, index }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
      >
        <div className="relative aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          {project.image && (
            <motion.img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="h-5 w-5" />
                <span>GitHub</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Projects() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h1>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
} 