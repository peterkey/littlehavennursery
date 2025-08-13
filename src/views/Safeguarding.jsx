import { motion } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaPhone, FaEnvelope } from 'react-icons/fa';
import SEO from '../components/SEO/SEO';

const Safeguarding = () => {
  const safeguardingPrinciples = [
    {
      icon: "🛡️",
      title: "Prevention",
      description: "We work to prevent harm to children by creating a safe environment and identifying risks early"
    },
    {
      icon: "👁️",
      title: "Vigilance",
      description: "Our staff are trained to recognise signs of abuse and neglect, and know how to respond appropriately"
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work closely with parents, carers, and other professionals to protect children's welfare"
    },
    {
      icon: "📋",
      title: "Documentation",
      description: "All concerns are properly recorded and reported according to statutory requirements"
    }
  ];

  const reportingProcedures = [
    {
      step: "1",
      title: "Recognise",
      description: "Staff identify signs of abuse, neglect, or harm to a child"
    },
    {
      step: "2",
      title: "Record",
      description: "Immediate written record of concerns with date, time, and details"
    },
    {
      step: "3",
      title: "Report",
      description: "Report to Designated Safeguarding Lead (DSL) within 24 hours"
    },
    {
      step: "4",
      title: "Refer",
      description: "DSL makes referral to Children's Services if necessary"
    }
  ];

  const contactInfo = {
    dsl: {
      name: "Fiona Williams",
      role: "Nursery Manager",
      phone: "02920891825",
      email: "learn@littlehavennursery.co.uk"
    },
    deputy: {
      name: "Jessica Williams-Key",
      role: "Deputy Manager",
      phone: "02920891825",
      email: "learn@littlehavennursery.co.uk"
    }
  };

  return (
    <>
      <SEO
        title="Safeguarding & Policies"
        description="Learn about our comprehensive safeguarding policies and procedures. Understand how we protect children's welfare at Little Haven Nursery."
        keywords={['safeguarding', 'child protection', 'nursery policies', 'safety procedures', 'Cardiff nursery']}
        canonicalUrl="/safeguarding"
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
              Safeguarding & Policies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 max-w-content mx-auto"
            >
              Your child's safety and wellbeing is our top priority. 
              We have comprehensive policies and procedures to protect every child in our care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Safeguarding Principles */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Safeguarding Principles</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              We follow the highest standards of child protection and safeguarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeguardingPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Procedures */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safeguarding Procedures</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              Clear steps our staff follow to protect children's welfare
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reportingProcedures.map((procedure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 sm:p-12 rounded-lg2 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {procedure.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{procedure.title}</h3>
                  </div>
                  <p className="text-gray-600">{procedure.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safeguarding Contacts</h2>
            <p className="text-lg text-gray-600 max-w-content mx-auto">
              Our designated safeguarding leads are here to help with any concerns
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DSL */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 sm:p-12 rounded-lg2 shadow-md"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{contactInfo.dsl.name}</h3>
                  <p className="text-primary-600 font-medium">{contactInfo.dsl.role}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="w-4 h-4 text-gray-500" />
                    <a href={`tel:${contactInfo.dsl.phone}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.dsl.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-4 h-4 text-gray-500" />
                    <a href={`mailto:${contactInfo.dsl.email}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.dsl.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Deputy DSL */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 sm:p-12 rounded-lg2 shadow-md"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{contactInfo.deputy.name}</h3>
                  <p className="text-primary-600 font-medium">{contactInfo.deputy.role}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="w-4 h-4 text-gray-500" />
                    <a href={`tel:${contactInfo.deputy.phone}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.deputy.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-4 h-4 text-gray-500" />
                    <a href={`mailto:${contactInfo.deputy.email}`} className="text-primary-600 hover:text-primary-700">
                      {contactInfo.deputy.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 sm:py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 sm:p-12 rounded-lg2 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaExclamationTriangle className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-bold text-red-900">Emergency Safeguarding Concerns</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">
                  If you have an immediate concern about a child's safety or welfare, please contact us immediately.
                </p>
                <p className="text-gray-700">
                  <strong>For urgent concerns outside our opening hours:</strong> Contact the police on 999 or 
                  Children's Services on 029 2087 2087 (Cardiff Council).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:02920891825"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg2 hover:bg-red-700 transition-colors"
                >
                  <FaPhone className="w-4 h-4" />
                  Call Nursery
                </a>
                <a
                  href="mailto:learn@littlehavennursery.co.uk"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg2 hover:bg-red-50 transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Email DSL
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions About Our Policies?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-content mx-auto">
            We're committed to transparency and are happy to discuss any aspect of our safeguarding 
            procedures or policies with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:02920891825"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg2 shadow-lg hover:bg-primary-50 transition-all duration-200"
            >
              <FaPhone className="mr-2" />
              Call Us
            </a>
            <a
              href="mailto:learn@littlehavennursery.co.uk"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg2 hover:bg-white/10 transition-all duration-200"
            >
              <FaEnvelope className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Safeguarding;
