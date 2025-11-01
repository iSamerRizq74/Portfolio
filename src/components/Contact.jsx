import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiCopy, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = ({ currentLanguage = 'EN' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [copiedItem, setCopiedItem] = useState(null);
  const copyTimeoutRef = useRef(null);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(index);
      
      // Clear any existing timeout
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      
      // Reset the copied state after 2 seconds
      copyTimeoutRef.current = setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Clean up the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: FiMail,
      label: currentLanguage === 'AR' ? 'البريد الإلكتروني' : 'Email',
      value: 'samer.baher74@gmail.com',
      color: 'from-blue-600 to-blue-700',
      labelColor: 'text-blue-600 dark:text-blue-400',
      valueColor: 'text-gray-600 dark:text-gray-300',
      copyable: true
    },
    {
      icon: FiPhone,
      label: currentLanguage === 'FR' ? 'Téléphone' : currentLanguage === 'AR' ? 'الهاتف' : 'Phone',
      value: '01065290660',
      color: 'from-purple-600 to-purple-700',
      labelColor: 'text-purple-600 dark:text-purple-400',
      valueColor: 'text-gray-600 dark:text-gray-300',
      copyable: true
    },
    {
      icon: FiMapPin,
      label: currentLanguage === 'FR' ? 'Localisation' : currentLanguage === 'AR' ? 'الموقع' : 'Location',
      value: currentLanguage === 'FR' ? 'Le Caire, Égypte' : currentLanguage === 'AR' ? 'القاهرة، مصر' : 'Cairo, Egypt',
      color: 'from-green-600 to-green-700',
      labelColor: 'text-green-600 dark:text-green-400',
      valueColor: 'text-gray-600 dark:text-gray-300',
      copyable: false
    },
  ];

  // Handle WhatsApp click
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openWhatsAppModal'));
  };

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/iSamerRizq74",
      color: "#333333",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/samer-baher-rizk-237a942b5/",
      color: "#0077B5",
    },
    {
      icon: FiFacebook,
      label: "Facebook",
      href: "https://facebook.com/iSamerRizq74",
      color: "#1DA1F2",
    },
    {
      icon: FiInstagram,
      label: "Instagram",
      href: "https://instagram.com/isamerrizq74",
      color: "#E4405F",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "#whatsapp",
      color: "#25D366",
      onClick: handleWhatsAppClick
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On successful submission
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-[#CCCCCC] dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center mb-6 sm:mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl xs:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3"
                >
                  {currentLanguage === 'FR' ? 'Me ' : currentLanguage === 'AR' ? 'تواصل ' : 'Get In '}
                  <span className="text-blue-500 dark:text-blue-400">
                    {currentLanguage === 'FR' ? 'Contacter' : currentLanguage === 'AR' ? 'معي' : 'Touch'}
                  </span>
                </motion.h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-3 sm:mb-4" />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
                >
                  {currentLanguage === 'FR'
                    ? 'Vous avez un projet ou des opportunités potentielles en tête? N\'hésitez pas à me contacter!'
                    : currentLanguage === 'AR'
                      ? 'هل لديك مشروع أو فرص محتملة في ذهنك؟ لا تتردد في التواصل معي'
                      : 'Have a project or potential opportunities in mind? Feel free to reach out!'}
                </motion.p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="bg-gray-50/90 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                      <FiCheckCircle className="text-3xl text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {currentLanguage === 'FR' ? 'Message Envoyé!' : currentLanguage === 'AR' ? 'تم إرسال الرسالة!' : 'Message Sent!'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {currentLanguage === 'FR' ? 'Merci pour votre message. Je vous répondrai dès que possible.' : currentLanguage === 'AR' ? 'شكرًا على رسالتك. سأرد عليك في أقرب وقت ممكن.' : 'Thank you for your message. I will get back to you as soon as possible.'}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50/90 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/50 rounded-xl p-8">
                  {error && (
                    <div className="bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 p-4 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-black dark:text-gray-300">
                        {currentLanguage === 'FR' ? 'Nom' : currentLanguage === 'AR' ? 'الاسم' : 'Name'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/30 border border-gray-200/80 dark:border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-black dark:text-gray-300">
                        {currentLanguage === 'FR' ? 'Email' : currentLanguage === 'AR' ? 'البريد الإلكتروني' : 'Email'} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/30 border border-gray-200/80 dark:border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-black dark:text-gray-300">
                      {currentLanguage === 'FR' ? 'Message' : currentLanguage === 'AR' ? 'الرسالة' : 'Message'} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                      placeholder=""
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group relative w-full overflow-hidden px-6 py-3.5 rounded-lg font-medium text-white transition-all duration-300 ${isSubmitting
                        ? 'bg-gray-600/50 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-primary-500/20'
                        }`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>{currentLanguage === 'FR' ? 'Envoi en cours...' : currentLanguage === 'AR' ? 'جاري الإرسال...' : 'Sending...'}</>
                        ) : (
                          <>
                            <span>{currentLanguage === 'FR' ? 'Envoyer le message' : currentLanguage === 'AR' ? 'إرسال الرسالة' : 'Send Message'}</span>
                            <FiSend className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="pt-12 mt-8">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                  {currentLanguage === 'FR' ? 'Coordonnées' : currentLanguage === 'AR' ? 'معلومات الاتصال' : 'Contact Information'}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className={`text-sm font-medium ${item.labelColor}`}>{item.label}</p>
                            <p className={item.valueColor}>{item.value}</p>
                          </div>
                        </div>
                        {item.copyable && (
                          <button
                            onClick={() => copyToClipboard(item.value, index)}
                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            aria-label={currentLanguage === 'AR' ? 'نسخ' : 'Copy to clipboard'}
                          >
                            {copiedItem === index ? (
                              <FiCheck className="w-5 h-5 text-green-500" />
                            ) : (
                              <FiCopy className="w-5 h-5" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
