import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/little-haven-logo-all-pale.jpg";
import Links from "./Links/Links";

const MobileSection = ({ label, links, onClose }) => (
  <div>
    <p className="flex items-center gap-2 px-3 text-xs font-semibold text-primary-500 mb-1.5">
      <span className="w-3 h-px bg-primary-300 inline-block rounded-full" />
      {label}
    </p>
    <div className="space-y-0.5">
      {links.map(({ to, label: text }) => (
        <Link
          key={to}
          to={to}
          className="block px-3 py-2 text-sm text-neutral-700 hover:text-primary-700 hover:bg-primary-50/70 rounded-lg transition-all duration-200"
          onClick={onClose}
        >
          {text}
        </Link>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 0);
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 100) ||
        currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const mobileSections = [
    {
      label: "Our Nurseries",
      links: [
        { to: "/nurseries/rhydlafar", label: "Rhydlafar" },
        { to: "/nurseries/pentyrch", label: "Pentyrch" },
        { to: "/nurseries/radyr", label: "Radyr" },
      ],
    },
    {
      label: "About Us",
      links: [
        { to: "/about/approach", label: "Our Approach" },
        { to: "/about/story", label: "Our Story" },
        { to: "/about/mission", label: "Our Mission" },
        { to: "/about/agegroups", label: "Age Groups" },
        { to: "/about/staff", label: "Our Team" },
        { to: "/about/parentresources", label: "Parent Resources" },
        { to: "/about/community", label: "Our Community" },
      ],
    },
    {
      label: "Fees & Funding",
      links: [
        { to: "/fees/our-fees", label: "Our Fees" },
        { to: "/fees/government-funding", label: "Welsh Government Funding" },
        { to: "/fees/tax-free-childcare", label: "Tax-Free Childcare" },
        { to: "/fees/universal-credit", label: "Universal Credit" },
      ],
    },
    {
      label: "Quick Links",
      links: [
        { to: "/opening-hours", label: "Opening Hours" },
        { to: "/about/foodandnutrition", label: "Food & Nutrition" },
        { to: "/contact", label: "Contact Us" },
      ],
    },
    {
      label: "Policies",
      links: [
        { to: "/safeguarding", label: "Safeguarding" },
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/cookies-policy", label: "Cookies Policy" },
        { to: "/terms-of-service", label: "Terms of Service" },
      ],
    },
  ];

  const renderMobileMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />

          <motion.nav
            className="fixed top-0 right-0 w-80 h-full z-[999999] shadow-2xl flex flex-col overflow-hidden bg-[#fffdf8]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            aria-label="Mobile navigation"
          >
            {/* Warm gradient header */}
            <div className="relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-sky-50/60 to-teal-50/40" />
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary-100/40 rounded-full" />
              <div className="absolute -bottom-6 left-4 w-20 h-20 bg-teal-100/30 rounded-full" />

              <div className="relative flex items-center justify-between px-5 py-4 border-b border-primary-100/50">
                <Link to="/" onClick={toggleMenu} className="flex items-center gap-3">
                  <img src={logo} alt="Little Haven Nursery" className="w-16 rounded-lg" />
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-primary-700">Little Haven</p>
                    <p className="text-[10px] text-primary-400">Nursery</p>
                  </div>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-white/70 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto py-5 px-4">
              <nav className="space-y-5">
                <Link
                  to="/"
                  className="flex items-center gap-3 text-base font-semibold text-neutral-800 hover:text-primary-700 hover:bg-primary-50/70 px-3 py-2.5 rounded-xl transition-all duration-200"
                  onClick={toggleMenu}
                >
                  <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </span>
                  Home
                </Link>

                {mobileSections.map((section) => (
                  <MobileSection
                    key={section.label}
                    label={section.label}
                    links={section.links}
                    onClose={toggleMenu}
                  />
                ))}
              </nav>
            </div>

            {/* Book a Viewing CTA */}
            <div className="p-4 flex-shrink-0" style={{ borderTop: "1px solid rgba(186,220,242,0.4)" }}>
              <Link
                to="/booking"
                className="flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                onClick={toggleMenu}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#fffdf8] ${
        isScrolled
          ? "shadow-soft border-b border-primary-100/50 backdrop-blur-md bg-[#fffdf8]/95"
          : "border-b border-primary-50/80"
      }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top warm accent stripe */}
      <div className="h-0.5 bg-gradient-to-r from-primary-200 via-teal-300 to-primary-200" />

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3.5 px-6 md:px-8">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Viewing
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {ReactDOM.createPortal(renderMobileMenu(), document.body)}
    </motion.header>
  );
};

export default Navbar;
