import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/little-haven-logo-all-pale.jpg";
import Links from "./Links/Links";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 0);
      
      // Show/hide navbar based on scroll direction
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 100) || // Scrolling up
        currentScrollPos < 10 // At top
      );
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mobile menu portal
  const renderMobileMenu = () => {
    return (
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Slide-Out Menu */}
            <motion.nav
              className="fixed top-0 right-0 w-80 h-full bg-white z-[999999] shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}>
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <Link to="/" onClick={toggleMenu}>
                  <img src={logo} alt="Little Haven Logo" className="w-20" />
                </Link>
                <button 
                  onClick={toggleMenu}
                  className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="space-y-6">
                  <Link
                    to="/"
                    className="flex items-center text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    <svg className="w-5 h-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>

                  <div className="space-y-1">
                    <p className="px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      About Us
                    </p>
                    <Link
                      to="/about/approach"
                      className="block px-4 py-2 text-base text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      Our Approach
                    </Link>
                    <Link
                      to="/about/story"
                      className="block px-4 py-2 text-base text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/about/mission"
                      className="block px-4 py-2 text-base text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      Our Mission
                    </Link>
                  </div>

                  <div className="space-y-1">
                    <p className="px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Information
                    </p>
                    <Link
                      to="/fees"
                      className="block px-4 py-2 text-base text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      Fees & Funding
                    </Link>
                    <Link
                      to="/about/food-and-nutrition"
                      className="block px-4 py-2 text-base text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      Food & Nutrition
                    </Link>
                  </div>
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 border-t">
                <Link
                  to="/booking"
                  className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm transition-colors"
                  onClick={toggleMenu}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Viewing
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-8">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <motion.img
              src={logo}
              alt="Little Haven Logo"
              className="w-24"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <Links />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Viewing
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Portal */}
      {ReactDOM.createPortal(renderMobileMenu(), document.body)}
    </motion.header>
  );
};

export default Navbar;
