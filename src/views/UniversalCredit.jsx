import { motion } from "framer-motion";
import SEO from "../components/SEO/SEO";

const UniversalCredit = () => {
  const keyPoints = [
    {
      title: "What It Covers",
      description: "Universal Credit can help cover up to 85% of your childcare costs, up to certain monthly limits.",
      icon: "🛡️",
      details: [
        "Up to 85% of childcare costs covered",
        "Monthly limits apply based on age",
        "Must be working to claim childcare costs",
        "Can be claimed alongside other benefits",
        "Available across the UK including Wales"
      ]
    },
    {
      title: "Monthly Limits",
      description: "The amount you can claim depends on your child's age and your circumstances.",
      icon: "📊",
      details: [
        "Children under 16: Up to £646.35 per month",
        "Children 16-17: Up to £646.35 per month",
        "Disabled children: Up to £1,108.04 per month",
        "Limits apply per child, not per family",
        "Rates are the same across the UK"
      ]
    },
    {
      title: "Eligibility",
      description: "You must be working and claiming Universal Credit to be eligible for childcare cost support.",
      icon: "✅",
      details: [
        "Must be claiming Universal Credit",
        "Must be working (including self-employed)",
        "Childcare must enable you to work",
        "Provider must be registered and approved",
        "Available to Welsh residents"
      ]
    }
  ];

  const howToClaim = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Verify you're working and claiming Universal Credit."
    },
    {
      step: 2,
      title: "Report Childcare Costs",
      description: "Tell Universal Credit about your childcare costs in your online account."
    },
    {
      step: 3,
      title: "Provide Evidence",
      description: "Submit receipts or invoices from your childcare provider."
    },
    {
      step: 4,
      title: "Receive Payment",
      description: "Childcare costs will be included in your Universal Credit payment."
    }
  ];

  const welshConsiderations = [
    {
      title: "Using with Welsh Funding",
      description: "Universal Credit childcare costs can be used alongside Welsh Government schemes.",
      details: [
        "Can be used with Foundation Phase hours",
        "Works with Childcare Offer for Wales",
        "Cannot be combined with Tax-Free Childcare",
        "Check with your work coach for guidance"
      ]
    },
    {
      title: "Welsh Childcare Providers",
      description: "Universal Credit works with registered Welsh childcare providers.",
      details: [
        "Must be registered with Care Inspectorate Wales",
        "We are a registered provider",
        "Can be used for wrap-around care",
        "Applies to all our locations"
      ]
    }
  ];

  const importantNotes = [
    "You must report childcare costs every month",
    "Costs are paid in arrears (after you've paid them)",
    "You need to keep receipts and invoices",
    "Changes in circumstances must be reported immediately",
    "Childcare costs are paid separately from your main Universal Credit",
    "Cannot be used alongside Tax-Free Childcare scheme"
  ];

  return (
    <>
      <SEO
        title="Universal Credit Childcare - Little Haven Nursery"
        description="Learn how to claim childcare costs through Universal Credit in Wales. Get up to 85% of your childcare costs covered when you're working."
        keywords={['universal credit childcare', 'childcare benefits', 'working tax credit', 'childcare costs Wales', 'Welsh childcare benefits']}
        canonicalUrl="/fees/universal-credit"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Universal Credit Childcare
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-purple-100 max-w-content mx-auto"
            >
              Get up to 85% of your childcare costs covered through Universal Credit when you're working in Wales.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          
          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Universal Credit Childcare Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Universal Credit can help working families with childcare costs, including those using Welsh Government funding schemes.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200"
                >
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                  <p className="text-gray-600 mb-6">{point.description}</p>
                  
                  <ul className="space-y-2 text-sm">
                    {point.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Welsh Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Using Universal Credit in Wales</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn how Universal Credit childcare costs work with Welsh Government schemes and providers.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {welshConsiderations.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-purple-50 rounded-xl p-8 border border-purple-200"
                >
                  <h3 className="text-xl font-bold text-purple-900 mb-4">{info.title}</h3>
                  <p className="text-purple-800 mb-6">{info.description}</p>
                  
                  <ul className="space-y-2 text-sm text-purple-700">
                    {info.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to Claim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Claim</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow these steps to claim childcare costs through Universal Credit.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howToClaim.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
            className="bg-purple-50 rounded-xl p-8 border border-purple-200 mb-20"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  {importantNotes.slice(0, 3).map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Notes</h3>
                <ul className="space-y-2 text-gray-600">
                  {importantNotes.slice(3).map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* What's Covered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Covered</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Childcare Costs Covered</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Registered childcare provider fees</li>
                  <li>• Before and after school care</li>
                  <li>• Holiday childcare</li>
                  <li>• Childminder costs</li>
                  <li>• Nursery fees</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Not Covered</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• School fees</li>
                  <li>• Activities and clubs</li>
                  <li>• Transport costs</li>
                  <li>• Food and meals</li>
                  <li>• Personal items</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help with Universal Credit?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-content mx-auto">
              Our team can help you understand how to claim childcare costs through Universal Credit 
              and how it works with Welsh Government funding schemes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=universal-credit&source=universal-credit-page"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg2 shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
              >
                Get Help
              </a>
              <a 
                href="https://www.gov.uk/universal-credit/childcare-costs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
              >
                Government Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default UniversalCredit;
