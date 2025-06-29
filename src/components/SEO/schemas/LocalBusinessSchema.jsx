import { Helmet } from 'react-helmet-async';

const LocalBusinessSchema = ({ 
  name,
  address,
  telephone,
  openingHours,
  priceRange = "££",
  image
}) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ChildCare",
          "name": name,
          "image": image,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": address.street,
            "addressLocality": address.city,
            "addressRegion": address.region,
            "postalCode": address.postalCode,
            "addressCountry": address.country
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": address.latitude,
            "longitude": address.longitude
          },
          "url": `https://littlehavennursery.co.uk/nurseries/${name.toLowerCase()}`,
          "telephone": telephone,
          "priceRange": priceRange,
          "openingHours": openingHours,
          "currenciesAccepted": "GBP",
          "paymentAccepted": "Cash, Credit Card, Debit Card",
          "areaServed": "Cardiff",
          "hasMap": `https://www.google.com/maps?q=${address.latitude},${address.longitude}`,
          "sameAs": [
            "https://www.facebook.com/littlehavennursery",
            "https://www.instagram.com/littlehavennursery"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema; 