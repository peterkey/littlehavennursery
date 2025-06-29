import { memo } from 'react';

const SEOImage = memo(({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  priority = false
}) => {
  if (!alt) {
    console.warn(`Image at ${src} is missing alt text, which is required for accessibility and SEO`);
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding={priority ? 'sync' : 'async'}
    />
  );
});

SEOImage.displayName = 'SEOImage';

export default SEOImage; 