import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: 'easeOut'
      }
    }
  };

  // Optimized background animation for mobile
  const backgroundAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1,
        ease: 'easeOut'
      }
    }
  };

  // Optimized scroll indicator animation for mobile
  const scrollIndicator = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: [0, 1, 1, 0],
      y: [20, 0, -10, -20],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={backgroundAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxMTExMTEiLz4KICA8cGF0aCBkPSJNMzYgMzRWNjBINnYtMjZoMzB6TTYgMjZoMzBWNmgzMHYyMHoiIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-5 dark:opacity-10" />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto pt-20 md:pt-28">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Greeting */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="mb-1 sm:mb-2"
          >
            <span className="text-blue-400 text-base sm:text-lg md:text-xl font-medium tracking-wider">

            </span>
          </motion.div>

          {/* Name - Optimized for mobile */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={item}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Samer Baher Rizk
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="mb-4 sm:mb-6"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-300 dark:to-purple-400">
                Full Stack Developer
              </span>
            </h2>
          </motion.div>

          {/* Description - Improved line length and spacing */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="text-gray-400 text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] max-w-2xl mx-auto mb-4 sm:mb-6 px-8"
          >
            <div className="w-full">
              <p className="text-justify">
                <span className="block max-w-[98%] mx-auto">
                  Passionate Full Stack Developer and ITI graduate with hands-on experience in real-world projects. Skilled in both front-end and back-end development, delivering scalable and reliable solutions. A Computer Science graduate from Mansoura University, I'm driven by continuous learning, Highly detail-oriented and self-motivated who thrives on challenges, values clean and efficient code, with a strong focus on building impactful web applications.
                </span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - Stack on mobile, row on larger screens */}
          <motion.div
            variants={prefersReducedMotion ? undefined : item}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <a
              href="#contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-sm sm:text-base"
              aria-label="Get in touch"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get In Touch
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors duration-200 group"
              aria-label="View my work"
            >
              View My Work
              <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                ↗
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
