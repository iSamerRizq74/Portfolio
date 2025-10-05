import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiSmartphone, FiMonitor, FiDatabase, FiShield, FiShoppingCart, FiMessageSquare, FiBarChart2 } from 'react-icons/fi';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Khadamatk',
      description: 'A comprehensive service marketplace platform connecting service providers with customers in various categories.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/NadraR/khadamatk',
      demo: '#',
      icon: <FiLayers className="w-5 h-5" />,
      image: '/images/khadamatk.jpg'
    },
    {
      id: 2,
      title: 'SmartLesson',
      description: 'A platform for booking personalized language lessons, featuring flexible scheduling and progress tracking.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/rewan24/E-Learning-Lessons-Platform',
      demo: 'https://e-learning-lessons-platform.vercel.app/',
      icon: <FiMonitor className="w-5 h-5" />,
      image: '/images/smartlesson.jpg'
    },
    {
      id: 3,
      title: 'FlIpQuist',
      description: 'An interactive flashcard application for efficient learning and memorization using spaced repetition.',
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      github: 'https://github.com/iSamerRizq74/FlipQuest',
      demo: 'https://flip-quest.vercel.app/',
      icon: <FiCode className="w-5 h-5" />,
      image: '/images/flipquest.jpg'
    },
    {
      id: 4,
      title: 'SparkFund',
      description: 'A crowdfunding platform for creators to launch projects and for backers to support innovative ideas.',
      tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
      github: 'https://github.com/iSamerRizq74/SparkFund',
      demo: 'https://spark-fund.vercel.app/',
      icon: <FiSmartphone className="w-5 h-5" />,
      image: '/images/sparkfund.jpg'
    },
    {
      id: 5,
      title: 'MovieNest',
      description: 'A movie discovery platform with personalized recommendations and watchlist functionality, allowing users to explore top moveis easily.',
      tags: ['React', 'TMDB API', 'Redux', 'Firebase'],
      github: 'https://github.com/iSamerRizq74/MovieNest',
      demo: 'https://movie-nest-puce.vercel.app/',
      icon: <FiMonitor className="w-5 h-5" />,
      image: '/images/movienest.jpg'
    },
    {
      id: 6,
      title: 'Egyora',
      description: 'A tourism website that helps visitors explore Egypt’s top attractions, historical sites, and hidden travel gems easily.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/iSamerRizq74/Egyora',
      demo: '#',
      icon: <FiShoppingCart className="w-5 h-5" />,
      image: '/images/egyora.jpg'
    },
    {
      id: 7,
      title: 'QuickCart',
      description: 'QuickCart is an online store offering rare and unique electronic products with fast delivery and secure shopping.',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
      github: 'https://github.com/iSamerRizq74/QuickCart',
      demo: 'https://quick-cart-nu-navy.vercel.app/',
      icon: <FiShoppingCart className="w-5 h-5" />,
      image: '/images/quickcart.jpg'
    },
    {
      id: 8,
      title: 'Gericht',
      description: 'Restaurant reservation platform with table management system, Delivers delicious flavors and unforgettable dining experiences.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/iSamerRizq74/Restaurant',
      demo: 'https://restaurant-five-lemon.vercel.app/',
      icon: <FiLayers className="w-5 h-5" />,
      image: '/images/gericht.jpg'
    },
    {
      id: 9,
      title: 'VivaDecor',
      description: 'Interior design service platform with 3D room visualization and designer collaboration tools, Transforms spaces with creativity and style.',
      tags: ['Three.js', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/iSamerRizq74/VivaDecor',
      demo: 'https://viva-decor-six.vercel.app/',
      icon: <FiLayers className="w-5 h-5" />,
      image: '/images/vivadecor.jpg'
    },
    {
      id: 10,
      title: 'SmartFlow',
      description: 'AI-powered platform that simplifies content creation, boosts productivity, and enhances human creativity effortlessly.',
      tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
      github: 'https://github.com/iSamerRizq74/SmartFlow-GPT3',
      demo: 'https://smart-flow-gpt-3.vercel.app/',
      icon: <FiBarChart2 className="w-5 h-5" />,
      image: '/images/smartflow.jpg'
    },
    {
      id: 11,
      title: 'NikeVibe',
      description: 'Modern e-commerce platform showcasing the latest Nike collections, empowering athletes with style and performance.',
      tags: ['React', 'AR.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/iSamerRizq74/NikeSuperfly',
      demo: 'https://nike-superfly.vercel.app/',
      icon: <FiShoppingCart className="w-5 h-5" />,
      image: '/images/nikevibe.jpg'
    },
    {
      id: 12,
      title: 'Portfolio',
      description: 'My personal portfolio showcasing my projects, skills, and professional experience, Designed to highlight my journey in the tech field.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/iSamerRizq74/Portfolio',
      demo: '#',
      icon: <FiCode className="w-5 h-5" />,
      image: '/images/portfolio.jpg'
    }
  ];

  return (
    <section id="work" className="py-16 bg-[#E6E6E6] dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            My <span className="text-blue-600 dark:text-blue-400">Work</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some recent projects designed to solve problems and enhance user experiences.         </p>
        </motion.div>

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
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                    >
                      <FiGithub className="w-4 h-4 flex-shrink-0" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <FiExternalLink className="w-4 h-4 flex-shrink-0" />
                      <span>Live Demo</span>
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
