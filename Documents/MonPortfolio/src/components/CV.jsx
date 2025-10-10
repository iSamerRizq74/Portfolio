import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const CV = () => {
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
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
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
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-2xl max-w-4xl mx-auto border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full" style={{ height: '1122px' }}>
            <iframe 
              src="/SamerCV.pdf#toolbar=1&navpanes=0&view=FitH&zoom=100&title=Samer Baher Rizk" 
              className="w-full h-full border-0"
              title="Samer Baher Rizk CV"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 flex items-center group hover:shadow-lg hover:shadow-indigo-500/20"
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
