import { motion } from 'framer-motion';
import { FaCookieBite, FaShieldAlt, FaCog, FaEye, FaTrash, FaEnvelope, FaPhone } from 'react-icons/fa';
import SEO from '../components/SEO/SEO';

const CookiesPolicy = () => {
  const lastUpdated = "2024-01-15"; // TODO: Update with actual last update date
  
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly",
      examples: ["Authentication", "Security", "Basic functionality"],
      icon: FaShieldAlt,
      color: "text-green-600"
    },
    {
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Page views", "User behavior", "Performance metrics"],
      icon: FaEye,
      color: "text-blue-600"
    },
    {
      title: "Functional Cookies",
      description: "Remember your preferences and enhance your experience",
      examples: ["Language settings", "Form preferences", "Personalization"],
      icon: FaCog,
      color: "text-purple-600"
    },
    {
      title: "Marketing Cookies",
      description: "Used to deliver relevant content and advertisements",
      examples: ["Social media", "Advertising", "Content recommendations"],
      icon: FaCookieBite,
      color: "text-orange-600"
    }
  ];

  const cookieDetails = [
    {
      name: "session_id",
      purpose: "Maintains your session while using the website",
      duration: "Session only",
      type: "Essential"
    },
    {
      name: "csrf_token",
      purpose: "Protects against cross-site request forgery attacks",
      duration: "Session only",
      type: "Essential"
    },
    {
      name: "language_pref",
      purpose: "Remembers your preferred language setting",
      duration: "1 year",
      type: "Functional"
    },
    {
      name: "analytics_id",
      purpose: "Tracks website usage for improvement purposes",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "marketing_consent",
      purpose: "Remembers your marketing preferences",
      duration: "1 year",
      type: "Marketing"
    }
  ];

  return (
    <>
      <SEO
        title="Cookies Policy"
        description="Learn about how Little Haven Nursery uses cookies on our website. Understand what cookies are, how we use them, and how you can manage your preferences."
        keywords={['cookies policy', 'website cookies', 'cookie preferences', 'privacy settings', 'nursery website']}
        canonicalUrl="/cookies-policy"
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
              Cookies Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 max-w-content mx-auto"
            >
              Understanding how we use cookies to improve your experience on our website.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you 
              visit our website. They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-600 mb-6">
              Cookies do not contain any personal information that could identify you individually, but they may 
              contain information about your device and how you interact with our website.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg2">
              <div className="flex">
                <FaCookieBite className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium">Cookie Notice</p>
                  <p className="text-blue-700 text-sm mt-1">
                    By continuing to use our website, you consent to our use of cookies in accordance with this policy. 
                    You can change your cookie preferences at any time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              We use different types of cookies for various purposes to enhance your browsing experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg2 p-8 sm:p-12 shadow-lg"
              >
                <div className="text-center mb-6">
                  <type.icon className={`w-12 h-12 ${type.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Cookies */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Specific Cookies We Use</h2>
            <p className="text-gray-600 mb-6">
              Below is a detailed list of the specific cookies we use on our website, their purpose, and how long they remain on your device:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg2 overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900 font-mono">{cookie.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{cookie.purpose}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{cookie.duration}</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-100 text-green-800' :
                          cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                          cookie.type === 'Functional' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              Some cookies on our website are set by third-party services that we use to enhance functionality and 
              analyze website performance. These services may include:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Google Analytics:</strong> Helps us understand how visitors use our website</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Social Media Platforms:</strong> Enable social sharing and integration features</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Payment Processors:</strong> Secure payment processing for online transactions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Content Delivery Networks:</strong> Improve website loading speed and performance</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              These third-party services have their own privacy policies and cookie practices. We recommend reviewing 
              their policies to understand how they handle your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-6">
              You have several options for managing cookies on our website:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h4>
                <p className="text-gray-600 mb-3">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Block all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Block only third-party cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Delete existing cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Set preferences for specific websites</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Cookie Consent Tool</h4>
                <p className="text-gray-600 mb-3">
                  We provide a cookie consent tool that allows you to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Accept or decline non-essential cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Modify your preferences at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>View detailed information about each cookie type</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Devices</h4>
                <p className="text-gray-600">
                  On mobile devices, you can manage cookies through your device's settings or the browser app you use. 
                  The process may vary depending on your device and operating system.
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg2 mt-6">
              <div className="flex">
                <FaTrash className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-yellow-800 font-medium">Important Note</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    Blocking certain cookies may affect the functionality of our website. Essential cookies cannot be 
                    disabled as they are necessary for basic website operation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates to Policy */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-content mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this cookies policy from time to time to reflect changes in our practices, technology, 
              or legal requirements. When we make changes, we will:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Update the "Last updated" date at the top of this policy</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Notify you of significant changes through our website or email</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Provide you with an opportunity to review and accept the updated policy</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-content mx-auto">
              If you have any questions about our use of cookies or this cookies policy, 
              please contact our team:
            </p>
            
            <div className="bg-gray-50 rounded-lg2 p-8 sm:p-12 max-w-2xl mx-auto">
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
                  We aim to respond to all cookie-related inquiries within 24 hours.
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
            <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-content mx-auto">
              If you need clarification on any aspect of our cookies policy or have concerns about how we use cookies, 
              please don't hesitate to get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:learn@littlehavennursery.co.uk"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200"
              >
                <FaEnvelope className="mr-2" />
                Contact Privacy Team
              </a>
              <a 
                href="/privacy-policy"
                className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg2 shadow-lg hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200"
              >
                View Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CookiesPolicy;
