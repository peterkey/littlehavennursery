import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaMobileAlt, FaComments } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-blue-500 
                      rounded-xl flex items-center justify-center shadow-lg transform 
                      group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white text-2xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const PeaceOfMind = () => {
  const features = {
    safety: [
      {
        icon: FaShieldAlt,
        title: "Secure Learning Spaces",
        description: "Our indoor and outdoor areas are designed to be safe, stimulating, and fully secure—allowing children to explore with confidence."
      },
      {
        icon: FaLock,
        title: "Strict Access Control",
        description: "Only authorised parents and guardians can enter, ensuring a safe environment at all times."
      }
    ],
    communication: [
      {
        icon: FaMobileAlt,
        title: "Real-Time Updates",
        description: "Stay informed about your child's activities, meals, and learning progress throughout the day."
      },
      {
        icon: FaComments,
        title: "iConnect App",
        description: "Our iConnect app lets you receive updates, photos, and messages so you're always in the loop."
      }
    ]
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute -bottom-8 left-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Peace of Mind for Parents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-blue-100 leading-relaxed"
          >
            Your child's safety and happiness are our top priorities. We provide a secure, nurturing environment where
            they can explore, learn, and grow while keeping you informed every step of the way.
          </motion.p>
        </div>

        {/* Safety and Security Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-blue-100 text-center mb-8"
          >
            Safety & Security
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.safety.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Communication Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-blue-100 text-center mb-8"
          >
            Frequent Communication
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.communication.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 
                     rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PeaceOfMind;
