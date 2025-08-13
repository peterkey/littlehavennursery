import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../SEO/SEO';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Common/ScrollToTop';
import AccessibleSkipLink from '../Common/AccessibleSkipLink';
import StickyContactButton from '../Common/StickyContactButton';
import ErrorBoundary from '../Common/ErrorBoundary';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

const Layout = memo(({ 
  children, 
  title,
  description,
  keywords = [],
  structuredData = [],
  className = ''
}) => {
  const location = useLocation();
  
  // Generate proper canonical URL based on environment
  const getCanonicalUrl = () => {
    if (import.meta.env.PROD) {
      return `https://littlehavennursery.co.uk${location.pathname}`;
    }
    return `http://localhost:5173${location.pathname}`;
  };
  
  const canonicalUrl = getCanonicalUrl();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Animation settings that respect user preferences
  const animationProps = prefersReducedMotion 
    ? { initial: false, animate: false, exit: false }
    : { 
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
      };

  return (
    <ErrorBoundary key={location.pathname}>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'Little Haven Nursery',
            'url': 'https://littlehavennursery.co.uk',
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://littlehavennursery.co.uk/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          },
          ...structuredData
        ]}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0891b2" />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link rel="manifest" href="/manifest.json" />
      </SEO>

      <AccessibleSkipLink />
      
      <div className="min-h-screen flex flex-col">
        <header role="banner">
          <Navbar />
        </header>
        
        <motion.main
          key={location.pathname} // Force re-render on route change
          id="main-content"
          role="main"
          className={`flex-grow pt-20 ${className}`}
          tabIndex="-1"
          {...animationProps}
        >
          {children}
        </motion.main>
        
        <Footer />
        <ScrollToTop key={location.pathname} /> {/* Force re-render on route change */}
        <StickyContactButton />
      </div>
    </ErrorBoundary>
  );
});

Layout.displayName = 'Layout';

export default Layout; 