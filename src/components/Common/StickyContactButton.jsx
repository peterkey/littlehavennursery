import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaTimes } from 'react-icons/fa';

const StickyContactButton = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      icon: FaPhone,
      label: 'Call Now',
      href: 'tel:02920891825',
      color: 'bg-teal-600 hover:bg-teal-700',
      ariaLabel: 'Call Little Haven Nursery'
    },
    {
      icon: FaCalendarAlt,
      label: 'Book a Viewing',
      href: '/booking',
      color: 'bg-primary-600 hover:bg-primary-700',
      ariaLabel: 'Book a viewing of our nursery'
    },
    {
      icon: FaEnvelope,
      label: 'Email Us',
      href: 'mailto:learn@littlehavennursery.co.uk',
      color: 'bg-lavender-600 hover:bg-lavender-700',
      ariaLabel: 'Send us an email'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`${option.color} text-white p-3 rounded-lg2 shadow-soft 
                          flex items-center gap-3 min-w-[140px] transition-all duration-200
                          hover:shadow-medium transform hover:scale-105 
                          focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`}
                aria-label={option.ariaLabel}
                onClick={() => setIsExpanded(false)}
              >
                <option.icon className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium">{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${isExpanded ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-600 hover:bg-primary-700'} 
                   text-white p-4 rounded-full shadow-soft transition-all duration-300
                   hover:shadow-medium transform hover:scale-105 
                   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
        aria-expanded={isExpanded}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="w-6 h-6" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaPhone className="w-6 h-6" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
});

StickyContactButton.displayName = 'StickyContactButton';

export default StickyContactButton;
