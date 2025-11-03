import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const CV = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleViewPDF = () => {
    if (isMobile) {
      // On mobile, open in a new tab for better compatibility
      window.open('/SamerCV.pdf', '_blank', 'noopener,noreferrer');
    } else {
      // On desktop, show in full screen
      setShowFullScreen(true);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/SamerCV.pdf';
    link.download = 'SamerBaherRizk_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative">
      {showFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col p-4">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setShowFullScreen(false)}
              className="text-white hover:text-gray-300 p-2"
              aria-label="Close fullscreen"
            >
              <FiExternalLink className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1">
            <iframe
              src="/SamerCV.pdf#toolbar=1&navpanes=1&view=FitH&zoom=100"
              className="w-full h-full border-0"
              title="Samer Baher Rizk CV - Full Screen"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '80vh',
                overflow: 'auto'
              }}
              allowFullScreen
            />
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent"
            variants={item}
          >
            CV
          </motion.h2>
          <motion.p
            className="text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto"
            variants={item}
          >
            Download or view my complete CV
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg dark:shadow-2xl max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full" style={{ height: 'calc(100vh - 250px)', minHeight: '500px' }}>
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 text-center p-4">
                {isMobile 
                  ? 'Tap "View CV" to open your CV in a new tab.'
                  : 'Click "View CV" to see the full document.'}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleViewPDF}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:shadow-green-500/20"
            >
              <FiExternalLink className="mr-2 group-hover:animate-pulse text-white" />
              {isMobile ? 'View CV' : 'View Full Screen'}
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <FiDownload className="mr-2 group-hover:animate-bounce text-white" />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
