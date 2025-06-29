import { motion } from 'framer-motion';
import { FaMedal, FaAppleAlt, FaStar } from 'react-icons/fa';

const AwardCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative overflow-hidden group"
  >
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-blue-100/20 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-500 
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

const Awards = () => {
  const awards = [
    {
      icon: FaMedal,
      title: "Gold Standard Plus",
      description: "Recognised for outstanding quality in early-years education and childcare."
    },
    {
      icon: FaAppleAlt,
      title: "Healthy Snack Award",
      description: "Ensuring balanced, nutritious meals that promote lifelong healthy eating habits."
    },
    {
      icon: FaStar,
      title: "5-Star Hygiene Rating",
      description: "Maintaining the highest standards of cleanliness and food safety in our kitchens."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2a3d55 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply 
                      filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-8 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply 
                      filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            Award-Winning Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our commitment to exceptional care has earned us recognition and awards. At Little Haven, we continuously
            strive for excellence, ensuring your child receives the best possible start in life.
          </motion.p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} delay={index * 0.1} />
          ))}
        </div>

        {/* Future Ambitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 
                    max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Future Ambitions</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our journey doesn't stop here. We continuously aim for excellence, applying for sector-leading awards and
            striving for top inspection results. Your child deserves the best, and that's exactly what we're committed to
            delivering.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-8 rounded-xl 
                     font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Awards;
