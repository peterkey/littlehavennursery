import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBaby, FaUsers, FaBook, FaUtensils, FaHeart, FaHistory, FaLightbulb, FaFileAlt } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

const AboutUsContent = () => {
  const links = [
    {
      title: "Our Mission",
      path: "/about/ourmission",
      description: "Discover our commitment to providing the best start in life for every child.",
      icon: FaHeart
    },
    {
      title: "Our Story",
      path: "/about/story",
      description: "Learn about our journey and the values that drive us forward.",
      icon: FaHistory
    },
    {
      title: "Our Approach",
      path: "/about/approach",
      description: "Explore our unique approach to early years education and care.",
      icon: FaLightbulb
    },
    {
      title: "Age Groups",
      path: "/about/agegroups",
      description: "Find out about our age-specific rooms and activities.",
      icon: FaBaby
    },
    {
      title: "Our Team",
      path: "/about/staff",
      description: "Meet our experienced and dedicated team of early years professionals.",
      icon: FaUsers
    },
    {
      title: "Parent Resources",
      path: "/about/parentresources",
      description: "Access FAQs, policies, and important information for parents.",
      icon: FaFileAlt
    },
    {
      title: "Food & Nutrition",
      path: "/about/foodandnutrition",
      description: "Learn about our healthy meal plans and dietary accommodations.",
      icon: FaUtensils
    },
    {
      title: "Our Community",
      path: "/about/community",
      description: "See how we engage with and support our local community.",
      icon: FaUsers
    }
  ];

  return (
    <div className="w-[800px] p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-primary-500">About Us</h3>
        <p className="text-sm text-neutral-600">Learn more about our nursery, our values, and our approach to early years education</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="group relative"
          >
            <Link
              to={link.path}
              className="block p-4 rounded-xl hover:bg-primary-50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg shadow-primary-300/30 transition-all duration-300">
                    <link.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">
                    {link.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 group-hover:text-neutral-700">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
