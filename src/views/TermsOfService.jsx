import { motion } from 'framer-motion';
import { FaFileContract, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = "2024-01-15"; // TODO: Update with actual last update date
  
  const keyTerms = [
    {
      title: "Service Agreement",
      description: "Terms governing the provision of childcare services",
      icon: FaFileContract
    },
    {
      title: "Parent Responsibilities",
      description: "Obligations and expectations for parents/guardians",
      icon: FaCheckCircle
    },
    {
      title: "Nursery Obligations",
      description: "Our commitments to providing quality care",
      icon: FaCheckCircle
    },
    {
      title: "Termination",
      description: "Conditions for ending the service agreement",
      icon: FaTimesCircle
    }
  ];

  const parentResponsibilities = [
    "Ensure children arrive on time and are collected promptly",
    "Provide accurate medical and emergency contact information",
    "Notify the nursery of any changes to contact details",
    "Ensure children are appropriately dressed for activities",
    "Support the nursery's policies and procedures",
    "Pay fees on time and in accordance with the fee structure",
    "Attend parent meetings and review sessions when requested"
  ];

  const nurseryObligations = [
    "Provide a safe, nurturing, and stimulating environment",
    "Follow EYFS curriculum and Ofsted requirements",
    "Maintain appropriate staff-to-child ratios",
    "Provide regular updates on child development and progress",
    "Ensure all staff are qualified and DBS-checked",
    "Maintain appropriate insurance and health and safety standards",
    "Handle complaints and concerns promptly and professionally"
  ];

  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read our terms of service for Little Haven Nursery. Understand the agreement between parents and the nursery, including responsibilities, policies, and procedures."
        keywords={['terms of service', 'nursery agreement', 'parent responsibilities', 'childcare terms', 'nursery policies']}
        canonicalUrl="/terms-of-service"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Terms of Service
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 max-w-content mx-auto"
            >
              Understanding the agreement between parents and Little Haven Nursery.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="mt-6 text-primary-200"
            >
              <p>Last updated: {lastUpdated}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-600 mb-6">
              These Terms of Service ("Terms") govern the provision of childcare services by Little Haven Nursery 
              ("we," "us," or "our") to parents and guardians ("you" or "your") and their children.
            </p>
            <p className="text-gray-600 mb-6">
              By enrolling your child at Little Haven Nursery, you agree to be bound by these Terms. Please read 
              them carefully before proceeding with enrollment. If you have any questions, please contact us for clarification.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg2">
              <div className="flex">
                <FaExclamationTriangle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium">Important Notice</p>
                  <p className="text-blue-700 text-sm mt-1">
                    These terms are legally binding. By enrolling your child, you acknowledge that you have read, 
                    understood, and agree to these terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Terms Overview</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              These terms cover the essential aspects of our service agreement and mutual responsibilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg2 p-8 sm:p-12 shadow-lg text-center"
              >
                <term.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Description</h2>
            <p className="text-gray-600 mb-6">
              Little Haven Nursery provides early years education and childcare services for children aged 3 months 
              to 5 years. Our services include:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Full-time and part-time childcare options</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Early Years Foundation Stage (EYFS) curriculum delivery</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Nutritious meals and snacks</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Regular progress reports and parent consultations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Safe and stimulating learning environments</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              Services are provided during our published opening hours, excluding bank holidays and scheduled closure periods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parent Responsibilities */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Parent Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              As a parent or guardian, you have certain responsibilities to ensure the smooth operation of our services 
              and the well-being of your child:
            </p>
            <ul className="space-y-4 text-gray-600">
              {parentResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6">
              Failure to meet these responsibilities may result in the suspension or termination of services, 
              as outlined in our policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nursery Obligations */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nursery Obligations</h2>
            <p className="text-gray-600 mb-6">
              We are committed to providing high-quality childcare services and will fulfill the following obligations:
            </p>
            <ul className="space-y-4 text-gray-600">
              {nurseryObligations.map((obligation, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{obligation}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6">
              We will notify you promptly of any significant changes to our services or policies that may affect your child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fees and Payment */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fees and Payment</h2>
            <p className="text-gray-600 mb-6">
              Our fee structure and payment terms are as follows:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Fee Schedule:</strong> Fees are reviewed annually and may be subject to change with 30 days' notice</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Payment Terms:</strong> Fees are due monthly in advance, typically on the 1st of each month</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Late Payments:</strong> Late payments may incur additional charges and could result in service suspension</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Funding:</strong> We accept various funding options including 30 hours free childcare where eligible</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              For detailed fee information and Welsh Government funding eligibility, please refer to our Fees & Welsh Funding page or contact our office.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Health and Safety */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health and Safety</h2>
            <p className="text-gray-600 mb-6">
              The health and safety of all children, staff, and visitors is our top priority. We maintain strict 
              health and safety protocols including:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Regular risk assessments and safety inspections</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Staff training in first aid and emergency procedures</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Infection control and hygiene practices</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Secure premises with controlled access</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Emergency evacuation procedures</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              Parents must inform us immediately of any health concerns, allergies, or medical conditions that may affect their child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Termination and Withdrawal */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination and Withdrawal</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate this agreement under the following conditions:
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Parent Withdrawal</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Written notice of at least 4 weeks is required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fees are payable for the notice period</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>All outstanding fees must be settled</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Nursery Termination</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Serious breach of terms or policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Non-payment of fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Behavior that compromises the safety of other children or staff</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              In all cases, we will work with families to resolve issues before considering termination of services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Complaints and Disputes */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complaints and Disputes</h2>
            <p className="text-gray-600 mb-6">
              We are committed to resolving any concerns or complaints promptly and fairly. Our complaints procedure includes:
            </p>
            <ol className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <span><strong>Informal Discussion:</strong> Initial discussion with the nursery manager to resolve the issue</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <span><strong>Formal Complaint:</strong> Written complaint submitted to the nursery management</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <span><strong>Investigation:</strong> Thorough investigation and response within 28 days</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <span><strong>External Review:</strong> If unresolved, referral to Ofsted or other appropriate bodies</span>
              </li>
            </ol>
            <p className="text-gray-600 mt-6">
              We encourage open communication and will work with families to resolve any issues amicably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-content mx-auto">
              If you have any questions about these terms of service or need clarification on any points, 
              please contact our management team:
            </p>
            
            <div className="bg-white rounded-lg2 p-8 sm:p-12 shadow-lg max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <FaEnvelope className="text-primary-600" />
                  <span className="text-gray-700">learn@littlehavennursery.co.uk</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <FaPhone className="text-primary-600" />
                  <span className="text-gray-700">02920891825</span>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We aim to respond to all inquiries within 24 hours on working days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-content mx-auto">
              If you're satisfied with our terms of service and ready to enroll your child, 
              we'd love to welcome you to our Little Haven family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/admissions"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200"
              >
                Start Enrollment
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg2 shadow-lg hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200"
              >
                Ask Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
