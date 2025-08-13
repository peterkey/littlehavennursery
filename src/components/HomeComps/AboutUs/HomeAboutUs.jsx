import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import building from "../../../assets/Building.jpg"

const HomeAboutUs = () => {
  return (
    <section className='relative py-16 sm:py-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #518dbb 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='w-full lg:w-1/2'
          >
            <div className='relative'>
              <div className='absolute -inset-4 bg-primary-100 rounded-xl transform -rotate-6' />
              <div className='relative aspect-[4/3] rounded-lg overflow-hidden bg-primary-200'>
                <img 
                  src={building} 
                  alt='Children playing and learning'
                  className='w-full h-full object-cover'
                />
              </div>
              {/* Decorative Elements */}
              <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-xl' />
              <div className='absolute -top-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-20 blur-lg' />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full lg:w-1/2'
          >
            <h1 className='text-4xl md:text-5xl font-bold text-primary-600 mb-6'>
              About Us
            </h1>
            <p className='text-lg text-neutral-700 leading-relaxed mb-8 max-w-content'>
              At Little Haven, we believe in more than just childcare. We're dedicated to giving every child the best
              start in life through an environment where fun and learning go hand in hand. Each day here is an exciting
              adventure, designed to inspire curiosity and spark creativity. From future scientists to artists and
              athletes, we provide a magical space where children can take their first steps toward becoming the heroes of
              tomorrow.
            </p>
            
            {/* Stats Section */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8'>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary-600'>15+</p>
                <p className='text-sm text-neutral-600'>Years Experience</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary-600'>100%</p>
                <p className='text-sm text-neutral-600'>Qualified Staff</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold text-primary-600'>500+</p>
                <p className='text-sm text-neutral-600'>Happy Children</p>
              </div>
            </div>

            <Link 
              to="/about"
              className='inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg2 shadow-lg hover:bg-primary-700 transform hover:translate-y-[-2px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
            >
              Find out more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
