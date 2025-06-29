import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaCertificate } from 'react-icons/fa';

const StaffCard = ({ name, role, qualifications, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden"
  >
    <div className="aspect-w-4 aspect-h-3">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-primary-600 font-medium mb-4">{role}</p>
      
      <div className="space-y-3">
        {qualifications.map((qual, index) => (
          <div key={index} className="flex items-start gap-2">
            <FaCertificate className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{qual}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Staff = () => {
  const staffMembers = [
    {
      name: "Sarah Johnson",
      role: "Nursery Manager",
      qualifications: [
        "Level 5 Diploma in Leadership for Health and Social Care",
        "Early Years Teacher Status",
        "First Aid Certified"
      ],
      image: "/images/staff/sarah.jpg"
    },
    {
      name: "Emma Davies",
      role: "Deputy Manager",
      qualifications: [
        "Level 3 Diploma in Early Years Education",
        "SENCO Trained",
        "First Aid Certified"
      ],
      image: "/images/staff/emma.jpg"
    },
    {
      name: "Bethan Morgan",
      role: "Senior Early Years Practitioner",
      qualifications: [
        "Level 3 Diploma in Early Years Education",
        "Welsh Language Specialist",
        "Forest School Leader"
      ],
      image: "/images/staff/bethan.jpg"
    }
  ];

  const stats = [
    {
      icon: FaUserGraduate,
      label: "Qualified Staff",
      value: "100%"
    },
    {
      icon: FaUsers,
      label: "Staff-to-Child Ratio",
      value: "1:4"
    },
    {
      icon: FaCertificate,
      label: "First Aid Trained",
      value: "100%"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-600">
            Meet our experienced and dedicated team of early years professionals who are committed to 
            providing the best care and education for your children.
          </p>
        </motion.div>

        {/* Staff Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-md"
            >
              <stat.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <StaffCard key={index} {...member} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff; 