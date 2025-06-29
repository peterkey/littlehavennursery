import { memo } from 'react';

const SEOHeading = memo(({ 
  level = 1, 
  children, 
  className = '',
  id
}) => {
  const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`;
  
  return (
    <HeadingTag 
      className={className}
      id={id}
    >
      {children}
    </HeadingTag>
  );
});

SEOHeading.displayName = 'SEOHeading';

export default SEOHeading; 