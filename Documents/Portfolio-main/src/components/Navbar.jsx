import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload, FiChevronDown } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Custom 9-dot grid icon
const NineDotsIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5" cy="5" r="2.5" />
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="19" cy="5" r="2.5" />
    <circle cx="5" cy="12" r="2.5" />
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="19" cy="12" r="2.5" />
    <circle cx="5" cy="19" r="2.5" />
    <circle cx="12" cy="19" r="2.5" />
    <circle cx="19" cy="19" r="2.5" />
  </svg>
);

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const socialMenuRef = useRef(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation items
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle resume download
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/SamerCV.pdf';
    link.download = 'SamerBaherRizk_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Social links
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/iSamerRizq74",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/samer-baher-rizq-237a942b5/",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      href: "https://facebook.com/iSamerRizq74",
      label: "Facebook",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/isamerrizq74",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      onClick: (e) => {
        e.preventDefault();
        window.dispatchEvent(new Event('openWhatsAppModal'));
        setIsSocialMenuOpen(false);
      },
      label: "WhatsApp",
    }
  ];

  // Toggle social menu
  const toggleSocialMenu = (e) => {
    e.stopPropagation();
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  // Close social menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target)) {
        setIsSocialMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-2 bg-gradient-to-r from-gray-800/95 to-gray-700/95 backdrop-blur-md border-b border-gray-600/30 shadow-lg' 
            : 'py-4 bg-gradient-to-r from-gray-800 to-gray-700 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="block">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                  <img src="/SBR1.png" alt="Logo" className="h-full w-full object-cover" />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors hover:bg-gray-600/30 rounded-lg"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Social and Theme */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2.5 text-gray-200 hover:text-white rounded-full hover:bg-gray-600/30 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
              </button>
              
              <div className="relative group" ref={socialMenuRef}>
                <button 
                  onClick={toggleSocialMenu}
                  className="p-2.5 text-gray-200 hover:text-white transition-colors rounded-full hover:bg-gray-600/30"
                  aria-label="Social links"
                >
                  <NineDotsIcon className="w-6 h-6" />
                </button>
                <AnimatePresence>
                  {isSocialMenuOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 bg-gray-700/95 backdrop-blur-md rounded-lg shadow-lg p-2 z-50 border border-gray-600/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex space-x-2">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-200 hover:text-white hover:bg-gray-600/30 rounded-full transition-colors"
                            onClick={social.onClick || (() => setIsSocialMenu(false))}
                            aria-label={social.label}
                          >
                            {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={handleResumeDownload}
                className="ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center"
              >
                <FiDownload className="mr-2" />
                Resume
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white rounded-md hover:bg-gray-700 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-20 left-0 right-0 bg-gray-800/95 backdrop-blur-md shadow-lg z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            ref={mobileMenuRef}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-700/50 mt-2">
                <div className="flex justify-center space-x-4 py-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col space-y-3 mt-3">
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-colors"
                  >
                    {darkMode ? (
                      <>
                        <FiSun className="w-5 h-5 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <FiMoon className="w-5 h-5 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      handleResumeDownload(e);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
