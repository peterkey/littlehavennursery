import { motion } from "framer-motion";
import SEO from "../components/SEO/SEO";

const GovernmentFunding = () => {
  const fundingOptions = [
    {
      title: "Foundation Phase (3-4 Year Olds)",
      description: "All 3-4 year olds in Wales are entitled to 10 hours of free early education per week during term time.",
      eligibility: "Available to all children aged 3-4 years in Wales",
      hours: "10 hours per week",
      when: "Term time only (39 weeks per year)",
      notes: "Part of the Welsh Government's Foundation Phase curriculum"
    },
    {
      title: "Childcare Offer for Wales (3-4 Year Olds)",
      description: "Working parents can access an additional 20 hours of free childcare, giving a total of 30 hours per week.",
      eligibility: "Both parents must work (or single parent working) and earn at least £8,670 per year but less than £100,000 per year",
      hours: "30 hours per week (10 Foundation Phase + 20 Childcare Offer)",
      when: "Term time only (39 weeks per year)",
      notes: "Must apply through your local authority in Wales"
    },
    {
      title: "Flying Start (2-3 Year Olds)",
      description: "Some 2-3 year olds from lower-income families can access free childcare and early education.",
      eligibility: "Families living in Flying Start areas (check with your local authority)",
      hours: "12.5 hours per week",
      when: "Term time only (39 weeks per year)",
      notes: "Available in specific areas across Wales - check eligibility"
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Verify your child's age and your family's circumstances meet the Welsh Government criteria."
    },
    {
      step: 2,
      title: "Contact Local Authority",
      description: "Apply through your local council in Wales (not HMRC like in England)."
    },
    {
      step: 3,
      title: "Receive Confirmation",
      description: "Your local authority will confirm your eligibility and provide next steps."
    },
    {
      step: 4,
      title: "Give Details to Nursery",
      description: "Provide your confirmation details to us and we'll apply the funding to your account."
    }
  ];

  const welshSpecificInfo = [
    {
      title: "Foundation Phase",
      description: "Wales has its own early years curriculum called the Foundation Phase, which focuses on learning through play and active involvement.",
      details: [
        "10 hours free early education for all 3-4 year olds",
        "Welsh language development included",
        "Play-based learning approach",
        "Progress tracked through Foundation Phase Profile"
      ]
    },
    {
      title: "Childcare Offer for Wales",
      description: "This is Wales' equivalent to England's 30 hours scheme, but with different application processes and local authority management.",
      details: [
        "Additional 20 hours for working families",
        "Managed by local authorities, not HMRC",
        "Must be working and meet income criteria",
        "Can be used at registered childcare providers"
      ]
    },
    {
      title: "Flying Start",
      description: "A Welsh Government programme providing additional support for families in areas of high deprivation.",
      details: [
        "Free childcare for eligible 2-3 year olds",
        "Additional family support services",
        "Speech and language therapy",
        "Health visitor support"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Welsh Government Funding - Little Haven Nursery"
        description="Learn about Welsh Government funding options for childcare including Foundation Phase, Childcare Offer for Wales, and Flying Start."
        keywords={['Welsh government funding', 'Foundation Phase', 'Childcare Offer Wales', 'Flying Start', 'childcare funding Wales']}
        canonicalUrl="/fees/government-funding"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Welsh Government Funding
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-content mx-auto"
            >
              Access Welsh Government-funded childcare hours to reduce your childcare costs and give your child the best start in life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          
          {/* Funding Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Funding Options</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Welsh Government provides several funding schemes to help families with childcare costs. 
                Here's what's available and how to access it.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {fundingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Eligibility:</span>
                      <p className="text-gray-600">{option.eligibility}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Hours:</span>
                      <p className="text-gray-600">{option.hours}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">When:</span>
                      <p className="text-gray-600">{option.when}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Notes:</span>
                      <p className="text-gray-600">{option.notes}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Welsh-Specific Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welsh Government Schemes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Wales has its own unique approach to early years education and childcare funding.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {welshSpecificInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 rounded-xl p-8 border border-blue-200"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{info.title}</h3>
                  <p className="text-blue-800 mb-6">{info.description}</p>
                  
                  <ul className="space-y-2 text-sm text-blue-700">
                    {info.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Applying for Welsh Government funding is straightforward. Follow these simple steps to get started.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-xl p-8 border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Qualified staff and Foundation Phase curriculum activities</li>
                  <li>• Healthy snacks and meals</li>
                  <li>• Learning resources and materials</li>
                  <li>• Progress tracking through Foundation Phase Profile</li>
                  <li>• Welsh language development opportunities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Not Included</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Additional services (extra hours, special activities)</li>
                  <li>• Personal items (nappies, wipes, spare clothes)</li>
                  <li>• Transport to and from nursery</li>
                  <li>• Late collection fees</li>
                  <li>• Additional meals beyond the funded hours</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help with Welsh Funding?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-content mx-auto">
              Our team is here to help you understand and apply for Welsh Government funding. 
              We'll guide you through the process and answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=welsh-funding&source=government-funding-page"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg2 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              >
                Contact Us
              </a>
              <a 
                href="https://gov.wales/childcare-offer-wales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              >
                Welsh Government Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GovernmentFunding;
