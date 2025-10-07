import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import { FiEye, FiDownload } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const [showCV, setShowCV] = useState(false);

  const handleViewCV = () => {
    setShowCV(true);
  };

  const handleCloseCV = () => {
    setShowCV(false);
  };

  useEffect(() => {
    if (showCV) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showCV]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
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

  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-[#E6E6E6] dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          variants={prefersReducedMotion ? undefined : container}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            variants={prefersReducedMotion ? undefined : item}
          >
            <h2 className="text-3xl xs:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              About <span className="text-blue-500 dark:text-blue-400">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4" />
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              className="w-full max-w-3xl text-center"
              variants={prefersReducedMotion ? undefined : item}
            >
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                Who Am I?
              </h3>
              <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify px-2">
                <p className="max-w-2xl mx-auto">
                  I’m a passionate Full Stack Developer with strong expertise in both frontend and backend development. I’m dedicated to building creative and reliable solutions that make an impact. I enjoy turning complex ideas into modern, scalable, and responsive web applications. My focus is on writing clean and efficient code that delivers high-performance and meaningful digital experiences for users.
                </p>
                <p className="max-w-2xl mx-auto">
                  My journey in web development began several years ago, during which I’ve worked on a wide range of projects from small business websites to web platforms. I’ve contributed to full stack development, designing intuitive interfaces and building secure, high-performance APIs. I’m dedicated to writing clean code and continuously improving my skills through collaboration and problem-solving.
                </p>
                <p className="max-w-2xl mx-auto">
                  When I’m not coding, I enjoy exploring emerging technologies, contributing to open-source projects, and sharing knowledge within the developer community. These experiences help me stay up-to-date, collaborate effectively, and continuously refine my technical skills. I’m always eager to take on new challenges and build innovative, user-focused, and meaningful products that make an impact.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CV Section */}
          <motion.div
            className="mt-16 mb-12 text-center"
            variants={prefersReducedMotion ? undefined : fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-30px 0px -30px 0px" }}
          >
            <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-8 max-w-3xl mx-auto shadow-lg dark:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/10 rounded-full flex items-center justify-center mb-5">
                  <FaFilePdf className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">CV</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-8 max-w-lg">
                  Explore my professional journey, skills, and experience in detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs">
                  <button
                    onClick={handleViewCV}
                    className="group flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <FiEye className="mr-2 group-hover:scale-110 transition-transform" />
                    View
                  </button>
                  <a
                    href="/SamerCV.pdf"
                    download="SamerBaherRizk_CV.pdf"
                    className="group flex-1 flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 hover:border-blue-500 text-gray-800 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300"
                  >
                    <FiDownload className="mr-2 group-hover:scale-110 transition-transform" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CV Modal */}
          <AnimatePresence>
            {showCV && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={handleCloseCV}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-5xl h-[90vh] bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={handleCloseCV}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700/90 text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Close CV"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="w-full h-full">
                    <embed
                      src="/SamerCV.pdf#toolbar=1&navpanes=0&view=FitH"
                      type="application/pdf"
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            className="mt-8 text-center"
            variants={prefersReducedMotion ? undefined : fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-30px 0px -30px 0px" }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-colors group text-sm sm:text-base"
              whileHover={prefersReducedMotion ? {} : {
                scale: 1.05,
                boxShadow: '0 0 15px -3px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              Get In Touch
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
