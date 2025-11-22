import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import { FiEye, FiDownload } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const About = ({ currentLanguage = 'EN' }) => {
  const prefersReducedMotion = useReducedMotion();

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
      className="py-12 sm:py-16 bg-[#E6E6E6] dark:bg-gray-800/60 transition-colors duration-300"
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
              {currentLanguage === 'FR' ? 'À propos de ' : currentLanguage === 'AR' ? 'عن ' : 'About '}
              <span className="text-blue-500 dark:text-blue-400">
                {currentLanguage === 'FR' ? 'moi' : currentLanguage === 'AR' ? 'نفسي' : 'Me'}
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4" />
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              className="w-full max-w-3xl text-center"
              variants={prefersReducedMotion ? undefined : item}
            >
              <div className="w-full max-w-2xl mx-auto bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-600/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <span className="text-blue-500 mr-2">Q:</span>
                  {currentLanguage === 'FR' ? 'Qui suis-je ?' : currentLanguage === 'AR' ? 'من أنا؟' : 'Who Am I?'}
                </h3>
                <div className="pl-6 border-l-2 border-blue-400/50">
                  <p className="text-justify text-sm sm:text-base">
                    {currentLanguage === 'FR'
                      ? "Développeur Full Stack passionné, diplômé de l'ITI et de la Faculté des Sciences Informatiques de Mansoura, avec une expérience pratique sur des projets réels. Maîtrisant le développement front-end et back-end, ainsi que les technologies modernes et frameworks fort. Motivé, curieux et en apprentissage continu."
                      : currentLanguage === 'AR'
                        ? 'أنا مطور ويب شامل شغوف وخريج معهد تكنولوجيا المعلومات، أمتلك خبرة عملية من خلال المشاركة في مشاريع واقعية. متمكّن من تطوير تطبيقات الواجهة الأمامية والخلفية. خريج كلية الحاسبات والمعلومات من جامعة المنصورة، ومهاراتي تشمل التعامل مع التقنيات والأُطر الحديثة. مدفوع بشغف التعلم المستمر ودافع ذاتي عالٍ.'
                        : "Passionate Full Stack Developer and ITI graduate with hands on experience in real-world projects. Versed in developing both client-side and server-side applications. Computer Science graduate from Mansoura University, Skilled in modern technologies and frameworks, and proactive in continuous learning."}
                  </p>
                  <p className="text-justify mt-4 text-sm sm:text-base">
                    {currentLanguage === 'FR'
                      ? "Mon parcours en développement web a débuté il y a plusieurs années, au cours desquelles j'ai réalisé divers projets innovants, allant de sites pour petites entreprises à des plateformes complexes. Je m'attache toujours à relier design et fonctionnalité, en assurant des performances fluides et un code de haute qualité."
                      : currentLanguage === 'AR'
                        ? 'بدأت رحلتي في مجال تطوير الويب منذ عدة سنوات، وخلالها عملت على مجموعة متنوعة من المشاريع، من مواقع الشركات الصغيرة إلى المنصّات الإلكترونية المعقّدة. ركّز عملي على الربط بين التصميم والوظائف البرمجية، مع ضمان أداء سلس عبر جميع طبقات التطوير والحفاظ على جودة عالية في كتابة الكود.'
                        : "My journey in web development began several years ago, during which I’ve built projects ranging from small websites to complex platforms.I've focused in My work on bridging design and functionality, ensuring smooth performance across all layers of development while maintaining high code quality."}
                  </p>
                  <p className="text-justify mt-4 text-sm sm:text-base">
                    {currentLanguage === 'FR'
                      ? "Lorsque je ne code pas, j'explore les technologies émergentes, pratiques et innovantes, contribue à l'open source et partage mes connaissances avec la communauté des développeurs — restant à jour et en affinant mes compétences techniques. Je suis toujours enthousiaste à l'idée de créer des projets impactants.."
                      : currentLanguage === 'AR'
                        ? 'عندما لا أكون منشغلًا بالبرمجة، أستكشف التقنيات الحديثة، وأساهم في مشاريع المصادر المفتوحة، وأشارك المعرفة مع مجتمع المطورين — مما يساعدني على البقاء مطّلعًا، محبًا للاستكشاف وأواصل تطوير مهاراتي التقنية باستمرار. أنا دائمًا متحمّس لبناء أشياء تُحدث فرقًا حقيقيًا.'
                        : "When I'm not coding, I explore emerging technologies, contribute to open source, and share knowledge with the developer community — staying curious and sharpening my skills. I'm always eager to build things that make an impact."}
                  </p>
                </div>
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
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {currentLanguage === 'FR' ? 'CV' : currentLanguage === 'AR' ? 'السيرة الذاتية' : 'CV'}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-8 max-w-lg">
                  {currentLanguage === 'FR'
                    ? 'Découvrez mon parcours professionnel, mes compétences et mon expérience en détail.'
                    : currentLanguage === 'AR'
                      ? 'اكتشف رحلتي المهنية، مهاراتي، وخبرتي بالتفصيل'
                      : 'Discover my professional journey, skills, and experience in detail.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs">
                  <a
                    href="/SamerCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <FiEye className="mr-2 group-hover:scale-110 transition-transform" />
                    {currentLanguage === 'FR' ? 'Voir' : currentLanguage === 'AR' ? 'عرض' : 'View'}
                  </a>
                  <a
                    href="/SamerCV.pdf"
                    download="SamerBaherRizk_CV.pdf"
                    className="group flex-1 flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 hover:border-blue-500 text-gray-800 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300"
                  >
                    <FiDownload className="mr-2 group-hover:scale-110 transition-transform" />
                    {currentLanguage === 'FR' ? 'Télécharger' : currentLanguage === 'AR' ? 'تحميل' : 'Download'}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>


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
              {currentLanguage === 'FR' ? 'Me Contacter' : currentLanguage === 'AR' ? 'تواصل معي' : 'Get In Touch'}
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
