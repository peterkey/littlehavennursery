import { Helmet } from 'react-helmet-async';

const BreadcrumbSchema = ({ items }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://littlehavennursery.co.uk${item.url}`
          }))
        })}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema; 