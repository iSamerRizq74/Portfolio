import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiSmartphone, FiMonitor, FiDatabase, FiShield, FiShoppingCart, FiMessageSquare, FiBarChart2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect, useCallback } from 'react';

// Function to preload images
const preloadImages = (imageUrls) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }
};

const Work = ({ currentLanguage = 'EN' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Preload all project images on component mount
  useEffect(() => {
    if (projects && projects.length > 0) {
      // Preload all project images for both desktop and mobile
      const imageUrls = projects.map(project => project.image);
      preloadImages(imageUrls);
      
      // Also preload next and previous images for mobile carousel
      const preloadNextPrev = () => {
        const nextIndex = (currentIndex + 1) % projects.length;
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        
        const nextImg = new Image();
        nextImg.src = projects[nextIndex].image;
        
        const prevImg = new Image();
        prevImg.src = projects[prevIndex].image;
      };
      
      preloadNextPrev();
    }
  }, [currentIndex]); // Add currentIndex to dependency array to preload on slide change

  // Debounce resize handler
  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    
    // Initial check
    setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextProject = useCallback(() => {
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const prevProject = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextProject();
    }
    if (touchStart - touchEnd < -50) {
      prevProject();
    }
  };
  const projects = [
    {
      id: 1,
      title: 'Khadamatk',
      description: {
        EN: 'Service marketplace connecting professionals and customers across categories, simplifying access to trusted expertise and reliable solutions.',
        FR: 'Une plateforme complète de marketplace de services mettant en relation prestataires et clients dans diverses catégories.',
        AR: 'منصة سوق خدمات شاملة تربط مقدمي الخدمات بالعملاء في فئات مختلفة'
      },
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/NadraR/khadamatk',
      demo: '#',
      icon: <FiLayers className="w-5 h-5" />,
      image: '/images/khadamatk.jpg'
    },
    {
      id: 2,
      title: 'SmartLesson',
      description: {
        EN: 'Platform for booking personalized English lessons with flexible scheduling and detailed progress tracking.',
        FR: 'Une plateforme de réservation de cours de langues personnalisés, avec planification flexible et suivi des progrès.',
        AR: 'منصة لحجز دروس لغة مخصصة، تتميز بجدولة مرنة وتتبع التقدم'
      },
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/rewan24/E-Learning-Lessons-Platform',
      demo: 'https://e-learning-lessons-platform.vercel.app/',
      icon: <FiMonitor className="w-5 h-5" />,
      image: '/images/smartlesson.jpg'
    },
    {
      id: 3,
      title: 'FlIpQuist',
      description: {
        EN: 'Interactive flashcard platform with adaptive spaced-repetition and customizable study modes, enhancing learning and long-term retention.',
        FR: 'Une application interactive de flashcards pour un apprentissage et une mémorisation efficaces utilisant la répétition espacée.',
        AR: 'تطبيق بطاقات تعليمية تفاعلي للتعلم الفعال والتذكر باستخدام التكرار المتباعد'
      },
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      github: 'https://github.com/iSamerRizq74/FlipQuest',
      demo: 'https://flip-quest.vercel.app/',
      icon: <FiCode className="w-5 h-5" />,
      image: '/images/flipquest.jpg'
    },
    {
      id: 4,
      title: 'SparkFund',
      description: {
        EN: 'Crowdfunding platform empowering creators to launch projects and connect with backers, turning innovative ideas into impactful realities.',
        FR: 'Une plateforme de crowdfunding permettant aux créateurs de lancer des projets et aux contributeurs de soutenir des idées innovantes.',
        AR: 'منصة تمويل جماعي للمبدعين لإطلاق المشاريع وللممولين لدعم الأفكار المبتكرة'
      },
      tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
      github: 'https://github.com/iSamerRizq74/SparkFund',
      demo: 'https://spark-fund.vercel.app/',
      icon: <FiSmartphone className="w-5 h-5" />,
      image: '/images/sparkfund.jpg'
    },
    {
      id: 5,
      title: 'MovieNest',
      description: {
        EN: 'Movie discovery platform offering personalized recommendations and curated watchlists, helping users explore top films effortlessly.',
        FR: "Plateforme de découverte de films avec recommandations personnalisées et listes pour explorer facilement les meilleurs films.",
        AR: 'منصة اكتشاف أفلام مع توصيات مخصصة ووظيفة قائمة المشاهدة، مما يسمح للمستخدمين باستكشاف أفضل الأفلام بسهولة'
      },
      tags: ['React', 'TMDB API', 'Redux', 'Firebase'],
      github: 'https://github.com/iSamerRizq74/MovieNest',
      demo: 'https://movie-nest-puce.vercel.app/',
      icon: <FiMonitor className="w-5 h-5" />,
      image: '/images/movienest.jpg'
    },
    {
      id: 6,
      title: 'Egyora',
      description: {
        EN: 'Tourism platform showcasing Egypt’s attractions, historical landmarks, and hidden gems, inspiring travelers to discover the beauty of the Nile.',
        FR: "Un site touristique aidant les visiteurs à explorer les principales attractions de l'\u00c9gypte, les sites historiques et les joyaux cach\u00e9s du voyage.",
        AR: 'موقع سياحي يساعد الزوار على استكشاف أفضل معالم مصر، المواقع التاريخية، والجواهر السياحية المخفية بسهولة'
      },
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/iSamerRizq74/Egyora',
      demo: '#',
      icon: <FiShoppingCart className="w-5 h-5" />,
      image: '/images/egyora.jpg'
    },
    {
      id: 7,
      title: 'QuickCart',
      description: {
        EN: 'Online store featuring rare and innovative electronic products, delivering fast, secure, and seamless shopping experiences.',
        FR: 'Une boutique en ligne proposant des produits électroniques rares et uniques avec livraison rapide et shopping sécurisé.',
        AR: 'متجر إلكتروني يقدم منتجات إلكترونية نادرة وفريدة مع توصيل سريع وتسوق آمن'
      },
      tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
      github: 'https://github.com/iSamerRizq74/QuickCart',
      demo: 'https://quick-cart-nu-navy.vercel.app/',
      icon: <FiShoppingCart className="w-5 h-5" />,
      image: '/images/quickcart.jpg'
    },
    {
      id: 8,
      title: 'Gericht',
      description: {
        EN: 'Restaurant reservation platform with table management system, delivering delicious flavors and unforgettable dining experiences.',
        FR: 'Plateforme de réservation de restaurant avec gestion des tables, offrant des expériences culinaires inoubliables.',
        AR: 'منصة حجز مطاعم مع نظام إدارة الطاولات، تقدم نكهات لذيذة وتجارب طعام لا تُنسى'
      },
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/iSamerRizq74/Restaurant',
      demo: 'https://restaurant-five-lemon.vercel.app/',
      icon: <FiLayers className="w-5 h-5" />,
      image: '/images/gericht.jpg'
    },
    {
      id: 9,
      title: 'VivaDecor',
      description: {
        EN: 'Interior design service platform with 3D room visualization and designer collaboration tools, transforming spaces with creativity and style.',
        FR: "Plateforme de design d'intérieur avec visualisation 3D et outils de collaboration, transformant les espaces avec style et créativité.",
        AR: 'منصة خدمات تصميم داخلي مع تصور ثلاثي الأبعاد للغرف وأدوات تعاون المصممين، تحول المساحات بالإبداع والأناقة'
      },
      tags: ['Three.js', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/iSamerRizq74/VivaDecor',
      demo: 'https://viva-decor-six.vercel.app/',
      icon: <FiLayers className="w-5 h-5" />,
      image: '/images/vivadecor.jpg'
    },
    {
      id: 10,
      title: 'SmartFlow',
      description: {
        EN: 'AI-powered platform streamlining content creation and boosting productivity, empowering creators to innovate with ease and efficiency.',
        FR: "Plateforme alimentée par l'IA qui simplifie la création de contenu, booste la productivité et améliore la créativité humaine sans effort.",
        AR: 'منصة مدعومة بالذكاء الاصطناعي تبسط إنشاء المحتوى، تعزز الإنتاجية، وتحسن الإبداع البشري بسهولة'
      },
      tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
      github: 'https://github.com/iSamerRizq74/SmartFlow-GPT3',
      demo: 'https://smart-flow-gpt-3.vercel.app/',
      icon: <FiBarChart2 className="w-5 h-5" />,
      image: '/images/smartflow.jpg'
    },
    {
      id: 11,
      title: 'NikeVibe',
      description: {
        EN: 'Modern e-commerce platform showcasing the latest Nike collections, empowering athletes with style and performance.',
        FR: 'Plateforme e-commerce moderne présentant les dernières collections Nike, habillant les athlètes avec style et performance.',
        AR: 'منصة تجارة إلكترونية حديثة تعرض أحدث مجموعات نايكي، تمكّن الرياضيين بالأناقة والأداء'
      },
      tags: ['React', 'AR.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/iSamerRizq74/NikeSuperfly',
      demo: 'https://nike-superfly.vercel.app/',
      icon: <FiShoppingCart className="w-5 h-5" />,
      image: '/images/nikevibe.jpg'
    },
    {
      id: 12,
      title: 'Portfolio',
      description: {
        EN: 'My personal portfolio showcasing my projects, skills, and professional experience, designed to highlight my journey in the tech field.',
        FR: 'Portfolio personnel présentant mes projets, compétences et expérience, mettant en valeur mon parcours technologique.',
        AR: 'محفظتي الشخصية التي تعرض مشاريعي ومهاراتي وخبرتي المهنية، مصممة لتسليط الضوء على رحلتي في مجال التكنولوجيا'
      },
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/iSamerRizq74/Portfolio',
      demo: '#',
      icon: <FiCode className="w-5 h-5" />,
      image: '/images/portfolio.jpg'
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {currentLanguage === 'FR' 
              ? 'Mes Projets' 
              : currentLanguage === 'AR' 
                ? 'مشاريعي' 
                : 'My Work'}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {currentLanguage === 'FR'
              ? 'Une sélection de mes projets récents et personnels.'
              : currentLanguage === 'AR'
                ? 'اختيار من مشاريعي الشخصية والأخيرة.'
                : 'A selection of my recent work and personal projects.'}
          </p>
        </div>

        <div className="relative">
          {isMobile && (
            <>
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 p-1.5 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
                aria-label="Previous project"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 p-1.5 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
                aria-label="Next project"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!isMobile ? (
              projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="relative w-full bg-gray-100 dark:bg-gray-900 overflow-hidden">
                    <div className="w-full flex items-center justify-center p-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto max-h-[350px] object-contain transition-opacity duration-300"
                        style={{ 
                          maxWidth: '100%',
                          backgroundColor: '#f5f5f5',
                          opacity: 1
                        }}
                        loading="eager"
                        decoding="sync"
                        fetchpriority="high"
                        width="600"
                        height="400"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-blue-500 mr-2">
                        {project.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {typeof project.description === 'object'
                        ? project.description[currentLanguage]
                        : project.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-full flex flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-800 dark:text-white hover:text-white bg-transparent hover:bg-blue-600/10 border border-blue-600/70 hover:border-blue-600 rounded-md transition-all duration-200"
                    >
                      <FiGithub className="mr-2" /> {currentLanguage === 'FR' ? 'Voir le code' : currentLanguage === 'AR' ? 'عرض الكود' : 'View Code'}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <FiExternalLink className="mr-2" /> {currentLanguage === 'FR' ? 'Démo en direct' : currentLanguage === 'AR' ? 'عرض مباشر' : 'Live Demo'}
                    </a>
                  </div>
                </div>
              </div>
                </motion.div>
              ))
            ) : (
              <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.3
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  x: -100,
                  transition: {
                    type: 'tween',
                    ease: 'easeIn',
                    duration: 0.2
                  }
                }}
                className="col-span-1 md:col-span-2 lg:col-span-3 will-change-transform"
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ transform: 'translateZ(0)' }}
                >
                  {/* Project Image */}
                  <div className="relative w-full bg-gray-100 dark:bg-gray-900 overflow-hidden">
                    <div className="w-full flex items-center justify-center p-0">
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-auto max-h-[350px] object-contain transition-opacity duration-300"
                        style={{ 
                          maxWidth: '100%',
                          backgroundColor: '#f5f5f5',
                          opacity: 1
                        }}
                        loading="eager"
                        decoding="sync"
                        fetchpriority="high"
                        width="600"
                        height="400"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-blue-500 mr-2">
                        {projects[currentIndex].icon}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {projects[currentIndex].title}
                      </h3>
                    </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {typeof projects[currentIndex].description === 'object'
                          ? projects[currentIndex].description[currentLanguage]
                          : projects[currentIndex].description}
                      </p>
                      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="w-full flex flex-row gap-3">
                          <a
                            href={projects[currentIndex].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-800 dark:text-white hover:text-white bg-transparent hover:bg-blue-600/10 border border-blue-600/70 hover:border-blue-600 rounded-md transition-all duration-200"
                          >
                            <FiGithub className="mr-2" /> {currentLanguage === 'FR' ? 'Voir le code' : currentLanguage === 'AR' ? 'عرض الكود' : 'View Code'}
                          </a>
                          <a
                            href={projects[currentIndex].demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                          >
                            <FiExternalLink className="mr-2" /> {currentLanguage === 'FR' ? 'Démo en direct' : currentLanguage === 'AR' ? 'عرض مباشر' : 'Live Demo'}
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
