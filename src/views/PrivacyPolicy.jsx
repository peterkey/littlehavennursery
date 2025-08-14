import { motion } from 'framer-motion';
import { FaShieldAlt, FaEye, FaDatabase, FaUserCheck, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "2024-08-10"; // Last updated: August 10, 2024
  
  const dataCategories = [
    {
      title: "Personal Information",
      description: "Names, contact details, emergency contacts, and family information",
      examples: ["Child's full name", "Parent/guardian contact details", "Emergency contact information"]
    },
    {
      title: "Health & Medical",
      description: "Medical conditions, allergies, and health requirements",
      examples: ["Allergies and dietary restrictions", "Medical conditions", "Medication requirements"]
    },
    {
      title: "Educational Records",
      description: "Learning progress, observations, and development milestones",
      examples: ["EYFS progress reports", "Learning observations", "Development assessments"]
    },
    {
      title: "Attendance Records",
      description: "Daily attendance, arrival and departure times",
      examples: ["Daily attendance logs", "Arrival and departure times", "Absence records"]
    }
  ];

  const dataRights = [
    {
      title: "Right to Access",
      description: "Request a copy of your personal data",
      icon: FaEye
    },
    {
      title: "Right to Rectification",
      description: "Correct inaccurate or incomplete data",
      icon: FaUserCheck
    },
    {
      title: "Right to Erasure",
      description: "Request deletion of your personal data",
      icon: FaDatabase
    },
    {
      title: "Right to Object",
      description: "Object to processing of your data",
      icon: FaShieldAlt
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Little Haven Nursery protects your privacy and handles personal information. Our comprehensive privacy policy ensures your data is secure and used responsibly."
        keywords={['privacy policy', 'data protection', 'GDPR', 'personal information', 'nursery privacy']}
        canonicalUrl="/privacy-policy"
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
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 max-w-content mx-auto"
            >
              Your privacy is important to us. Learn how we protect and handle your personal information.
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
              Little Haven Nursery is committed to protecting your privacy and ensuring the security of your personal information. 
              This privacy policy explains how we collect, use, store, and protect your data in accordance with the General Data 
              Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
            <p className="text-gray-600 mb-6">
              We are the data controller for the personal information we collect about you and your child. This means we are 
              responsible for deciding how we use your personal information and ensuring it is handled lawfully and securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data We Collect</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              We collect and process various types of personal information to provide safe and effective childcare services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg2 p-8 sm:p-12 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Data */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Data</h2>
            <p className="text-gray-600 mb-6">
              We use your personal information for the following purposes:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Providing childcare services:</strong> To ensure your child receives appropriate care and education</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Health and safety:</strong> To maintain a safe environment and respond to medical needs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Communication:</strong> To keep you informed about your child's progress and nursery activities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Legal obligations:</strong> To comply with Ofsted requirements and other regulatory obligations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Emergency situations:</strong> To contact you or emergency services when necessary</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your data only in 
              the following circumstances:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>With your consent:</strong> When you have given us explicit permission to share specific information</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Legal requirements:</strong> When required by law or regulatory bodies (e.g., Ofsted, local authorities)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Emergency situations:</strong> When necessary to protect your child's health and safety</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Service providers:</strong> With trusted third parties who help us provide our services (e.g., IT support, insurance)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Secure storage systems with encryption</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Access controls and authentication procedures</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Regular security assessments and updates</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Staff training on data protection and security</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Incident response procedures</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              Under data protection law, you have several rights regarding your personal information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg2 p-8 sm:p-12 shadow-lg text-center"
              >
                <right.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{right.title}</h3>
                <p className="text-gray-600">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was 
              collected, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
            </p>
            <p className="text-gray-600 mb-6">
              Generally, we retain:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Child records:</strong> Until the child reaches 25 years of age (Ofsted requirement)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Financial records:</strong> For 7 years (tax and accounting requirements)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Incident reports:</strong> For 3 years after the incident</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Marketing communications:</strong> Until you unsubscribe or withdraw consent</span>
              </li>
            </ul>
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
              If you have any questions about this privacy policy or how we handle your personal information, 
              please contact our Data Protection Officer:
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
                  We aim to respond to all privacy-related inquiries within 30 days on working days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates to Policy */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. When we make changes, we will:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Update the "Last updated" date at the top of this policy</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Notify you of significant changes via email or through our website</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Provide you with an opportunity to review the changes before they take effect</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              We encourage you to review this privacy policy periodically to stay informed about how we protect your information.
            </p>
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
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-content mx-auto">
              If you need clarification on any aspect of our privacy policy or have concerns about how we handle your data, 
              please don't hesitate to get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:learn@littlehavennursery.co.uk"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200"
              >
                <FaEnvelope className="mr-2" />
                Contact Privacy Officer
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg2 shadow-lg hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200"
              >
                General Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
