import { motion } from "framer-motion";
import { FaPencilAlt, FaRunning, FaBrain, FaComments, FaTree, FaBook } from "react-icons/fa";

const ExperienceCard = ({ icon: Icon, title, description, index }) => (
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

const LearningExperiences = () => {
  const experiences = [
    {
      icon: FaPencilAlt,
      title: "Creative Exploration",
      description: "Art, music, and storytelling help children express themselves and develop imagination."
    },
    {
      icon: FaRunning,
      title: "Physical Play",
      description: "Movement and outdoor activities help build coordination, balance, and confidence."
    },
    {
      icon: FaBrain,
      title: "Cognitive Development",
      description: "Problem-solving activities encourage independent thinking and decision-making skills."
    },
    {
      icon: FaComments,
      title: "Social Interaction",
      description: "Group activities teach collaboration, communication, and empathy among children."
    },
    {
      icon: FaTree,
      title: "Nature-Based Learning",
      description: "Outdoor learning experiences foster a connection with nature and environmental awareness."
    },
    {
      icon: FaBook,
      title: "Early Literacy",
      description: "Storytime, phonics, and early reading activities build language skills and literacy development."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-blue-900" />

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
            Learning Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-blue-100 leading-relaxed"
          >
            Every child is unique, and so is their learning journey. Our carefully designed activities encourage children
            to explore, create, and develop key skills through hands-on experiences.
          </motion.p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>


      </motion.div>
    </section>
  );
};

export default LearningExperiences;
