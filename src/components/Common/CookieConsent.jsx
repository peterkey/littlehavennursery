import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookie, FaTimes } from 'react-icons/fa';

const CookieConsent = memo(() => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // TODO: Initialize analytics/tracking here if needed
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential-only');
    setShowBanner(false);
  };

  const dismiss = () => {
    localStorage.setItem('cookie-consent', 'dismissed');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaCookie className="w-5 h-5 text-primary-600" aria-hidden="true" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cookie Preferences
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We use essential cookies to ensure our website works properly for you. 
                  {!showDetails && (
                    <>
                      {' '}Currently, we don't use any tracking or analytics cookies. 
                      You can learn more about our approach to privacy in our{' '}
                      <button 
                        onClick={() => setShowDetails(true)}
                        className="text-primary-600 hover:text-primary-700 underline font-medium"
                      >
                        privacy details
                      </button>.
                    </>
                  )}
                </p>
                
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-50 rounded-lg p-4 mb-4 text-sm"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">What cookies we use:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Essential cookies:</strong> Required for basic site functionality, 
                          including navigation and security features.
                        </li>
                        <li>
                          <strong>Preference cookies:</strong> Remember your settings like this cookie preference.
                        </li>
                        <li>
                          <strong>Analytics cookies:</strong> TODO - Currently not implemented. 
                          If added in future, they would help us understand how visitors use our site.
                        </li>
                      </ul>
                      <p className="mt-3 text-gray-500">
                        You can change your preferences at any time by clicking the cookie preferences 
                        link in our website footer.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptEssential}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 
                             transition-colors duration-200 font-medium text-sm
                             focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                             transition-colors duration-200 font-medium text-sm
                             focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Accept All
                  </button>
                  {!showDetails && (
                    <button
                      onClick={() => setShowDetails(true)}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm underline"
                    >
                      More Options
                    </button>
                  )}
                </div>
              </div>
              
              <button
                onClick={dismiss}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 
                         transition-colors duration-200 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Dismiss cookie notice"
              >
                <FaTimes className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;
