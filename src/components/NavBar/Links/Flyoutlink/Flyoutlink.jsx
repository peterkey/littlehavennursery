import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const flyoutVariants = {
  hidden: { 
    opacity: 0,
    y: 15,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const decorationVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const Flyoutlink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const showFlyout = open && FlyoutContent;

  // Handle hover with delay for better UX
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-fit w-fit justify-between"
    >
      <Link to={href} className="relative group">
        {children}
        <motion.span
          initial={false}
          animate={{
            scaleX: showFlyout ? 1 : 0,
            opacity: showFlyout ? 1 : 0
          }}
          className="absolute -bottom-1.5 left-0 right-0 h-0.5 origin-left rounded-full bg-primary-600"
          style={{ 
            backgroundImage: "linear-gradient(90deg, #518dbb, #2869bd)"
          }}
        />
      </Link>

      <AnimatePresence>
        {showFlyout && (
          <div className="absolute left-1/2 top-12 -translate-x-1/2 z-50">
            {/* Decorative elements */}
            <motion.div
              variants={decorationVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#fffdf8] rotate-45 border-l border-t border-primary-100/50 shadow-sm z-10"
            />
            
            <motion.div
              variants={flyoutVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-max rounded-2xl border border-primary-100/50 shadow-lg backdrop-blur-sm overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(255,253,248,0.97) 0%, rgba(255,255,255,0.99) 100%)",
                boxShadow: "0 4px 24px -1px rgba(68, 140, 195, 0.08), 0 2px 8px -1px rgba(0, 0, 0, 0.05)"
              }}
            >
              <FlyoutContent />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </li>
  );
};

Flyoutlink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  FlyoutContent: PropTypes.elementType,
};

export default Flyoutlink;
