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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8"
    >
      {/* Optimized Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent w-full h-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5" />

        {/* Reduced motion for background elements on mobile */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-1/4 -left-10 sm:-left-20 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-70"
              animate={{
                x: [0, 10, 0],
                y: [0, -15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-10 sm:-right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-70"
              animate={{
                x: [0, -15, 0],
                y: [0, 15, 0],
                scale: [1, 0.95, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 2
              }}
            />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-12 sm:pt-20 lg:pt-24 pb-8 sm:pb-16 lg:pb-20">
        <motion.div
          className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8"
          variants={prefersReducedMotion ? undefined : container}
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
            variants={prefersReducedMotion ? undefined : item}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 sm:mb-4 leading-tight"
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
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
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
