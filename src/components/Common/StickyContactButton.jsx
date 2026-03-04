import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12 19.79 19.79 0 011.27 3.45 2 2 0 013.27 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.4a16 16 0 006.54 6.54l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" {...sp}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const contactOptions = [
  {
    icon: <PhoneIcon />,
    label: 'Call Now',
    href: 'tel:02920891825',
    color: 'bg-teal-600 hover:bg-teal-700',
    ariaLabel: 'Call Little Haven Nursery',
    isExternal: true
  },
  {
    icon: <CalendarIcon />,
    label: 'Book a Viewing',
    to: '/booking',
    color: 'bg-primary-600 hover:bg-primary-700',
    ariaLabel: 'Book a viewing of our nursery',
    isExternal: false
  },
  {
    icon: <EnvelopeIcon />,
    label: 'Email Us',
    href: 'mailto:learn@littlehavennursery.co.uk',
    color: 'bg-lavender-600 hover:bg-lavender-700',
    ariaLabel: 'Send us an email',
    isExternal: true
  }
];

const btnCls = (color) =>
  `${color} text-white p-3 rounded-xl shadow-soft flex items-center gap-3 min-w-[140px] transition-all duration-200 hover:shadow-medium transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`;

const StickyContactButton = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);

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
              option.isExternal ? (
                <motion.a
                  key={option.label}
                  href={option.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={btnCls(option.color)}
                  aria-label={option.ariaLabel}
                  onClick={() => setIsExpanded(false)}
                >
                  <div className="w-5 h-5" aria-hidden="true">{option.icon}</div>
                  <span className="font-sans font-medium text-sm">{option.label}</span>
                </motion.a>
              ) : (
                <motion.div
                  key={option.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={option.to}
                    className={btnCls(option.color)}
                    aria-label={option.ariaLabel}
                    onClick={() => setIsExpanded(false)}
                  >
                    <div className="w-5 h-5" aria-hidden="true">{option.icon}</div>
                    <span className="font-sans font-medium text-sm">{option.label}</span>
                  </Link>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${isExpanded ? 'bg-neutral-700 hover:bg-neutral-800' : 'bg-primary-600 hover:bg-primary-700'}
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
              className="w-6 h-6"
            >
              <CloseIcon />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6"
            >
              <PhoneIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
});

StickyContactButton.displayName = 'StickyContactButton';
export default StickyContactButton;
