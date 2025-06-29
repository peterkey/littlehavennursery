import { motion } from "framer-motion";
import { FaSmile, FaCompass } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-blue-500 
                      rounded-xl flex items-center justify-center shadow-lg transform 
                      group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white text-2xl" />
        </div>
        <h4 className="text-xl font-bold text-primary-900 mb-3">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const ChildhoodMatters = () => {
  const features = [
    {
      icon: FaSmile,
      title: "The Power of Play",
      description: "Play is not just fun—it's how children process the world, develop social skills, and explore their creativity."
    },
    {
      icon: FaCompass,
      title: "Exploring the World",
      description: "Whether indoors or outdoors, we encourage children to engage with nature and ask questions about the world around them."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-blue-900">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute -bottom-8 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply 
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
            Childhood is a Special Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-blue-100 leading-relaxed"
          >
            Childhood is not just preparation for adulthood—it's a valuable time in itself. Our goal is to nurture a
            love for learning that lasts a lifetime.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Features */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary-100/20 rounded-2xl transform -rotate-6" />
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-primary-200">
              <img
                src="/images/children-playing.jpg"
                alt="Children playing and learning"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-300/20 rounded-full blur-lg" />
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fff' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ChildhoodMatters;
