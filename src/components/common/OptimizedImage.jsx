// eslint-disable-next-line react/prop-types

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const OptimizedImage = ({ 
  src, 
  placeholderSrc, 
  alt, 
  width, 
  height, 
  priority = false,
  className = '' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = src;
      preloadLink.fetchPriority = 'high';
      document.head.appendChild(preloadLink);

      return () => {
        if (document.head.contains(preloadLink)) {
          document.head.removeChild(preloadLink);
        }
      };
    }
  }, [src, priority]);

  return (
    <ImageWrapper className={className}>
      {placeholderSrc && (
        <Placeholder
          style={{
            backgroundImage: `url(${placeholderSrc})`,
            opacity: isLoaded ? 0 : 1
          }}
        />
      )}
      <StyledImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(20px);
  transform: scale(1.1);
  transition: opacity 0.3s ease;
  will-change: opacity;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  will-change: opacity;
`;

export default OptimizedImage; 