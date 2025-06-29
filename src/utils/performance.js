// Image optimization
export const optimizeImage = (src, options = {}) => {
  const { width, height, quality = 75, format = 'webp' } = options;
  const params = new URLSearchParams();
  
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  params.append('q', quality);
  params.append('fm', format);
  
  return `${src}?${params.toString()}`;
};

// Resource hints
export const preloadResource = (src, type = 'image') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = src;
  link.as = type;
  document.head.appendChild(link);
};

// Lazy loading
export const lazyLoad = (element, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  });
  
  observer.observe(element);
  return observer;
};

// Critical CSS
export const loadCriticalCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Performance monitoring
export const measurePerformance = (metricName, callback) => {
  if (window.performance && window.performance.mark) {
    const startMark = `${metricName}-start`;
    const endMark = `${metricName}-end`;
    
    performance.mark(startMark);
    callback();
    performance.mark(endMark);
    
    performance.measure(metricName, startMark, endMark);
    const measures = performance.getEntriesByName(metricName);
    console.log(`${metricName} took ${measures[0].duration}ms`);
  }
}; 