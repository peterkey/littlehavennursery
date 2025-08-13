import { motion } from "framer-motion";
import SEO from "../components/SEO/SEO";

const TaxFreeChildcare = () => {
  const schemeDetails = [
    {
      title: "How It Works",
      description: "For every £8 you pay into your childcare account, the government will add £2, up to a maximum of £2,000 per child per year.",
      icon: "💰",
      details: [
        "Government contributes 20% of your childcare costs",
        "Maximum government contribution: £2,000 per child per year",
        "Maximum you can pay in: £8,000 per child per year",
        "Available for children up to age 11 (or 17 if disabled)"
      ]
    },
    {
      title: "Eligibility",
      description: "Both parents must be working and earning at least the equivalent of 16 hours at the National Living Wage.",
      icon: "✅",
      details: [
        "Both parents must be working (or single parent working)",
        "Minimum earnings: £8,670 per year each",
        "Maximum earnings: £100,000 per year each",
        "Child must be 11 or under (or 17 if disabled)",
        "Available across the UK including Wales"
      ]
    },
    {
      title: "Benefits",
      description: "Save up to £2,000 per child per year on your childcare costs through this UK-wide government scheme.",
      icon: "🎯",
      details: [
        "Save up to £2,000 per child annually",
        "No need to wait for tax returns",
        "Flexible - use when you need it",
        "Can be combined with Welsh Government funding",
        "Works alongside Foundation Phase and Childcare Offer"
      ]
    }
  ];

  const howToUse = [
    {
      step: 1,
      title: "Open an Account",
      description: "Apply online through HMRC to open your Tax-Free Childcare account."
    },
    {
      step: 2,
      title: "Add Money",
      description: "Pay money into your account. For every £8, the government adds £2."
    },
    {
      step: 3,
      title: "Pay for Childcare",
      description: "Use the money in your account to pay your childcare provider directly."
    },
    {
      step: 4,
      title: "Keep Topped Up",
      description: "Continue adding money to maintain your 20% government contribution."
    }
  ];

  const welshIntegration = [
    {
      title: "Combining with Welsh Funding",
      description: "Tax-Free Childcare can be used alongside Welsh Government schemes for maximum savings.",
      details: [
        "Use Foundation Phase hours (10 free hours)",
        "Add Childcare Offer hours (20 additional free hours)",
        "Pay for remaining hours with Tax-Free Childcare",
        "Maximum savings when combining all schemes"
      ]
    },
    {
      title: "Important Notes for Wales",
      description: "Some specific considerations when using Tax-Free Childcare in Wales.",
      details: [
        "Tax-Free Childcare is a UK-wide scheme",
        "Works with registered Welsh childcare providers",
        "Can be used for wrap-around care services",
        "Check provider accepts Tax-Free Childcare payments"
      ]
    }
  ];

  const comparisonData = [
    {
      scenario: "Without Tax-Free Childcare",
      monthlyCost: "£1,000",
      annualCost: "£12,000",
      savings: "£0"
    },
    {
      scenario: "With Tax-Free Childcare",
      monthlyCost: "£800",
      annualCost: "£9,600",
      savings: "£2,400"
    }
  ];

  return (
    <>
      <SEO
        title="Tax-Free Childcare - Little Haven Nursery"
        description="Learn how to save up to £2,000 per child per year on childcare costs through the government's Tax-Free Childcare scheme in Wales."
        keywords={['tax free childcare', 'childcare savings', 'government childcare scheme', 'childcare costs Wales', 'Welsh childcare funding']}
        canonicalUrl="/fees/tax-free-childcare"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Tax-Free Childcare
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-green-100 max-w-content mx-auto"
            >
              Save up to £2,000 per child per year on childcare costs through this UK-wide government scheme.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          
          {/* Scheme Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Tax-Free Childcare Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                This UK-wide scheme can be used alongside Welsh Government funding to maximise your savings on childcare costs.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {schemeDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200"
                >
                  <div className="text-4xl mb-4">{detail.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{detail.title}</h3>
                  <p className="text-gray-600 mb-6">{detail.description}</p>
                  
                  <ul className="space-y-2 text-sm">
                    {detail.details.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Welsh Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Using Tax-Free Childcare in Wales</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn how to combine Tax-Free Childcare with Welsh Government schemes for maximum benefits.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {welshIntegration.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 rounded-xl p-8 border border-green-200"
                >
                  <h3 className="text-xl font-bold text-green-900 mb-4">{info.title}</h3>
                  <p className="text-green-800 mb-6">{info.description}</p>
                  
                  <ul className="space-y-2 text-sm text-green-700">
                    {info.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use Tax-Free Childcare</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to start saving on your childcare costs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howToUse.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cost Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Comparison</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how much you could save with Tax-Free Childcare.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                {comparisonData.map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-center p-8 rounded-xl border-2 ${
                      index === 1 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{scenario.scenario}</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600">Monthly Cost:</span>
                        <p className="text-2xl font-bold text-gray-900">{scenario.monthlyCost}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Annual Cost:</span>
                        <p className="text-2xl font-bold text-gray-900">{scenario.annualCost}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Total Savings:</span>
                        <p className={`text-2xl font-bold ${index === 1 ? 'text-green-600' : 'text-gray-900'}`}>
                          {scenario.savings}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-xl p-8 border border-green-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligibility Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Both parents must be working (or single parent working)</li>
                  <li>• Minimum earnings of £8,670 per year each</li>
                  <li>• Maximum earnings of £100,000 per year each</li>
                  <li>• Child must be 11 or under (or 17 if disabled)</li>
                  <li>• Cannot be claiming Working Tax Credit or Universal Credit</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 20% government contribution on childcare costs</li>
                  <li>• Up to £2,000 savings per child per year</li>
                  <li>• Flexible - use when you need it</li>
                  <li>• Works alongside Welsh Government funding</li>
                  <li>• No need to wait for tax returns</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Saving?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-content mx-auto">
              Our team can help you understand how to combine Tax-Free Childcare with Welsh Government funding 
              to maximise your savings on childcare costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=tax-free-childcare&source=tax-free-page"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg2 shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
              >
                Get Help
              </a>
              <a 
                href="https://www.gov.uk/tax-free-childcare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
              >
                Apply Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TaxFreeChildcare;
