import logo from "../../../assets/little-haven-logo-all-pale.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='relative bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-10'></div>
      
      {/* Animated Blobs */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 w-96 h-96 bg-primary-400/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob'></div>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-primary-300/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000'></div>
      </div>

      {/* Content */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 lg:pt-24 lg:pb-32'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Text Content */}
          <div className='flex-1 text-center lg:text-left mt-8 lg:mt-0'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='font-display text-display-lg md:text-display-xl lg:text-display-2xl font-bold text-white mb-6 tracking-tighter'
            >
              Where Curiosity Leads to Learning
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='font-display text-display-xs md:text-display-sm lg:text-display-md font-medium text-primary-100 mb-8 tracking-tight'
            >
              Nursery & Wrap Around Care
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='font-sans text-body-md md:text-body-lg text-primary-200 max-w-xl mx-auto lg:mx-0 mb-12 tracking-normal'
            >
              We nurture your child's natural curiosity through play-based learning, creating an 
              environment where questions lead to discovery for children aged 0-12.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn-primary w-full sm:w-auto'
                >
                  Learn More
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn-secondary w-full sm:w-auto'
                >
                  Enquire Now
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex-1 hidden lg:block'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-primary-600/10 rounded-full filter blur-2xl transform scale-110'></div>
              <img 
                src={logo} 
                alt='Little Haven Logo' 
                className='relative w-full max-w-lg mx-auto rounded-full shadow-xl'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
