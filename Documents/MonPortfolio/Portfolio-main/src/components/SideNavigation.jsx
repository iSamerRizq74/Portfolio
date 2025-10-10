import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'work', 'contact'];
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
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
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
      {['about', 'skills', 'work', 'contact'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-blue-400'
          }`}
          aria-label={`Scroll to ${section} section`}
        />
      ))}
    </motion.div>
  );
};

export default SideNavigation;
