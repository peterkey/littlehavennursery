import { memo } from 'react';

const AccessibleSkipLink = memo(() => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 bg-primary-600 text-white px-4 py-2 rounded-md z-50 
                 font-medium transition-all duration-200 focus:outline-none 
                 focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
      onClick={(e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Skip to main content
    </a>
  );
});

AccessibleSkipLink.displayName = 'AccessibleSkipLink';

export default AccessibleSkipLink;
