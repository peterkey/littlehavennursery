import logo from "../../../assets/little-haven-logo-all-pale.jpg";
import RoomPanorama from "../../../assets/RoomPanorama.jpg";
import RoomPanorama2 from "../../../assets/RoomPanorama2.jpg";
import Food from "../../../assets/Food.jpg";
import TeaParty from "../../../assets/TeaParty.jpg";
import SleepRoom from "../../../assets/SleepRoom.jpg";
import ChairRoom from "../../../assets/ChairRoom.jpg";
import Room from "../../../assets/Room.jpg";
import Building from "../../../assets/Building.jpg";
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
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 lg:pt-32 lg:pb-40'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Text Content */}
          <div className='flex-1 text-center lg:text-left mt-8 lg:mt-0'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='font-display text-display-sm md:text-display-md lg:text-display-lg font-medium text-primary-200 mb-6 tracking-tight'
            >
              Little Haven Nursery
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='font-display text-display-lg md:text-display-xl lg:text-display-2xl font-bold text-white mb-8 tracking-tighter'
            >
              Where Curiosity Leads to Learning
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='font-display text-display-xs md:text-display-sm lg:text-display-md font-medium text-primary-100 mb-10 tracking-tight'
            >
              Nursery & Wrap Around Care
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='font-sans text-body-md md:text-body-lg text-primary-200 max-w-content mx-auto lg:mx-0 mb-12 tracking-normal'
            >
              We nurture your child's natural curiosity through play-based learning, creating an 
              environment where questions lead to discovery for children aged 0-12.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start'
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
              <Link to="/contact?service=general-inquiry&source=homepage-hero">
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

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex-1 hidden lg:block'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-primary-600/10 rounded-2xl filter blur-2xl transform scale-110'></div>
              <div className='relative grid grid-cols-2 gap-4 max-w-2xl mx-auto'>
                {/* Top Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className='col-span-2'
                >
                  <img 
                    src={RoomPanorama} 
                    alt='Little Haven Nursery Room' 
                    className='w-full h-40 object-cover rounded-xl shadow-lg'
                  />
                </motion.div>
                
                {/* Bottom Row - 3 images */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img 
                    src={TeaParty} 
                    alt='Children enjoying activities' 
                    className='w-full h-32 object-cover rounded-xl shadow-lg'
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <img 
                    src={SleepRoom} 
                    alt='Peaceful sleep area' 
                    className='w-full h-32 object-cover rounded-xl shadow-lg'
                  />
                </motion.div>
                
                {/* Bottom Row - 2 more images */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <img 
                    src={ChairRoom} 
                    alt='Activity room' 
                    className='w-full h-32 object-cover rounded-xl shadow-lg'
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <img 
                    src={RoomPanorama2} 
                    alt='Another view of the nursery' 
                    className='w-full h-32 object-cover rounded-xl shadow-lg'
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
