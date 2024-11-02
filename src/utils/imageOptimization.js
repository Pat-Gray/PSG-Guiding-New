import { useState, useEffect } from 'react';

export const useOptimizedImage = (originalSrc, sizes = '100vw') => {
  const [loaded, setLoaded] = useState(false);

  // Generate different sizes
  const generateSrcSet = (src) => {
    const widths = [400, 800, 1200];
    const extension = src.split('.').pop();
    const basePath = src.replace(`.${extension}`, '');
    
    return widths
      .map(width => `${basePath}-${width}.webp ${width}w`)
      .join(', ');
  };

  return {
    srcSet: generateSrcSet(originalSrc),
    sizes,
    loading: "lazy",
    onLoad: () => setLoaded(true),
    className: `w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
      loaded ? 'opacity-100' : 'opacity-0'
    }`
  };
};