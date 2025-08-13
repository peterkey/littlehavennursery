import { motion } from "framer-motion";
import { FaUserTie, FaUserCog, FaUsers, FaHeart, FaGraduationCap, FaAward } from "react-icons/fa";

const TeamCard = ({ icon: Icon, title, description, index }) => (
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

const AmazingTeam = () => {
  const teamRoles = [
    {
      icon: FaUserTie,
      title: "Nursery Managers",
      description: "Our managers ensure smooth day-to-day operations, fostering a safe and enriching learning environment."
    },
    {
      icon: FaUserCog,
      title: "Deputy Managers",
      description: "Supporting the managers, our deputy team ensures high-quality care and learning experiences every day."
    },
    {
      icon: FaUsers,
      title: "Childcare Practitioners",
      description: "Our qualified practitioners provide engaging, educational play experiences tailored to each child's needs."
    },
    {
      icon: FaHeart,
      title: "Support Staff",
      description: "From administrators to assistants, our support team keeps our nurseries running smoothly behind the scenes."
    },
    {
      icon: FaGraduationCap,
      title: "Trainees & Apprentices",
      description: "We mentor and support future childcare professionals through structured training and development programs."
    },
    {
      icon: FaAward,
      title: "Ongoing Training",
      description: "Our team continuously expands their knowledge through specialized training in early childhood education."
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
            An Amazing Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-blue-100 leading-relaxed"
          >
            Our dedicated team of childcare professionals is the heart of our nurseries. With extensive experience,
            passion, and a commitment to excellence, they provide a nurturing and stimulating environment for every child.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamRoles.map((role, index) => (
            <TeamCard key={index} {...role} index={index} />
          ))}
        </div>


      </motion.div>
    </section>
  );
};

export default AmazingTeam;
