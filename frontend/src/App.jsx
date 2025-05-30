import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import { Mail, Github, Linkedin } from 'lucide-react';
import './App.css';
import Footer from './components/Footer';
import './i18n';

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection />
            <AboutSection />
          </>
        );
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'blog':
        return <BlogSection />;
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="App min-h-screen bg-slate-900 text-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={activeTab !== 'home' ? 'pt-16' : ''}
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;