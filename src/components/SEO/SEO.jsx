import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import FAQSchema from './schemas/FAQSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';

const SEO = memo(({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData = [],
  localBusiness,
  faqs,
  breadcrumbs,
  children
}) => {
  const fullTitle = title ? `${title} | Little Haven Nursery` : 'Little Haven Nursery';
  const fullDescription = description || 'Little Haven Nursery provides quality childcare in Cardiff, offering a safe and nurturing environment for children to learn and grow.';
  const defaultKeywords = ['nursery', 'childcare', 'Cardiff', 'early years', 'preschool', 'daycare'];
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content={allKeywords} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content={ogImage || '/images/og-default.jpg'} />
        <meta property="og:url" content={canonicalUrl || window.location.href} />
        <meta property="og:site_name" content="Little Haven Nursery" />
        
        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="twitter:image" content={ogImage || '/images/og-default.jpg'} />
        
        {/* Structured Data */}
        {structuredData.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
        
        {/* Additional Meta Tags */}
        {children}
      </Helmet>

      {/* Schema Components */}
      {localBusiness && <LocalBusinessSchema {...localBusiness} />}
      {faqs && <FAQSchema faqs={faqs} />}
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
    </>
  );
});

SEO.displayName = 'SEO';

export default SEO; 