import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuestionCircle, FaFileAlt, FaExclamationTriangle } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full py-4 flex items-center justify-between text-left"
    >
      <span className="text-lg font-medium text-gray-900">{question}</span>
      <svg
        className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="pb-4"
      >
        <p className="text-gray-600">{answer}</p>
      </motion.div>
    )}
  </div>
);

const PolicyCard = ({ icon: Icon, title, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl p-6 shadow-md"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          View Policy
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

const ParentResources = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Friday from 7:30 AM to 5:30 PM. We offer flexible drop-off and pick-up times to accommodate working parents."
    },
    {
      question: "What age groups do you accept?",
      answer: "We welcome children from 6 weeks to 5 years old. We have dedicated rooms for different age groups to ensure age-appropriate care and activities."
    },
    {
      question: "Do you provide meals?",
      answer: "Yes, we provide healthy, nutritious meals throughout the day, including breakfast, lunch, and afternoon snacks. We cater to all dietary requirements."
    },
    {
      question: "What is your staff-to-child ratio?",
      answer: "We maintain excellent staff-to-child ratios that exceed the minimum requirements: 1:3 for babies, 1:4 for toddlers, and 1:8 for pre-school children."
    },
    {
      question: "Do you offer funded places?",
      answer: "Yes, we offer funded places for eligible children aged 3-5 years. We also accept childcare vouchers and tax-free childcare payments."
    }
  ];

  const policies = [
    {
      icon: FaFileAlt,
      title: "Parent Handbook",
      description: "Comprehensive guide covering all aspects of nursery life, from daily routines to policies and procedures.",
      link: "/documents/parent-handbook.pdf"
    },
    {
      icon: FaExclamationTriangle,
      title: "Emergency Procedures",
      description: "Detailed information about our emergency procedures, including fire drills and medical emergencies.",
      link: "/documents/emergency-procedures.pdf"
    },
    {
      icon: FaQuestionCircle,
      title: "Illness Policy",
      description: "Guidelines for managing illness and infection control to ensure the health and safety of all children.",
      link: "/documents/illness-policy.pdf"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Parent Resources</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our nursery, from frequently asked questions to important policies and procedures.
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Important Policies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <PolicyCard key={index} {...policy} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentResources; 