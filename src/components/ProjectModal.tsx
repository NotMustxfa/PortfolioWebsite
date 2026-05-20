import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { config } = useTheme();

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
            style={{ backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
            onClick={onClose}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                backgroundColor: config.bgSecondary,
                borderColor: config.primary,
                borderWidth: config.borderWidth,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg cursor-pointer"
                style={{
                  backgroundColor: `${config.primary}15`,
                  borderWidth: config.borderWidth,
                  borderColor: config.primary,
                }}
              >
                <XMarkIcon
                  className="h-6 w-6"
                  style={{ color: config.primary }}
                />
              </motion.button>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 sm:p-8 lg:p-10"
              >
                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-4"
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: `${config.primary}20`,
                        color: config.primary,
                      }}
                    >
                      Featured Project
                    </span>
                  </motion.div>
                )}

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  style={{
                    fontSize: config.fontSize['2xl'],
                    fontWeight: 'bold',
                    color: config.text,
                    marginBottom: '1rem',
                  }}
                  className="text-2xl sm:text-3xl"
                >
                  {project.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    color: config.textSecondary,
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                  }}
                  className="text-base sm:text-lg"
                >
                  {project.description}
                </motion.p>

                {/* Long Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  style={{
                    color: config.textSecondary,
                    lineHeight: '1.8',
                    whiteSpace: 'pre-line',
                    marginBottom: '2rem',
                  }}
                >
                  {project.longDescription}
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3
                    style={{
                      color: config.text,
                      fontWeight: 'bold',
                      marginBottom: '0.75rem',
                    }}
                    className="font-semibold"
                  >
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, idx: number) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.03 }}
                        className="inline-block px-3 py-1 text-sm rounded-lg"
                        style={{
                          backgroundColor: config.bg,
                          borderColor: config.primary,
                          borderWidth: config.borderWidth,
                          color: config.textSecondary,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* GitHub Link */}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-semibold cursor-pointer"
                    style={{
                      backgroundColor: config.primary,
                      color: config.bg,
                    }}
                  >
                    View on GitHub
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
