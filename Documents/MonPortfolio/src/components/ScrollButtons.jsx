import { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Check if we're at the bottom of the page
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    setAtBottom(isAtBottom);
  };

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

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 z-50">
      <div className="relative">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600/90 dark:bg-blue-700/90 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Scroll to top"
            style={{
              opacity: atBottom ? 1 : 0.5,
              transform: atBottom ? 'scale(1.05)' : 'scale(0.85)',
              transition: 'all 0.3s ease-in-out',
              position: 'absolute',
              bottom: atBottom ? '0' : '3.5rem',
              right: '0',
              zIndex: atBottom ? 10 : 5,
              minWidth: '2.5rem',
              minHeight: '2.5rem',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            <FaArrowUp className="w-4.5 h-4.5" />
          </button>
        )}
        
        {!atBottom && (
          <button
            onClick={scrollToBottom}
            className="p-3 bg-blue-600/90 dark:bg-blue-700/90 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Scroll to bottom"
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              opacity: isVisible ? 0.5 : 1,
              transform: isVisible ? 'scale(0.85)' : 'scale(1.05)',
              zIndex: isVisible ? 5 : 10,
              transition: 'all 0.3s ease-in-out',
              minWidth: '2.5rem',
              minHeight: '2.5rem',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            <FaArrowDown className="w-4.5 h-4.5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollButtons;
