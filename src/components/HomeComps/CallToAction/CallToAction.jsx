import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className='relative overflow-hidden'>
      {/* Background with gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800' />

      {/* Content */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className='flex justify-center mb-8'>
              <div className='relative'>
                <div className='absolute -inset-4 blur-xl bg-white/20 rounded-full' />
                <svg className="relative w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
            </div>

            <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight'>
              Join the Little Haven Family
            </h2>
            <p className='text-xl text-primary-50 mb-12 leading-relaxed max-w-content mx-auto'>
              Give your child the best start in a safe, fun, and nurturing environment. Enroll today and be part of
              something special!
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
              <Link
                to='/contact?service=general-inquiry&source=homepage-cta'
                className='inline-flex items-center px-6 py-3 text-base font-medium text-primary-700 bg-white rounded-lg2 shadow-lg hover:bg-primary-50 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary-600'
              >
                Get in Touch
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to='/about'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-white border-2 border-white/20 rounded-lg2 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary-600'
              >
                Learn More
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default CallToAction;
