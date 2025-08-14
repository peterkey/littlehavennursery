import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PriceSection from "../components/Cards/PriceSection";
import WrapAroundPriceSection from "../components/Cards/WrapAroundPriceSection";
import SEO from "../components/SEO/SEO";

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};

const Fees = () => {
  return (
    <>
      <SEO
        title="Our Fees - Little Haven Nursery"
        description="View our transparent fee structure for childcare services. Competitive rates with flexible payment options and government funding available."
        keywords={['nursery fees', 'childcare costs', 'nursery prices', 'Cardiff nursery fees', 'childcare funding']}
        canonicalUrl="/fees/our-fees"
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
              Our Fees
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 max-w-content mx-auto"
            >
              Transparent pricing for quality childcare. View our competitive rates and understand what's included in your child's care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Fee Cards Section */}
      <section className="py-16 sm:py-24 bg-white">
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          animate="enter"
          className="space-y-0"
        >
          <PriceSection />
          <WrapAroundPriceSection />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-content mx-auto">
              Have questions about our fees or want to discuss your child's care needs? 
              We're here to help you make the best decision for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg2 shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link 
                to="/booking"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
              >
                Book a Viewing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Fees;
