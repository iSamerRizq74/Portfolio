import { useState, useEffect, useRef, useCallback } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollButtons = () => {
  const [currentSection, setCurrentSection] = useState('');
  const observer = useRef(null);
  const sections = useRef({});

  // Set up intersection observer to detect current section
  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id || 'footer');
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    // Add an initial check for the current section
    const checkInitialSection = () => {
      const hero = document.getElementById('hero');
      const contact = document.getElementById('contact');
      const footer = document.querySelector('footer');
      
      if (hero && window.scrollY < hero.offsetHeight) {
        setCurrentSection('hero');
      } else if (contact && contact.getBoundingClientRect().top <= window.innerHeight / 2) {
        setCurrentSection('contact');
      } else if (footer && footer.getBoundingClientRect().top <= window.innerHeight) {
        setCurrentSection('footer');
      }
    };

    // Set up the observer after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      sections.current = {
        hero: document.getElementById('hero'),
        contact: document.getElementById('contact'),
        footer: document.querySelector('footer')
      };

      Object.values(sections.current).forEach(section => {
        if (section) observer.current.observe(section);
      });

      // Initial check
      checkInitialSection();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer.current) {
        Object.values(sections.current).forEach(section => {
          if (section) observer.current.unobserve(section);
        });
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Show down arrow only in hero section
  const showDownArrow = currentSection === 'hero';
  
  // Show up arrow only in contact section or footer
  const showUpArrow = currentSection === 'contact' || currentSection === 'footer';
  
  // Only show the component in hero (for down arrow) or contact/footer (for up arrow)
  const isVisible = showDownArrow || showUpArrow;
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed right-4 sm:right-6 bottom-6 z-50">
      <div className="flex flex-col items-center space-y-3">
        {/* Down arrow - shows in hero section */}
        {showDownArrow && (
          <button
            onClick={scrollToBottom}
            className="p-2 bg-blue-600/90 dark:bg-blue-700/90 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Scroll down"
          >
            <FaArrowDown className="text-xl" />
          </button>
        )}
        
        {/* Up arrow - shows in contact/footer sections */}
        {showUpArrow && (
          <button
            onClick={scrollToTop}
            className="p-2 bg-blue-600/90 dark:bg-blue-700/90 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollButtons;
