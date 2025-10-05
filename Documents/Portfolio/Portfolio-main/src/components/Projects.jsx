import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: '#',
      demo: '#',
      icon: <FiLayers className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: '#',
      demo: '#',
      icon: <FiCode className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.',
      tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f725?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: '#',
      demo: '#',
      icon: <FiSmartphone className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Framer Motion for smooth animations and transitions.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: '#',
      demo: '#',
      icon: <FiLayers className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'A web application for discovering and saving recipes based on available ingredients and dietary preferences.',
      tags: ['Vue.js', 'Express', 'Spoonacular API', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: '#',
      demo: '#',
      icon: <FiCode className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A weather forecasting application with interactive maps and detailed weather information.',
      tags: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: '#',
      demo: '#',
      icon: <FiLayers className="w-5 h-5" />
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Here are some recent projects designed to solve problems and enhance user experiences.            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col"
                variants={item}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)' }}
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 hover:bg-blue-600 text-white transition-colors"
                          aria-label="View on GitHub"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 hover:bg-blue-600 text-white transition-colors"
                          aria-label="View Live Demo"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="text-blue-400 mr-3">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>

                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700/50">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            variants={fadeIn}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-colors group"
            >
              View All Projects on GitHub
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
