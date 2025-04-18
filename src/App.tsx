import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Experience from './pages/Experience.jsx';
import Certifications from './pages/Certifications.jsx';
import Contact from './pages/Contact.jsx';

// Background gradient patterns
const GradientBackground = () => (
  <div className="fixed inset-0 z-[-1] opacity-40 dark:opacity-20 overflow-hidden">
    <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-primary/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-secondary/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-purple-400/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-primary/5 rounded-full blur-[100px] transform translate-x-1/2 translate-y-1/2" />
  </div>
);

// Grid pattern for visual texture
const GridPattern = () => (
  <div className="fixed inset-0 z-[-2] opacity-30 dark:opacity-10">
    <div className="absolute inset-0 bg-grid-pattern" 
         style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} 
    />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-gray-100 relative">
        <GradientBackground />
        <GridPattern />
        
        <Navbar />
        <main className="pt-16 min-h-screen">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="relative py-12 overflow-hidden border-t border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-white/80 dark:bg-dark/80">
          <div className="absolute -top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                MP<span className="text-primary">.</span>
              </div>
              
              <div className="flex gap-6">
                {[
                  { name: 'GitHub', url: 'https://github.com/NotMustxfa' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mustafa-pitolwala-6872472b2' }
                ].map((item) => (
                  <a 
                    key={item.name} 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="text-gray-600 dark:text-gray-400 text-center md:text-right">
                <p>© {new Date().getFullYear()} Mustafa Pitolwala. All rights reserved.</p>
                <p className="text-sm mt-1">Designed & Built with passion</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 