import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaHeart, FaShieldAlt, FaFileAlt, FaCookieBite, FaFileContract } from "react-icons/fa";
import Hygiene from "../../assets/Version 1 Badges 5.png";
import Snack from "../../assets/SNACK-AWARD-LOGO.jpg";
import Ciw from "../../assets/CIW.png";
import SunSafe from "../../assets/sun-accredited-logo.jpg";
import logo from "../../assets/little-haven-logo-all-pale.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Contact information
  const contactInfo = {
    phone: "02920891825",
    email: "learn@littlehavennursery.co.uk",
    address: "St Fagans, Cardiff, Wales" // TODO: Update with actual address if different
  };

  return (
    <footer 
      className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200" 
      role="contentinfo"
      aria-label="Little Haven Nursery Footer"
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Accreditation Badges Section */}
        <section className="mb-12" aria-labelledby="accreditations-heading">
          <h2 id="accreditations-heading" className="sr-only">Accreditations and Awards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex justify-center">
              <img 
                src={Snack} 
                alt="Snack Award Logo - Healthy Eating Accreditation" 
                className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={Hygiene} 
                alt="Hygiene Badge - Food Safety Excellence" 
                className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={Ciw} 
                alt="CIW Badge - Care Inspectorate Wales Registration" 
                className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
            <div className="flex justify-center">
              <a 
                href="https://www.sunsafenurseries.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity duration-300"
                aria-label="Visit Sun Safe Nurseries website (opens in new tab)"
              >
                <img 
                  src={SunSafe} 
                  alt="Sun Safe Nurseries Accreditation - UV Protection Standards" 
                  className="h-16 object-contain opacity-90" 
                />
              </a>
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & About Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Little Haven Nursery Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Little Haven</h3>
                <p className="text-sm text-primary-600 font-medium">Nursery</p>
              </div>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">
              Providing the best start in life for every child through an environment where fun and learning go hand in hand. 
              Each day is an exciting adventure designed to inspire curiosity and spark creativity.
            </p>
            <div className="flex items-center space-x-2 text-sm text-neutral-500">
              <FaHeart className="text-red-400" />
              <span>Nurturing young minds since 2010</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center space-x-2">
              <FaFileAlt className="text-primary-600" />
              <span>Quick Links</span>
            </h3>
            <nav aria-label="Quick navigation links">
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ournurseries" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></span>
                    <span>Our Nurseries</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/fees" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></span>
                    <span>Fees & Funding</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/opening-hours" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></span>
                    <span>Opening Hours</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></span>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center space-x-2">
              <FaPhone className="text-primary-600" />
              <span>Contact Us</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {contactInfo.address}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Serving Cardiff and surrounding areas
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                  aria-label={`Call us at ${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                  aria-label={`Email us at ${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-2">
              <Link 
                to="/booking"
                className="btn-primary inline-flex items-center px-4 py-2 text-sm font-medium"
              >
                Book a Visit
              </Link>
            </div>
          </div>

          {/* Social & Legal Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 flex items-center space-x-2">
              <FaHeart className="text-primary-600" />
              <span>Connect & Legal</span>
            </h3>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-neutral-700">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100057491857373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200 text-blue-600 hover:text-blue-700 text-sm"
                  aria-label="Follow LHN Rhydlafar on Facebook (opens in new tab)"
                >
                  <FaFacebook className="w-4 h-4" />
                  <span>Rhydlafar</span>
                </a>
                
                <a
                  href="https://www.facebook.com/profile.php?id=100067759774550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200 text-blue-600 hover:text-blue-700 text-sm"
                  aria-label="Follow LHN Pentyrch on Facebook (opens in new tab)"
                >
                  <FaFacebook className="w-4 h-4" />
                  <span>Pentyrch</span>
                </a>
                
                <a
                  href="https://www.facebook.com/profile.php?id=100084282005921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200 text-blue-600 hover:text-blue-700 text-sm"
                  aria-label="Follow LHN Radyr on Facebook (opens in new tab)"
                >
                  <FaFacebook className="w-4 h-4" />
                  <span>Radyr</span>
                </a>
                
                <a
                  href="https://www.instagram.com/littlehavennursery_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200 text-pink-600 hover:text-pink-700 text-sm"
                  aria-label="Follow Little Haven Nursery on Instagram (opens in new tab)"
                >
                  <FaInstagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-neutral-700">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/safeguarding" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <FaShieldAlt className="text-primary-400 group-hover:text-primary-600 transition-colors" />
                    <span>Safeguarding</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <FaFileAlt className="text-primary-400 group-hover:text-primary-600 transition-colors" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cookies-policy" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <FaCookieBite className="text-primary-400 group-hover:text-primary-600 transition-colors" />
                    <span>Cookies Policy</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms-of-service" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <FaFileContract className="text-primary-400 group-hover:text-primary-600 transition-colors" />
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup - TODO: Implement when content strategy is ready */}
        {/* <section className="mb-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Stay Updated</h3>
            <p className="text-primary-700 text-sm mb-4">Get the latest news and updates from Little Haven Nursery</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                aria-label="Email address for newsletter"
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section> */}

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-neutral-500">
                © {currentYear} <span className="font-medium text-neutral-600">Parachutes ChildCare Ltd.</span> All Rights Reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-neutral-400">
              <span>Made with</span>
              <FaHeart className="text-red-400 w-3 h-3" />
              <span>for little ones</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
