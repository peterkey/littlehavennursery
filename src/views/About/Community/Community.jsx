import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRocket, FaChild, FaBuilding, FaCubes } from "react-icons/fa";

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};

const PartnerCard = ({ icon: Icon, title, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
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
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {link && (
          <a
            href={link}
            className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold 
                     hover:bg-primary-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const CommunitySection = () => {
  const partners = [
    {
      icon: FaMapMarkerAlt,
      title: "Cardiff Nurseries",
      description: "Help finding a nursery in your part of Cardiff. We are based in St Fagans, near Radyr.",
      link: "#"
    },
    {
      icon: FaRocket,
      title: "Flying Start",
      description: "While we are not a Flying Start centre, we work closely with them, and their high standards continue to inform our practice.",
      link: "#"
    },
    {
      icon: FaChild,
      title: "30 Hour Childcare Offer",
      description: "We have signed up for the 30-hour childcare offer in Cardiff, providing 17.5 hours of funded wraparound care and 30 hours in the 9 weeks of the holidays."
    },
    {
      icon: FaBuilding,
      title: "Yellow Dot",
      description: "Our friends in Hampshire run 12 nurseries between Winchester and Southampton.",
      link: "#"
    },
    {
      icon: FaCubes,
      title: "Community Playthings",
      description: "This company makes all the purpose-built furnishings we use at Little Haven.",
      link: "#"
    }
  ];

  return (
    <motion.section variants={sectionVariants} className="py-24">
      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary-600 mb-6"
          >
            Partners & Useful Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We work with various organizations that support early years education, helping families access high-quality
            childcare, resources, and support services.
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CommunitySection;
