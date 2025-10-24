import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Special case for the very top of the page - hero section
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        if (scrollPosition < heroBottom - 100) {
          setActiveSection('hero');
          return;
        }
      }

      // Check each section
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const nextElement = i < sections.length - 1 ? document.getElementById(sections[i + 1]) : null;
          const elementTop = element.offsetTop;
          const elementBottom = nextElement ? nextElement.offsetTop - 50 : elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && (i === sections.length - 1 || scrollPosition < elementBottom)) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // For hero section, scroll to the very top
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('hero');
        return;
      }

      // For other sections, use the existing logic
      const offset = -100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      // Update active section after a small delay to ensure smooth scrolling
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    }
  };

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {['hero', 'about', 'skills', 'work', 'contact'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-blue-400'
            }`}
          aria-label={`Scroll to ${section} section`}
        />
      ))}
    </motion.div>
  );
};

export default SideNavigation;
