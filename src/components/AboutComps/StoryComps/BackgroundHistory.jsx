import { motion } from "framer-motion";
import { FaFlag, FaUsers, FaHome, FaStar } from "react-icons/fa";

const TimelineItem = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className="flex items-start gap-6">
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
  </motion.div>
);

const BackgroundHistory = () => {
  const timelineItems = [
    {
      icon: FaFlag,
      title: "Early Beginnings",
      description: "Our story started with a commitment to community-led childcare, working closely with families to create nurturing learning environments for young children."
    },
    {
      icon: FaUsers,
      title: "Flying Start Program",
      description: "We became a leading provider in the Welsh Government's Flying Start initiative, delivering essential early years education to thousands of children across Cardiff."
    },
    {
      icon: FaHome,
      title: "Transition to Private Nurseries",
      description: "With a wealth of experience, we shifted our focus to private nurseries, ensuring that every child benefits from high-quality, tailored early education."
    },
    {
      icon: FaStar,
      title: "A Legacy of Excellence",
      description: "Today, we continue to provide outstanding childcare, fostering creativity, curiosity, and independent learning in a warm and inclusive environment."
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
            Our Background & Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            With over two decades of experience in early childhood education, our journey has always been centered on
            helping children flourish. From our early beginnings in public service to establishing high-quality private
            childcare, every step has been about ensuring the best start in life.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-primary-200" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
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

export default BackgroundHistory;
