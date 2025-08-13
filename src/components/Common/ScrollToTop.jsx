import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll if the pathname has actually changed
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      
      // Force scroll to top using multiple methods for reliability
      const scrollToTop = () => {
        // Temporarily disable smooth scrolling for immediate scroll
        document.documentElement.classList.add('scroll-immediate');
        
        // Method 1: Direct scroll
        window.scrollTo(0, 0);
        
        // Method 2: Scroll the document element
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        
        // Method 3: Scroll the body element
        if (document.body) {
          document.body.scrollTop = 0;
        }
        
        // Remove the immediate scroll class after a short delay
        setTimeout(() => {
          document.documentElement.classList.remove('scroll-immediate');
        }, 100);
      };

      // Execute scroll immediately
      scrollToTop();
      
      // Also try after a longer delay to ensure page has fully rendered
      const timer = setTimeout(scrollToTop, 300);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Additional effect to handle hash changes and ensure scroll to top
  useEffect(() => {
    // If there's no hash, scroll to top
    if (!window.location.hash) {
      // Temporarily disable smooth scrolling for immediate scroll
      document.documentElement.classList.add('scroll-immediate');
      
      window.scrollTo(0, 0);
      
      // Remove the immediate scroll class after a short delay
      setTimeout(() => {
        document.documentElement.classList.remove('scroll-immediate');
      }, 100);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop; 