import { motion } from 'framer-motion';
import { FaBaby, FaChild, FaUserGraduate } from 'react-icons/fa';

const AgeGroupCard = ({ icon: Icon, title, ageRange, description, features, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden"
  >
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
          <Icon className="text-2xl text-primary-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-primary-600 font-medium">{ageRange}</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const AgeGroups = () => {
  const ageGroups = [
    {
      icon: FaBaby,
      title: "Baby Room",
      ageRange: "6 weeks - 2 years",
      description: "Our dedicated baby room provides a safe, nurturing environment where your little ones can explore, learn, and grow at their own pace.",
      features: [
        "Stand-alone room with dedicated milk kitchen",
        "Free play exploration opportunities",
        "Cosy nap time area",
        "Separate outdoor area",
        "Curiosity Approach ethos"
      ]
    },
    {
      icon: FaChild,
      title: "Toddler Room",
      ageRange: "2-3 years",
      description: "A stimulating environment designed to encourage independence, social skills, and early learning through play.",
      features: [
        "Age-appropriate activities and toys",
        "Structured learning through play",
        "Outdoor play area access",
        "Social development focus",
        "Potty training support"
      ]
    },
    {
      icon: FaUserGraduate,
      title: "Kindergarten",
      ageRange: "3-5 years",
      description: "Our kindergarten space is designed to prepare children for school while maintaining the joy of learning through play.",
      features: [
        "Custom-designed learning environment",
        "Quiet 'Cwtch' area for rest",
        "Welsh language support",
        "School preparation activities",
        "Outdoor learning opportunities"
      ]
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Age Groups</h2>
          <p className="text-lg text-gray-600">
            From tiny babies to confident kindergarteners, we provide age-appropriate care and education 
            for every stage of your child's early development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ageGroups.map((group, index) => (
            <AgeGroupCard key={index} {...group} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups; 