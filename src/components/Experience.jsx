import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode, FiLayers } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading a team of developers to build scalable web applications using modern technologies like React, Node.js, and cloud services. Implementing best practices for code quality and performance optimization.',
      icon: <FiBriefcase className="w-6 h-6" />,
      skills: ['React', 'Node.js', 'AWS', 'GraphQL', 'Docker']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple client projects using JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      icon: <FiCode className="w-6 h-6" />,
      skills: ['JavaScript', 'React', 'Express', 'MongoDB', 'REST APIs']
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'WebCraft Studios',
      period: '2017 - 2019',
      description: 'Created responsive and interactive user interfaces using modern frontend technologies. Worked closely with designers to implement pixel-perfect UIs.',
      icon: <FiLayers className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap']
    },
    {
      id: 4,
      role: 'Junior Web Developer',
      company: 'StartUp Ventures',
      period: '2016 - 2017',
      description: 'Started my professional journey by building and maintaining websites for various clients. Learned the fundamentals of web development and best practices.',
      icon: <FiAward className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20 bg-gray-800">
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
              Work <span className="text-blue-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              A summary of my professional journey and the roles I've held throughout my career.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  variants={item}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="text-xl">
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="p-6 bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 h-full">
                      <span className="text-blue-400 text-sm font-medium">{exp.period}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                      <h4 className="text-purple-300 font-medium mb-3">{exp.company}</h4>
                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-600/30 text-gray-200 px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for even items */}
                  <div className="hidden md:block md:w-2/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            className="mt-24"
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Education & <span className="text-blue-400">Certifications</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Bachelor of Computer and Information Sciences',
                  institution: 'Mansoura University',
                  year: '2019 - 2023',
                  description: 'Specialized in Information Science with VERY GOOD grade.'
                },
                {
                  title: '4-Months Postgraduate Diploma',
                  institution: 'Information Technology Institute (ITI)',
                  year: '2025',
                  description: 'Track: Full Stack Web Development Using Python.'
                },
                {
                  title: 'Front End Certified Course',
                  institution: 'Consulting Of Computers And Information Center',
                  year: '2022',
                  description: 'HTML-CSS-JavaScript-Bootstrap-Vue.js'
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  variants={item}
                >
                  <h4 className="text-lg font-bold text-white">{edu.title}</h4>
                  <p className="text-purple-300 font-medium mt-1">{edu.institution}</p>
                  <span className="inline-block text-blue-400 text-sm mt-2 mb-3">{edu.year}</span>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
