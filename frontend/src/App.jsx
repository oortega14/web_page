import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';
import './i18n';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('apiKey');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Layout component for the main app with navigation and footer
const MainLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');

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
          {children(activeTab)}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

// Main content component based on active tab
const MainContent = ({ activeTab }) => {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-900 p-8 text-white">
              <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
              {/* Add your admin components here */}
            </div>
          </ProtectedRoute>
        } />
        <Route path="/*" element={
          <MainLayout>
            {(activeTab) => <MainContent activeTab={activeTab} />}
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;