import { motion } from 'framer-motion';
import { FaUtensils, FaRunning, FaLeaf, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 
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

const HealthyLifestyles = () => {
  const features = [
    {
      icon: FaUtensils,
      title: "Nutritious Meals",
      description: "Our carefully planned meals are packed with essential nutrients, helping children stay energised and ready to learn."
    },
    {
      icon: FaRunning,
      title: "Active Play",
      description: "Daily activities promote movement and exercise, ensuring children develop strong, healthy bodies."
    },
    {
      icon: FaLeaf,
      title: "Healthy Habits",
      description: "We teach children about healthy choices in a fun and engaging way, building lifelong wellness habits."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-800">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute -bottom-8 left-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply 
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
            Promoting Healthy Lifestyles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-green-100 leading-relaxed"
          >
            We believe in fostering healthy habits early on. Through nutritious meals and engaging activities, we
            encourage children to enjoy a balanced and active lifestyle.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
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
          <Link to="/about/foodandnutrition">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-xl 
                       font-bold shadow-lg hover:shadow-xl transition-all duration-300 
                       hover:bg-green-50"
            >
              <FaArrowRight className="mr-2" />
              Check Out Our Menu
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HealthyLifestyles;
