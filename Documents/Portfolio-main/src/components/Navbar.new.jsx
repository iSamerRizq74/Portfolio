import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload, FiChevronDown } from "react-icons/fi";
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

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

const Navbar = ({ onWhatsAppClick, darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const socialMenuRef = useRef(null);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileDropdownOpen(false);
      }
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target)) {
        setIsSocialMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
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
      className: "hover:bg-gray-800 hover:text-white"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/samer-baher-rizq-237a942b5/",
      label: "LinkedIn",
      className: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      href: "https://facebook.com/iSamerRizq74",
      label: "Facebook",
      className: "hover:bg-blue-700 hover:text-white"
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/isamerrizq74",
      label: "Instagram",
      className: "hover:bg-pink-600 hover:text-white"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "#whatsapp",
      label: "WhatsApp",
      onClick: onWhatsAppClick,
      className: "hover:bg-green-500 hover:text-white"
    }
  ];

  // Toggle social menu
  const toggleSocialMenu = (e) => {
    e.stopPropagation();
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const socialMenuVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.1 } }
  };

  // Render navigation item with optional dropdown
  const renderNavItem = (item) => {
    return (
      <a
        key={item.href}
        href={item.href}
        className={`block px-3 py-2 text-base font-medium rounded-md ${
          activeSection === item.href.substring(1)
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        }`}
        onClick={() => {
          setActiveSection(item.href.substring(1));
          setIsMobileMenuOpen(false);
        }}
      >
        {item.name}
      </a>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 bg-gray-800/95 backdrop-blur-md border-b border-gray-700/50' : 'py-4 bg-gray-900/95 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#home"
                onClick={() => setActiveSection("home")}
                aria-label="Home"
                className="flex items-center"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
                  <img
                    src="/SBR1.png"
                    alt="Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                    onClick={() => setActiveSection(item.href.substring(1))}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links and Resume - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-1">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={social.onClick}
                    className={`p-2 rounded-full text-gray-400 hover:text-white transition-colors ${social.className}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Resume Button */}
              <a
                href="#"
                onClick={handleResumeDownload}
                className="ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center"
              >
                <FiDownload className="mr-2" />
                Resume
              </a>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="flex items-center space-x-1">
              {/* Theme Toggle - Always visible */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none flex items-center justify-center"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <FiSun className="h-5 w-5" />
                ) : (
                  <FiMoon className="h-5 w-5" />
                )}
              </button>

              {/* Mobile menu button - Only visible on mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-800/95 backdrop-blur-md shadow-lg border-t border-gray-700/50"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            ref={mobileMenuRef}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.href} className="px-2 py-1">
                  {renderNavItem(item)}
                </div>
              ))}

              {/* Social Links and Resume */}
              <div className="pt-2 border-t border-gray-700/50 mt-2">
                <div className="flex justify-center space-x-4 py-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (social.onClick) {
                          e.preventDefault();
                          social.onClick(e);
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-full text-gray-400 hover:text-white transition-colors ${social.className}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

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

              {/* Theme Toggle - Removed from mobile menu as it's now in the navbar */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  </>
);

          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-800/95 backdrop-blur-md shadow-lg border-t border-gray-700/50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              ref={mobileMenuRef}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.href} className="px-2 py-1">
                    {renderNavItem(item)}
                  </div>
                ))}

                {/* Social Links and Resume */}
                <div className="pt-2 border-t border-gray-700/50 mt-2">
                  <div className="flex justify-center space-x-4 py-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (social.onClick) {
                            e.preventDefault();
                            social.onClick(e);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className={`p-2 rounded-full text-gray-400 hover:text-white transition-colors ${social.className}`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

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
                <div className="pt-4 border-t border-gray-700/50 mt-4">
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-colors"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
