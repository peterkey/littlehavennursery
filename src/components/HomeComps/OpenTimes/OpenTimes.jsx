import { motion } from 'framer-motion';

const OpenTimes = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 py-16'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto text-center'
        >
          {/* Time Display */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mb-8'>
            <span className='text-4xl md:text-6xl font-bold text-white tracking-tight'>
              07:30 - 17:30
            </span>
            <span className='text-xl md:text-2xl font-medium text-primary-200 tracking-wide'>
              / Mon-Fri
            </span>
          </div>

          {/* Tagline */}
          <p className='text-lg sm:text-xl text-primary-50 font-medium tracking-wide uppercase'>
            A schedule that's designed to work for you
          </p>

          {/* Additional Information */}
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center'>
            <div className='p-4 rounded-lg bg-white/10 backdrop-blur-sm'>
              <p className='text-primary-100 text-sm uppercase tracking-wider'>Early Drop-off</p>
              <p className='text-white font-medium mt-1'>Available</p>
            </div>
            <div className='p-4 rounded-lg bg-white/10 backdrop-blur-sm'>
              <p className='text-primary-100 text-sm uppercase tracking-wider'>Flexible Hours</p>
              <p className='text-white font-medium mt-1'>Customizable</p>
            </div>
            <div className='p-4 rounded-lg bg-white/10 backdrop-blur-sm'>
              <p className='text-primary-100 text-sm uppercase tracking-wider'>Late Pick-up</p>
              <p className='text-white font-medium mt-1'>By Arrangement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenTimes;
