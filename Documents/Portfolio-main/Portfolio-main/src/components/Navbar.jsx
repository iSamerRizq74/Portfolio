import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload, FiChevronDown, FiMoreHorizontal } from "react-icons/fi";
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ onWhatsAppClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const socialMenuRef = useRef(null);

  // Toggle dark mode with localStorage persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMobileDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Navigation items
  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "WORK", href: "#work" },
    { name: "CONTACT", href: "#contact" }
  ];

  // Handle WhatsApp click
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openWhatsAppModal'));
  };

  // Social links
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/iSamerRizq74",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/samer-baher-rizq-237a942b5/",
      label: "LinkedIn"
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      href: "https://facebook.com/iSamerRizq74",
      label: "Facebook"
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/isamerrizq74",
      label: "Instagram"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "#whatsapp",
      label: "WhatsApp",
      onClick: handleWhatsAppClick
    }
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

  // Toggle social menu
  const toggleSocialMenu = (e) => {
    e.stopPropagation();
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  // Close social menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(e.target)) {
        setIsSocialMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: 'none' },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      pointerEvents: 'none',
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  // Render navigation item with optional dropdown
  const renderNavItem = (item) => {
    if (!item.subItems) {
      return (
        <a
          href={item.href}
          className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors flex items-center ${activeSection === item.href.substring(1)
              ? "bg-blue-600/10 text-blue-500 dark:text-blue-400"
              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
            }`}
          onClick={() => {
            setActiveSection(item.href.substring(1));
            setIsMobileMenuOpen(false);
          }}
        >
          {item.name}
        </a>
      );
    }

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors flex items-center w-full justify-between ${activeSection === item.href.substring(1)
              ? "bg-blue-600/10 text-blue-500 dark:text-blue-400"
              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
            }`}
          onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
          aria-expanded={isMobileDropdownOpen}
          aria-haspopup="true"
        >
          {item.name}
          <FiChevronDown
            className={`ml-1 w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'transform rotate-180' : ''
              }`}
          />
        </button>

        <AnimatePresence>
          {isMobileDropdownOpen && (
            <motion.div
              className="mt-1 ml-4 pl-2 border-l-2 border-gray-200 dark:border-gray-700 space-y-1"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {item.subItems.map((subItem, idx) => (
                <a
                  key={idx}
                  href={subItem.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 rounded-md transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSection(subItem.href.substring(1));
                    setIsMobileDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {subItem.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm dark:shadow-gray-800/10"
      ref={mobileMenuRef}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              aria-label="Home"
            >
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
                <img 
                  src="/SBR1.png" 
                  alt="SBR Logo" 
                  className="h-full w-full object-cover" 
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {!item.subItems ? (
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeSection === item.href.substring(1)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      }`}
                    onClick={() => setActiveSection(item.href.substring(1))}
                  >
                    {item.name}
                  </a>
                ) : (
                  <div className="relative group" ref={dropdownRef}>
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center ${activeSection === item.href.substring(1)
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        }`}
                      onClick={() => setActiveSection(item.href.substring(1))}
                      aria-expanded={isMobileDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <FiChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                      {item.subItems.map((subItem, idx) => (
                        <a
                          key={idx}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
                          onClick={() => setActiveSection(subItem.href.substring(1))}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle, Social Menu and Resume */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center -space-x-1">
              {/* Theme Toggle and 9-Dot Menu Group */}
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
            
            {/* 9-Dot Menu */}
            <div className="relative" ref={socialMenuRef}>
              <button
                onClick={toggleSocialMenu}
                className="p-2.5 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                aria-label="Social media links"
              >
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="5" cy="5" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="19" cy="5" r="1" />
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="19" r="1" />
                  <circle cx="12" cy="19" r="1" />
                  <circle cx="19" cy="19" r="1" />
                </svg>
              </button>
              {isSocialMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 px-3 z-50 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        onClick={(e) => {
                          if (social.onClick) {
                            e.preventDefault();
                            social.onClick(e);
                          }
                          setIsSocialMenuOpen(false);
                        }}
                        target={social.label === 'WhatsApp' ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700/50 rounded-full transition-colors"
                        aria-label={social.label}
                      >
                        {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            </div>
            <a
              href="#"
              onClick={handleResumeDownload}
              className="ml-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center"
            >
              <FiDownload className="mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsMobileDropdownOpen(false);
              }}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.href} className="px-2 py-1">
                  {renderNavItem(item)}
                </div>
              ))}
            </div>

              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleResumeDownload(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </a>
              </div>

            {/* Theme Toggle */}
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-md transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
