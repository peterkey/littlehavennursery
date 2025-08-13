import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactCard = ({ icon: Icon, title, description, action, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-500 
                      rounded-xl flex items-center justify-center shadow-lg transform 
                      group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white text-2xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
        <p className="text-gray-600 mb-3">{description}</p>
        <a
          href={link}
          className="inline-block text-blue-500 font-semibold hover:text-blue-600 
                   transition-colors duration-300"
        >
          {action}
        </a>
      </div>
    </div>
  </motion.div>
);

const ContactUs = () => {
  const contacts = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      description: "Send us a message at:",
      action: "learn@littlehavennursery.co.uk",
      link: "mailto:learn@littlehavennursery.co.uk"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      description: "Give us a ring:",
      action: "02920891825",
      link: "tel:02920891825"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      description: "Come and explore our nursery:",
      action: "Little Haven Nursery, Cardiff",
      link: "https://maps.google.com/?q=Little+Haven+Nursery+Cardiff"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-blue-50 leading-relaxed"
          >
            Have questions or want to see our nursery in person? We'd love to hear from you and show you 
            around our wonderful facilities!
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} delay={index * 0.1} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl 
                     font-bold shadow-lg hover:shadow-xl transition-all duration-300 
                     hover:bg-blue-50"
          >
            <FaCalendarCheck className="mr-2" />
            Schedule a Visit
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
