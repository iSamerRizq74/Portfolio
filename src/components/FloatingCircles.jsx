import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const FloatingCircles = ({ count = 100 }) => {
  const prefersReducedMotion = useReducedMotion();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateCircles = () => {
    if (prefersReducedMotion) return null;
    
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 2 + 1; // Random size between 1 and 3
      const duration = Math.random() * 5 + 10; // Random duration between 10 and 15
      const delay = Math.random() * 3; // Random delay up to 3s
      const x = Math.random() * (dimensions.width || window.innerWidth);
      const y = Math.random() * (dimensions.height || window.innerHeight);
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white dark:bg-blue-100 pointer-events-none"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: x,
            top: y,
            position: 'absolute',
            zIndex: -1,
            willChange: 'transform, opacity',
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -10, 0, 10, 0],
            x: [0, 5, 0, -5, 0],
            opacity: [0.2, 1, 0.8, 1, 0.2],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay,
          }}
        />
      );
    });
  };

  if (prefersReducedMotion) return null;
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-screen h-screen overflow-hidden -z-10 pointer-events-none"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
      }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && generateCircles()}
    </div>
  );
};

export default FloatingCircles;
