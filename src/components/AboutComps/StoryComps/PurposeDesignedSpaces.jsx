import { motion } from "framer-motion";
import { FaSun, FaHome, FaBook, FaLeaf, FaPaintBrush, FaChild } from "react-icons/fa";

const SpaceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
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

const PurposeDesignedSpaces = () => {
  const spaces = [
    {
      icon: FaSun,
      title: "Natural Light",
      description: "Large windows and open spaces bring in plenty of natural light, creating a bright and welcoming atmosphere."
    },
    {
      icon: FaHome,
      title: "Homely Atmosphere",
      description: "Our spaces are designed to feel warm and inviting, making children feel secure and comfortable throughout the day."
    },
    {
      icon: FaBook,
      title: "Dedicated Learning Zones",
      description: "Each area is purposefully structured to support different types of learning, from reading corners to sensory play zones."
    },
    {
      icon: FaLeaf,
      title: "Outdoor Exploration",
      description: "Safe and engaging outdoor spaces encourage movement, discovery, and a connection with nature."
    },
    {
      icon: FaPaintBrush,
      title: "Creative Spaces",
      description: "Art, music, and role-play areas help children develop their imagination and creative thinking."
    },
    {
      icon: FaChild,
      title: "Safe & Stimulating",
      description: "Every detail, from furniture to play equipment, is chosen with safety and learning potential in mind."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2a3d55 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply 
                    filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply 
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
            className="text-4xl font-bold text-primary-600 mb-6"
          >
            Purpose-Designed Spaces
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our nurseries are carefully designed to create safe, engaging, and inspiring environments where children feel
            comfortable and eager to learn. Every space is tailored to encourage creativity, exploration, and growth.
          </motion.p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {spaces.map((space, index) => (
            <SpaceCard key={index} {...space} index={index} />
          ))}
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

export default PurposeDesignedSpaces;
