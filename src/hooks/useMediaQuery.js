import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design and accessibility preferences
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial state
    setMatches(media.matches);
    
    // Create event listener
    const listener = (event) => setMatches(event.matches);
    
    // Add listener
    media.addEventListener('change', listener);
    
    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

/**
 * Hook for detecting user's motion preferences
 * @returns {boolean} - Whether user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

/**
 * Hook for detecting high contrast preference
 * @returns {boolean} - Whether user prefers high contrast
 */
export const usePrefersHighContrast = () => {
  return useMediaQuery('(prefers-contrast: high)');
};

/**
 * Hook for detecting color scheme preference
 * @returns {string} - 'light' | 'dark' | 'no-preference'
 */
export const useColorScheme = () => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersLight = useMediaQuery('(prefers-color-scheme: light)');
  
  if (prefersDark) return 'dark';
  if (prefersLight) return 'light';
  return 'no-preference';
};

/**
 * Common responsive breakpoints
 */
export const useResponsive = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isLargeScreen = useMediaQuery('(min-width: 1440px)');
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    // Useful combinations
    isMobileOrTablet: isMobile || isTablet,
    isTabletOrDesktop: isTablet || isDesktop
  };
};
