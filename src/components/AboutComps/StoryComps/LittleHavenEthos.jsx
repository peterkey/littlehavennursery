import { motion } from "framer-motion";
import { FaBrain, FaChild, FaPalette, FaHome } from "react-icons/fa";

const EthosCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10 flex items-start gap-6">
        <div className="relative">
          <div className="absolute -inset-2 bg-primary-100 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity" />
          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 
                        rounded-full flex items-center justify-center shadow-lg transform 
                        group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-white text-xl" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 
                       transition-colors duration-300">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const LittleHavenEthos = () => {
  const ethosValues = [
    {
      icon: FaBrain,
      title: "Learning Through Play",
      description: "We follow the philosophy of 'learning to play, playing to learn,' ensuring children develop essential skills in a fun, engaging way."
    },
    {
      icon: FaChild,
      title: "Child-Led Exploration",
      description: "Our learning experiences are carefully designed to foster curiosity, independence, and critical thinking in every child."
    },
    {
      icon: FaPalette,
      title: "Creativity & Imagination",
      description: "We provide a variety of creative play activities that encourage self-expression, artistic development, and problem-solving."
    },
    {
      icon: FaHome,
      title: "A Nurturing Environment",
      description: "We create a warm, safe, and stimulating space where children feel comfortable, valued, and encouraged to explore."
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
            The Little Haven Ethos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At Little Haven, we believe that early childhood education is about much more than keeping children occupied.
            Our approach nurtures curiosity, creativity, and a lifelong love for learning through meaningful experiences.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ethosValues.map((value, index) => (
            <EthosCard key={index} {...value} index={index} />
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

export default LittleHavenEthos;
