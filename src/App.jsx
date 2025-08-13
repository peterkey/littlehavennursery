import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import AnimatedRoutes from './components/Routes/AnimatedRoutes';
import LoadingSpinner from './components/Common/LoadingSpinner';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

function App() {
  // Use basename for production deployment on GitHub Pages
  const basename = import.meta.env.PROD ? '/littlehavennursery' : '';
  
  return (
    <HelmetProvider>
      <Router basename={basename}>
        <Helmet>
          {/* Structured Data for Organization */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Little Haven Nursery",
              "url": "https://littlehavennursery.co.uk",
              "logo": "https://littlehavennursery.co.uk/images/logo.png",
              "description": "Little Haven Nursery provides high-quality childcare and early years education in Cardiff.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cardiff",
                "addressRegion": "Wales",
                "postalCode": "CF14",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-29-2075-1234",
                "contactType": "customer service",
                "areaServed": "Cardiff",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.facebook.com/littlehavennursery",
                "https://www.instagram.com/littlehavennursery"
              ]
            })}
          </script>
        </Helmet>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
