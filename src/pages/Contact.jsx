import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import PageTransition from '../components/PageTransition';

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

const ContactInfo = () => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -bottom-20 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -top-20 left-0 w-32 h-32 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/10 rounded-xl">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
        </div>
        
        <div className="space-y-8">
          <motion.a 
            href="mailto:mustafa.s.pitolwala@gmail.com"
            whileHover={{ x: 8, scale: 1.02 }}
            className="flex items-center gap-4 p-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <EnvelopeIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
              <div className="font-medium">mustafa.s.pitolwala@gmail.com</div>
            </div>
          </motion.a>
          
          <motion.a 
            href="tel:+919427000327"
            whileHover={{ x: 8, scale: 1.02 }}
            className="flex items-center gap-4 p-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <PhoneIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
              <div className="font-medium">+91 9427000327</div>
            </div>
          </motion.a>
          
          <motion.div 
            whileHover={{ x: 8, scale: 1.02 }}
            className="flex items-center gap-4 p-4 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <MapPinIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
              <div className="font-medium">Vadodara, Gujarat, India</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mustafa-pitolwala-6872472b2',
      username: 'mustafa-pitolwala-6872472b2',
      icon: (
        <svg className="h-5 w-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      bgColor: 'bg-[#0077B5]/10',
      hoverColor: 'hover:bg-[#0077B5]/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/NotMustxfa',
      username: 'NotMustxfa',
      icon: (
        <svg className="h-5 w-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      bgColor: 'bg-gray-200 dark:bg-gray-700',
      hoverColor: 'hover:bg-gray-300 dark:hover:bg-gray-600'
    }
  ];

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -bottom-20 left-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -top-20 right-0 w-32 h-32 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/10 rounded-xl">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 12C18 14.4853 15.9 16.5 12 16.5C8.1 16.5 6 14.4853 6 12C6 9.51472 8.1 7.5 12 7.5C15.9 7.5 18 9.51472 18 12Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M19.5 12C19.5 8.96243 16.2 6.5 12 6.5C7.8 6.5 4.5 8.96243 4.5 12C4.5 15.0376 7.8 17.5 12 17.5C16.2 17.5 19.5 15.0376 19.5 12Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 12C21 7.5 16.8 4 12 4C7.2 4 3 7.5 3 12C3 16.5 7.2 20 12 20C16.8 20 21 16.5 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Connect
          </h2>
        </div>
        
        <div className="space-y-5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`flex items-center gap-4 p-4 text-gray-700 dark:text-gray-300 transition-all duration-200 ${social.hoverColor} ${social.bgColor} rounded-xl`}
            >
              <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                {social.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 dark:text-gray-400">{social.name}</div>
                <div className="font-medium truncate">{social.username}</div>
              </div>
              <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400" />
            </motion.a>
          ))}

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Let's build something amazing together
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Contact() {
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
              <h2 className="text-primary font-medium">Get in touch</h2>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Let's <span className="text-primary">Connect</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Have a question or want to work together? Feel free to reach out through any of the channels below.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <ContactInfo />
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 