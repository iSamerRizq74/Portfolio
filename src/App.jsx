import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaPhone } from 'react-icons/fa';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import SideNavigation from './components/SideNavigation';
import ScrollButtons from './components/ScrollButtons';

console.log('App: Component initialized');

function App() {
  console.log('App: Rendering...');
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

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

  // Debug: Show current theme status
  useEffect(() => {
    const htmlClass = document.documentElement.classList;
    const isDark = htmlClass.contains('dark');
    console.log('Theme state:', {
      darkMode,
      htmlHasDarkClass: isDark,
      localStorageTheme: localStorage.getItem('theme'),
      prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches
    });
  }, [darkMode]);

  // Handle WhatsApp click
  const handleWhatsAppClick = useCallback((e) => {
    if (e) e.preventDefault();
    setShowWhatsAppModal(true);
  }, []);

  // Set up event listener for WhatsApp modal
  useEffect(() => {
    const handleWhatsAppModalEvent = () => {
      setShowWhatsAppModal(true);
    };

    window.addEventListener('openWhatsAppModal', handleWhatsAppModalEvent);
    return () => {
      window.removeEventListener('openWhatsAppModal', handleWhatsAppModalEvent);
    };
  }, []);

  // Handle Telegram modal
  useEffect(() => {
    const handleTelegramModalEvent = () => {
      setShowTelegramModal(true);
    };

    window.addEventListener('openTelegramModal', handleTelegramModalEvent);
    return () => {
      window.removeEventListener('openTelegramModal', handleTelegramModalEvent);
    };
  }, []);

  // Close modals
  const closeWhatsAppModal = () => {
    setShowWhatsAppModal(false);
  };

  const closeTelegramModal = () => {
    setShowTelegramModal(false);
  };

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

    // Initialize theme immediately
    initializeTheme();

    // Set a timeout to remove loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
          <div className="mt-6 p-4 bg-white rounded border border-red-200 text-left overflow-auto max-h-64">
            <pre className="text-xs text-red-800">
              {error.stack || error.message || JSON.stringify(error, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    console.log('App: Showing loading state');
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-white text-lg font-medium">Loading Portfolio...</p>
          <p className="text-gray-400 text-sm mt-2">If this takes too long, check the browser console</p>
        </div>
      </div>
    );
  }


  // Close modal
  const closeModal = () => {
    setShowWhatsAppModal(false);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300 relative">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onWhatsAppClick={handleWhatsAppClick}
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
      />

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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact via WhatsApp</h3>
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">WhatsApp Number</p>
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
                      Open WhatsApp
                    </a>
                    <button
                      onClick={closeWhatsAppModal}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      Cancel
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
                  {currentLanguage === 'AR' ? 'تواصل معي على تيليجرام' :
                    currentLanguage === 'FR' ? 'Contactez-moi sur Telegram' :
                      'Contact via Telegram'}
                </h3>

                <div className="flex items-start space-x-4 bg-blue-100 dark:bg-blue-900/50 p-4 rounded-xl w-full mb-6">
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
                    {currentLanguage === 'AR' ? 'فتح تيليجرام' :
                      currentLanguage === 'FR' ? 'Ouvrir Telegram' :
                        'Open Telegram'}
                  </a>
                  <button
                    onClick={closeTelegramModal}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    {currentLanguage === 'AR' ? 'إلغاء' :
                      currentLanguage === 'FR' ? 'Annuler' :
                        'Cancel'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SideNavigation />
      <ScrollButtons />
      <main className="bg-white dark:bg-gray-900">
        <section id="hero" className="bg-gray-100 dark:bg-gray-900">
          <Hero currentLanguage={currentLanguage} />
        </section>
        <div className="bg-white dark:bg-gray-800/60">
          <About currentLanguage={currentLanguage} />
        </div>
        <div className="bg-gray-100 dark:bg-gray-900">
          <Skills currentLanguage={currentLanguage} />
        </div>
        <div className="bg-white dark:bg-gray-800/60">
          <Work currentLanguage={currentLanguage} />
        </div>
        <div className="bg-gray-100 dark:bg-gray-900">
          <Contact currentLanguage={currentLanguage} />
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-800 dark:to-gray-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            {currentLanguage === 'AR'
              ? '© سامر باهر رزق ' + new Date().getFullYear()
              : `© ${new Date().getFullYear()} Samer Baher Rizk`}
          </p>
          <p className="text-gray-200 dark:text-gray-400 mb-6">
            {currentLanguage === 'FR' ? 'Tous droits réservés.' : currentLanguage === 'AR' ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/isamerrizq74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/isamerrizq74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/isamerrizq74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/isamerrizq74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('openWhatsAppModal'));
              }}
              className="text-gray-300 hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('openTelegramModal'));
              }}
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram className="h-6 w-6" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
