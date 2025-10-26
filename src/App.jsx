import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { initGA, trackPageView } from './utils/analytics';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaPhone, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './index.css';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Work = lazy(() => import('./components/Work'));
const Contact = lazy(() => import('./components/Contact'));
const SideNavigation = lazy(() => import('./components/SideNavigation'));
const ScrollButtons = lazy(() => import('./components/ScrollButtons'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  // Initialize Google Analytics
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  // Toggle language between EN, FR, and AR
  const toggleLanguage = useCallback((lang) => {
    if (lang && ['EN', 'FR', 'AR'].includes(lang)) {
      setCurrentLanguage(lang);
    } else {
      setCurrentLanguage(prev => {
        if (prev === 'EN') return 'FR';
        if (prev === 'FR') return 'AR';
        return 'EN';
      });
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        if (shouldBeDark) {
          document.documentElement.classList.add('dark');
          setDarkMode(true);
        } else {
          document.documentElement.classList.remove('dark');
          setDarkMode(false);
        }
      } catch (error) {
        console.error('Error initializing theme:', error);
      }
    };

    initializeTheme();
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle WhatsApp click
  const handleWhatsAppClick = useCallback((e) => {
    if (e) e.preventDefault();
    setShowWhatsAppModal(true);
  }, []);

  // Set up event listeners for modals
  useEffect(() => {
    const handleWhatsAppModalEvent = () => setShowWhatsAppModal(true);
    const handleTelegramModalEvent = () => setShowTelegramModal(true);

    window.addEventListener('openWhatsAppModal', handleWhatsAppModalEvent);
    window.addEventListener('openTelegramModal', handleTelegramModalEvent);
    
    return () => {
      window.removeEventListener('openWhatsAppModal', handleWhatsAppModalEvent);
      window.removeEventListener('openTelegramModal', handleTelegramModalEvent);
    };
  }, []);

  // Close modals
  const closeWhatsAppModal = () => setShowWhatsAppModal(false);
  const closeTelegramModal = () => setShowTelegramModal(false);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-white text-lg font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-red-50 z-50 p-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Something went wrong</h2>
          <p className="text-red-600 mb-6">An error occurred while loading the application. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300 relative">
      <Suspense fallback={<LoadingFallback />}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onWhatsAppClick={handleWhatsAppClick}
          currentLanguage={currentLanguage}
          toggleLanguage={toggleLanguage}
        />

        <SideNavigation />

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero currentLanguage={currentLanguage} />
                <About currentLanguage={currentLanguage} />
                <Skills currentLanguage={currentLanguage} />
                <Work currentLanguage={currentLanguage} />
                <Contact currentLanguage={currentLanguage} />
              </>
            } 
          />
        </Routes>

        <footer className="bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-800 dark:to-gray-700 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg">
              {currentLanguage === 'AR' 
                ? `سامر باهر رزق ${new Date().getFullYear()}`
                : `© ${new Date().getFullYear()} Samer Baher Rizk`
              }
            </p>
            <p className="text-gray-200 dark:text-gray-400 mb-6">
              {currentLanguage === 'FR' 
                ? 'Tous droits réservés.' 
                : currentLanguage === 'AR' 
                ? 'جميع الحقوق محفوظة' 
                : 'All rights reserved.'
              }
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/isamerrizq74"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/isamerrizq74"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/isamerrizq74"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/isamerrizq74"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="text-gray-300 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
              </button>
              <button
                onClick={() => setShowTelegramModal(true)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="h-6 w-6" />
              </button>
            </div>
          </div>
        </footer>

        {/* WhatsApp Modal */}
        <AnimatePresence>
          {showWhatsAppModal && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWhatsAppModal}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden w-full max-w-md mx-4"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {currentLanguage === 'AR' 
                        ? 'تواصل عبر واتساب' 
                        : 'Contact via WhatsApp'}
                    </h3>
                    <button
                      onClick={closeWhatsAppModal}
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                      aria-label="Close"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/50 p-3 rounded-full">
                        <FaWhatsapp className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {currentLanguage === 'AR' ? 'رقم الواتساب' : 'WhatsApp Number'}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">+20 106 529 0660</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href="https://wa.me/201065290660"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                        {currentLanguage === 'AR' ? 'فتح واتساب' : 'Open WhatsApp'}
                      </a>
                      <button
                        onClick={closeWhatsAppModal}
                        className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        {currentLanguage === 'AR' ? 'إلغاء' : 'Cancel'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Telegram Modal */}
        <AnimatePresence>
          {showTelegramModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={closeTelegramModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentLanguage === 'AR' 
                      ? 'تواصل معي على تيليجرام' 
                      : currentLanguage === 'FR' 
                      ? 'Contactez-moi sur Telegram' 
                      : 'Contact via Telegram'}
                  </h3>

                  <div className="flex items-start space-x-4 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl w-full mb-6">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                      <FaTelegram className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-left">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {currentLanguage === 'AR' ? 'اسم المستخدم: ' : 'Username: '}
                        </span>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">@isamerrizq74</span>
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {currentLanguage === 'AR' ? 'الرقم: ' : 'Number: '}
                        </span>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">01065290660</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
                    <a
                      href="https://t.me/isamerrizq74"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <FaTelegram className="w-5 h-5" />
                      {currentLanguage === 'AR' 
                        ? 'فتح تيليجرام' 
                        : currentLanguage === 'FR' 
                        ? 'Ouvrir Telegram' 
                        : 'Open Telegram'}
                    </a>
                    <button
                      onClick={closeTelegramModal}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      {currentLanguage === 'AR' 
                        ? 'إلغاء' 
                        : currentLanguage === 'FR' 
                        ? 'Annuler' 
                        : 'Cancel'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollButtons />
      </Suspense>
    </div>
  );
}

export default App;
