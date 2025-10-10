import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaPython, FaDocker, FaLinux, FaLock } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiDjango, SiMongodb, SiPostgresql, SiTypescript, SiGraphql, SiPostman, SiFigma, SiGithub, SiVercel, SiNetlify, SiMysql, SiApache } from "react-icons/si";
import { motion } from "framer-motion";
import { BsGear } from "react-icons/bs";
import { BiCodeAlt, BiServer, BiData } from "react-icons/bi";

const Skills = ({ currentLanguage = 'EN' }) => {
  const skills = [
    {
      title: currentLanguage === 'FR' ? "Développement Frontend" : "Frontend Development",
      icon: <BiCodeAlt className="w-8 h-8 text-blue-400" />,
      items: [
        { name: "HTML5", icon: <FaHtml5 className="w-5 h-5 text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-5 h-5 text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-5 h-5 text-purple-600" /> },
        { name: "JavaScript", icon: <FaJs className="w-5 h-5 text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
        { name: "React", icon: <FaReact className="w-5 h-5 text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-gray-100" /> },
      ],
    },
    {
      title: currentLanguage === 'FR' ? "Développement Backend" : "Backend Development",
      icon: <BiServer className="w-8 h-8 text-green-500" />,
      items: [
        { name: "Python", icon: <FaPython className="w-5 h-5 text-yellow-400" /> },
        { name: "Django", icon: <SiDjango className="w-5 h-5 text-green-700" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-green-500" /> },
        { name: "RESTful APIs", icon: <BsGear className="w-5 h-5 text-green-400" /> },
        { name: "JWT, OAuth", icon: <FaLock className="w-5 h-5 text-yellow-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-5 h-5 text-pink-600" /> },
        { name: "Postman", icon: <SiPostman className="w-5 h-5 text-orange-500" /> },
        { name: "Apache", icon: <SiApache className="w-5 h-5 text-red-500" /> },
      ],
    },
    {
      title: currentLanguage === 'FR' ? "Bases de données & Outils" : "Database & Tools",
      icon: <BiData className="w-8 h-8 text-yellow-400" />,
      items: [
        { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-blue-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-500" /> },
        { name: "Figma", icon: <SiFigma className="w-5 h-5 text-purple-500" /> },
        { name: "Git & GitHub", icon: <SiGithub className="w-5 h-5 text-gray-100" /> },
        { name: "Vercel, Netlify", icon: <div className="flex space-x-1"><SiVercel className="w-5 h-5 text-black dark:text-white" /><SiNetlify className="w-5 h-5 text-teal-400" /></div> },
        { name: "Docker", icon: <FaDocker className="w-5 h-5 text-blue-500" /> },
        { name: "Linux", icon: <FaLinux className="w-5 h-5 text-yellow-600" /> },
      ],
    },
  ];


  return (
    <section id="skills" className="py-20 bg-[#CCCCCC] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {currentLanguage === 'FR' ? 'Compétences' : 'Skills'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {currentLanguage === 'FR' 
              ? "Les technologies et outils que j'utilise pour créer des applications web modernes et performantes."
              : "Technologies and tools I use to create modern and performant web applications."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.items.map((item, i) => (
                  <div className="flex items-center space-x-3 py-1">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
