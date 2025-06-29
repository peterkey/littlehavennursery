import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../SEO/SEO';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Common/ScrollToTop';
import { motion } from 'framer-motion';

const Layout = memo(({ 
  children, 
  title,
  description,
  keywords = [],
  structuredData = [],
  className = ''
}) => {
  const location = useLocation();
  const canonicalUrl = `https://littlehavennursery.co.uk${location.pathname}`;

  return (
    <>
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
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </SEO>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <motion.main
          className={`flex-grow pt-20 ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
});

Layout.displayName = 'Layout';

export default Layout; 