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
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-neutral-200/60 shadow-sm z-10"
            />
            
            <motion.div
              variants={flyoutVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative min-w-[800px] bg-white rounded-2xl border border-neutral-200/60 shadow-lg backdrop-blur-sm"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)",
                boxShadow: "0 4px 24px -1px rgba(0, 0, 0, 0.08), 0 2px 8px -1px rgba(0, 0, 0, 0.06)"
              }}
            >
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              
              {/* Content */}
              <div className="relative overflow-hidden rounded-2xl">
                <FlyoutContent />
              </div>
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
