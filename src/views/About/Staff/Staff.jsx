import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaCertificate } from 'react-icons/fa';
import fiona from "../../../assets/Fiona.jpeg"
import jessica from "../../../assets/Jessica.jpeg"
import Building from "../../../assets/Building.jpg"

const StaffCard = ({ name, role, qualifications, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-lg2 shadow-lg overflow-hidden"
  >
    <div className="h-64 w-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-[center_20%]"
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
      name: "Fiona Williams",
      role: "Nursery Manager",
      qualifications: [
        "BEd (Hons) Early Years Education",
        "BEd (Hons) Leadership and Management",
        "Emergency and Prediatric First Aid Certified",
        "Fire Warden",
        "Level 3 Catering",
        "EpiPen Certified"
      ],
      image: fiona
    },
    {
      name: "Jessica Williams-Key",
      role: "Deputy Manager",
      qualifications: [
        "Level 5 Diploma in Early Years Education",
        "Level 5 Diploma in Leadership and Management",
        "Emergency and Prediatric First Aid Certified",
        "Fire Warden",
        "Level 3 Catering",
        "EpiPen Certified"
      ],
      image: jessica
    },
  ];

  const stats = [
    {
      icon: FaUserGraduate,
      label: "Qualified Staff",
      value: "100%"
    },
    {
      icon: FaUsers,
      label: "Staff Ratios",
      value: "1:3 - 1:8"
    },
    {
      icon: FaCertificate,
      label: "First Aid Trained",
      value: "100%"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={Building} 
            alt="Little Haven Nursery Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-600/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100"
            >
              Meet our experienced and dedicated team of early years professionals
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-white rounded-lg2 p-8 sm:p-12 text-center shadow-md"
            >
              <stat.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {staffMembers.map((member, index) => (
            <StaffCard key={index} {...member} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Staff; 