import { memo } from 'react';
import { Link } from 'react-router-dom';

const SEOLink = memo(({ 
  to, 
  children, 
  className = '',
  title,
  prefetch = true
}) => {
  // Ensure the link is internal
  const isInternal = !to.startsWith('http');
  
  if (isInternal) {
    return (
      <Link 
        to={to}
        className={className}
        title={title}
        prefetch={prefetch}
      >
        {children}
      </Link>
    );
  }

  // External links
  return (
    <a 
      href={to}
      className={className}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
});

SEOLink.displayName = 'SEOLink';

export default SEOLink; 