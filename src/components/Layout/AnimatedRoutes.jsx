import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4
    }
  }
};

const AnimatedRoutes = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageTransitionVariants}
        className="relative min-h-screen"
      >
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2a3d55 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.1
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply 
                      filter blur-3xl opacity-20 animate-blob" />
        <div className="fixed -bottom-32 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply 
                      filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        {/* Content */}
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            enter: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 }
          }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes; 