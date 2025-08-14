import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const CTAButton = ({ href, icon: Icon, children, variant = 'primary', ariaLabel }) => {
  const baseClasses = "inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-soft hover:shadow-medium",
    secondary: "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500",
    accent: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 shadow-soft hover:shadow-medium"
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label={ariaLabel}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
      <span>{children}</span>
    </motion.a>
  );
};

const CallToAction = memo(({ className = "", compact = false }) => {
  const ctaData = [
    {
      icon: FaPhone,
      href: "tel:02920891825",
      text: "Call Now",
      variant: "accent",
      ariaLabel: "Call Little Haven Nursery at 02920891825"
    },
    {
      icon: FaCalendarAlt,
      href: "/booking",
      text: "Book a Viewing",
      variant: "primary",
      ariaLabel: "Book a viewing of our nursery"
    },
    {
      icon: FaEnvelope,
      href: "mailto:learn@littlehavennursery.co.uk",
      text: "Send Enquiry",
      variant: "secondary",
      ariaLabel: "Send an enquiry via email"
    }
  ];

  if (compact) {
    return (
      <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
        {ctaData.slice(0, 2).map((cta, index) => (
          <CTAButton key={index} {...cta}>
            {cta.text}
          </CTAButton>
        ))}
      </div>
    );
  }

  return (
    <section className={`bg-gradient-to-r from-primary-600 to-primary-700 py-16 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-display-sm md:text-display-md font-bold text-white mb-6">
            Ready to Join Our Nursery Family?
          </h2>
          <p className="text-body-lg text-primary-100 mb-10 max-w-content mx-auto">
            Get in touch today to arrange a visit and see why parents choose Little Haven Nursery for their children.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            {ctaData.map((cta, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CTAButton {...cta}>
                  {cta.text}
                </CTAButton>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg2 p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-200" aria-hidden="true" />
                <div className="text-left">
                  <div className="font-semibold">Locations</div>
                  <div className="text-sm text-primary-200">Rhydlafar, Radyr, Pentyrch</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <FaPhone className="w-5 h-5 text-primary-200" aria-hidden="true" />
                <div className="text-left">
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-primary-200">02920 891825</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <FaCalendarAlt className="w-5 h-5 text-primary-200" aria-hidden="true" />
                <div className="text-left">
                  <div className="font-semibold">Hours</div>
                  <div className="text-sm text-primary-200">7:30 AM - 5:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CallToAction.displayName = 'CallToAction';

export default CallToAction;
