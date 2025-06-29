import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800'>
        <div className='absolute inset-0 opacity-10' style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
              Welcome to Little Haven Nursery
            </h1>
            <p className='text-xl text-primary-100 mb-8'>
              Where every child's journey begins with love, learning, and laughter
            </p>
            <Link to="/about/approach">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-primary-900 bg-white rounded-xl shadow-lg hover:bg-primary-50 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary-900'
              >
                Discover Our Approach
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
