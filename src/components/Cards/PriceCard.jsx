import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PriceCard = ({
  name = "",
  price = 0,
  halfDayPrice = 0,
  features = [],
  featured = false,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white rounded-lg2 shadow-medium transition-shadow hover:shadow-strong relative ${
        featured ? 'ring-2 ring-primary-600 ring-offset-4' : ''
      }`}
    >
      {featured && (
        <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-6 py-1.5 rounded-full text-sm font-medium'>
          Featured Service
        </span>
      )}
      
      <div className='px-8 sm:px-12 py-8 sm:py-12 border-b border-neutral-200'>
        <h3 className='text-2xl font-semibold text-center mb-6 text-neutral-900'>{name}</h3>
        
        {/* Full Day Price */}
        <div className='text-center mb-4'>
          <div className='flex justify-center items-baseline gap-1'>
            <span className='text-2xl font-medium text-neutral-900'>£</span>
            <span className='text-4xl font-bold text-neutral-900'>{price}</span>
            <span className='text-lg text-neutral-500 ml-1'>/session</span>
          </div>
        </div>

        {/* Half Day Price - Only show if it exists and is not zero */}
        {halfDayPrice > 0 && (
          <div className='text-center'>
            <div className='flex justify-center items-baseline gap-1'>
              <span className='text-xl font-medium text-neutral-900'>£</span>
              <span className='text-3xl font-bold text-neutral-900'>{halfDayPrice}</span>
              <span className='text-base text-neutral-500 ml-1'>/half day</span>
            </div>
          </div>
        )}
      </div>

      <div className='p-8 sm:p-12 bg-neutral-50 rounded-b-lg2'>
        <ul className='space-y-4'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-start gap-4'>
              <i className='bx bx-check-circle text-xl text-primary-600 flex-shrink-0 mt-0.5' />
              <span className='text-neutral-700'>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`mt-8 w-full inline-block text-center py-3 rounded-lg2 transition-colors ${
            featured
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50'
          }`}
        >
          Enquire Now
        </motion.a>
      </div>
    </motion.div>
  );
};

PriceCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  halfDayPrice: PropTypes.number,
  features: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.bool,
};

export default PriceCard;
