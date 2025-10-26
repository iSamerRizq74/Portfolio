import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Import the image
import samerImage from '../assets/images/samer.jpg';

const Hero = ({ currentLanguage = 'EN' }) => {
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#CCCCCC] dark:bg-gray-900 pt-20">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="absolute inset-0 bg-[#CCCCCC] dark:bg-gray-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxMTExMTEiLz4KICA8cGF0aCBkPSJNMzYgMzRWNjBINnYtMjZoMzB6TTYgMjZoMzBWNmgzMHYyMHoiIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-5 dark:opacity-10" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[98%] 2xl:max-w-[95%] 3xl:max-w-[1400px] mx-auto px-0 md:px-6">
        {/* Mobile Profile Picture - Only shows on small screens */}
        <div className="lg:hidden flex justify-center mb-6 mt-4">
          <motion.div
            className="w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-lg shadow-2xl border-4 border-white dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={samerImage}
              alt="Samer Baher Rizk"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              loading="lazy"
              width="224"
              height="288"
              onError={(e) => {
                console.error('Failed to load image:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
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

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 w-[95%] max-w-3xl mx-auto text-center lg:text-left whitespace-nowrap"
              variants={item}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent">
                {currentLanguage === 'AR' ? 'سامر باهر رزق' : 'Samer Baher Rizk'}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="mb-4 sm:mb-6 w-[98%] max-w-5xl mx-auto"
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center lg:text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400">
                  {currentLanguage === 'FR' ? 'Développeur Full Stack' : currentLanguage === 'AR' ? 'مطور ويب متكامل' : 'Full Stack Developer'}
                </span>
              </h2>
            </motion.div>

            {/* Description - Improved line length and spacing */}
            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="text-gray-400 text-[0.88rem] sm:text-[0.93rem] md:text-[1rem] w-full mb-4 sm:mb-6"
            >
              <div className="w-full">
                <p className="text-justify leading-relaxed w-full pr-0 xl:pr-8 text-[0.88rem] sm:text-[0.93rem] md:text-[1rem] tracking-tight">
                  <span className="block w-full text-gray-800 dark:text-gray-300">
                    {currentLanguage === 'FR'
                      ? "Création de sites web modernes, réactifs et conviviaux avec passion et précision. Dédié à la construction de solutions numériques créatives et fiables qui ont un impact réel. J'aime transformer des idées complexes en applications web évolutives, avec un accent fort sur la fourniture d'expériences utilisateur fluides, le maintien d'une excellente interface utilisateur/expérience utilisateur et l'écriture de code propre et maintenable."
                      : currentLanguage === 'AR'
                        ? 'أقوم بإنشاء مواقع ويب عصرية وسريعة الاستجابة وسهلة الاستخدام بشغف ودقة. ملتزم ببناء حلول رقمية إبداعية وموثوقة يكون لها تأثير حقيقي. أستمتع بتحويل الأفكار المعقدة إلى تطبيقات ويب قابلة للتطوير، مع التركيز الشديد على تقديم تجارب مستخدم سلسة، والحفاظ على واجهة مستخدم وتجربة مستخدم ممتازة، وكتابة كود نظيف وسهل الصيانة.'
                        : "Crafting modern, responsive, and user-friendly websites with passion and precision. Dedicated to building creative and reliable custom digital solutions that make a real impact. Enjoy transforming complex ideas into scalable applications, with focus on writing clean code and staying up-to-date with the latest technologies. Delivering great user experiences."
                    }
                  </span>
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons - Stack on mobile, row on larger screens */}
            <motion.div
              variants={prefersReducedMotion ? undefined : item}
              className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6 w-full"
            >
              <a
                href="#work"
                className="group relative px-4 py-2.5 sm:px-6 sm:py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm sm:text-[0.95rem] w-auto min-w-[calc(50%-0.5rem)] sm:min-w-[180px]"
                aria-label="View my work"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="relative flex items-center">
                    <span className="mr-1.5">💻</span>
                    {currentLanguage === 'FR' ? 'Voir Mes Projets' : currentLanguage === 'AR' ? 'مشاريعي' : 'View My Work'}
                  </span>
                  <FiArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#contact"
                className="group relative px-4 py-2.5 sm:px-6 sm:py-3.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/30 hover:-translate-y-0.5 text-sm sm:text-[0.95rem] w-auto min-w-[calc(50%-0.5rem)] sm:min-w-[180px] border border-gray-600/40 hover:border-transparent"
                aria-label="Get in touch"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="relative flex items-center">
                    <span className="mr-1.5">✉️</span>
                    {currentLanguage === 'FR' ? 'Me Contacter' : currentLanguage === 'AR' ? 'تواصل معي' : 'Get In Touch'}
                  </span>
                  <FiArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>

          </motion.div>

          {/* Profile Picture - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <motion.div
              className="w-64 h-80 md:w-72 md:h-[26rem] lg:w-96 lg:h-[30rem] overflow-hidden rounded-lg shadow-2xl z-20 border-4 border-white dark:border-gray-800 mr-4 md:mr-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img
                src="/images/samer.jpg"
                alt="Samer Baher Rizk"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
