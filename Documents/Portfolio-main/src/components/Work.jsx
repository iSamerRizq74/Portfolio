import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiSmartphone, FiMonitor, FiDatabase, FiShield, FiShoppingCart, FiMessageSquare, FiBarChart2 } from 'react-icons/fi';

const Work = ({ currentLanguage = 'EN' }) => {
  const projects = [
    {
      id: 1,
      title: 'Khadamatk',
      description: {
        EN: 'A comprehensive service marketplace platform connecting service providers with customers in various categories.',
        FR: 'Une plateforme complète de marketplace de services mettant en relation prestataires et clients dans diverses catégories.'
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
        EN: 'A platform for booking personalized language lessons, featuring flexible scheduling and progress tracking.',
        FR: 'Une plateforme de réservation de cours de langues personnalisés, avec planification flexible et suivi des progrès.'
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
        EN: 'An interactive flashcard application for efficient learning and memorization using spaced repetition.',
        FR: 'Une application interactive de flashcards pour un apprentissage et une mémorisation efficaces utilisant la répétition espacée.'
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
        EN: 'A crowdfunding platform for creators to launch projects and for backers to support innovative ideas.',
        FR: 'Une plateforme de crowdfunding permettant aux créateurs de lancer des projets et aux contributeurs de soutenir des idées innovantes.'
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
        EN: 'A movie discovery platform with personalized recommendations and watchlist functionality, allowing users to explore top movies easily.',
        FR: "Une plateforme de découverte de films avec recommandations personnalisées et fonctionnalité de liste de surveillance, permettant aux utilisateurs d'explorer facilement les meilleurs films."
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
        EN: 'A tourism website that helps visitors explore Egypt\'s top attractions, historical sites, and hidden travel gems easily.',
        FR: "Un site touristique aidant les visiteurs à explorer les principales attractions de l'Égypte, les sites historiques et les joyaux cachés du voyage."
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
        EN: 'QuickCart is an online store offering rare and unique electronic products with fast delivery and secure shopping.',
        FR: 'Une boutique en ligne proposant des produits électroniques rares et uniques avec livraison rapide et shopping sécurisé.'
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
        FR: 'Plateforme de réservation de restaurant avec système de gestion des tables. Offre des saveurs délicieuses et des expériences culinaires inoubliables.'
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
        FR: "Plateforme de services de design d'intérieur avec visualisation 3D de pièces et outils de collaboration avec les designers. Transforme les espaces avec créativité et style."
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
        EN: 'AI-powered platform that simplifies content creation, boosts productivity, and enhances human creativity effortlessly.',
        FR: "Plateforme alimentée par l'IA qui simplifie la création de contenu, booste la productivité et améliore la créativité humaine sans effort."
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
        FR: 'Plateforme e-commerce moderne présentant les dernières collections Nike, habillant les athlètes avec style et performance.'
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
        FR: 'Mon portfolio personnel présentant mes projets, compétences et expérience professionnelle. Conçu pour mettre en valeur mon parcours dans le domaine technologique.'
      },
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/iSamerRizq74/Portfolio',
      demo: '#',
      icon: <FiCode className="w-5 h-5" />,
      image: '/images/portfolio.jpg'
    }
  ];

  return (
    <section id="work" className="py-16 bg-[#E6E6E6] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {currentLanguage === 'FR' ? 'Projets' : 'Projects'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {currentLanguage === 'FR' 
              ? 'Une sélection de mes projets récents et travaux personnels.'
              : 'A selection of my recent work and personal projects.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div className="w-full flex items-center justify-center p-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto max-h-[350px] object-contain"
                    style={{ maxWidth: '100%' }}
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
                      className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-200 hover:text-white bg-transparent hover:bg-blue-600/10 border border-blue-500/30 hover:border-blue-500/50 rounded-md transition-all duration-200"
                    >
                      <FiGithub className="mr-2" /> {currentLanguage === 'FR' ? 'Voir le code' : 'View Code'}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <FiExternalLink className="mr-2" /> {currentLanguage === 'FR' ? 'Démo en direct' : 'Live Demo'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
