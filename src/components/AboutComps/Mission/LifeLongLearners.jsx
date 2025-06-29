import { motion } from 'framer-motion';
import { FaBrain, FaPalette, FaSmile } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 
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

const LifelongLearners = () => {
  const features = [
    {
      icon: FaBrain,
      title: "Curiosity & Imagination",
      description: "We encourage children to ask questions, explore ideas, and think creatively, setting the stage for a lifetime of discovery."
    },
    {
      icon: FaPalette,
      title: "Creativity & Play",
      description: "Learning through play is at the heart of our approach, helping children develop problem-solving skills and confidence."
    },
    {
      icon: FaSmile,
      title: "Exciting First Experiences",
      description: "We create a fun, stimulating environment where children build positive memories of learning that last a lifetime."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2a3d55 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

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
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            Lifelong Learners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At Little Haven, we inspire children to be enthusiastic, curious learners. Through play, creativity, and
            exploration, we lay the foundation for a lifelong love of learning.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>

        {/* Decorative Shapes */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 
                     rounded-full opacity-20 blur-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LifelongLearners;
