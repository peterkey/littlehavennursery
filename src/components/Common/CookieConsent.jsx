import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sp = { fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" };

const CookieConsent = memo(() => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
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
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-strong"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-start gap-4">

              {/* Cookie icon */}
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24" {...sp}>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="9.5" cy="9" r="1" fill="currentColor" stroke="none" />
                  <circle cx="15" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
                  <circle cx="10" cy="15" r="0.75" fill="currentColor" stroke="none" />
                  <circle cx="14.5" cy="14" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-neutral-900 mb-2">
                  Cookie Preferences
                </h3>
                <p className="font-sans text-neutral-500 text-sm mb-4">
                  We use essential cookies to ensure our website works properly for you.
                  {!showDetails && (
                    <>
                      {' '}Currently, we don&apos;t use any tracking or analytics cookies.
                      You can learn more in our{' '}
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
                      className="bg-neutral-50 rounded-xl p-4 mb-4 text-sm overflow-hidden"
                    >
                      <h4 className="font-sans font-semibold text-neutral-900 mb-2">What cookies we use:</h4>
                      <ul className="space-y-2 text-neutral-600">
                        <li>
                          <strong>Essential cookies:</strong> Required for basic site functionality,
                          including navigation and security features.
                        </li>
                        <li>
                          <strong>Preference cookies:</strong> Remember your settings like this cookie preference.
                        </li>
                        <li>
                          <strong>Analytics cookies:</strong> Currently not implemented.
                          If added in future, they would help us understand how visitors use our site.
                        </li>
                      </ul>
                      <p className="mt-3 text-neutral-400">
                        You can change your preferences at any time by clicking the cookie preferences
                        link in our website footer.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptEssential}
                    className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full hover:bg-neutral-200
                             transition-colors duration-200 font-sans font-medium text-sm
                             focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700
                             transition-colors duration-200 font-sans font-medium text-sm
                             focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Accept All
                  </button>
                  {!showDetails && (
                    <button
                      onClick={() => setShowDetails(true)}
                      className="font-sans text-primary-600 hover:text-primary-700 font-medium text-sm underline"
                    >
                      More Options
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={dismiss}
                className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-600
                         transition-colors duration-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                aria-label="Dismiss cookie notice"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" {...sp} aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
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
