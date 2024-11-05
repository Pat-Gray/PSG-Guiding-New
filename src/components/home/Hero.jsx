import { useState, useEffect } from 'react';
import HeroBackground from '../../Images/Stetind.webp';
import HeroBackgroundTiny from '../../Images/Stetind.webp';
import MobileBackground from '../../../public/images/ConnieImage-1200.webp';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = isMobile ? MobileBackground : HeroBackground;
    preloadLink.type = 'image/webp';
    document.head.appendChild(preloadLink);

    return () => {
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, [isMobile]);

  return (
    <div className="relative h-screen">
      {/* Blur loading placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ 
          backgroundImage: `linear-gradient(rgba(42, 51, 66, 0.3), rgba(42, 51, 66, 0.5)), url(${HeroBackgroundTiny})`,
          filter: 'blur(20px)',
          opacity: isLoaded ? 0 : 1,
          willChange: 'opacity'
        }}
      />
      
      {/* Main hero image */}
      <picture className="absolute inset-0">
        <source
          srcSet={isMobile ? MobileBackground : HeroBackground}
          type="image/webp"
        />
        <img
          src={isMobile ? MobileBackground : HeroBackground}
          alt="Hero background"
          className="w-full h-full object-cover transition-opacity duration-500"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            willChange: 'opacity'
          }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setIsLoaded(true)}
        />
      </picture>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-snow-white max-w-[800px] px-8">
          <h1 
            className="font-heading text-[4.2rem] font-normal mb-6 tracking-[0.02em] leading-tight md:text-[3rem]"
            style={{ 
              visibility: isLoaded ? 'visible' : 'hidden',
              willChange: 'transform'
            }}
          >
            Personalized Mountain Experiences
          </h1>
          <p 
            className="font-body text-xl font-light mb-10 tracking-[0.04em] leading-relaxed opacity-90"
            style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
          >
            Professional mountain guiding in New Zealand, Canada, and Norway with expertise in technical alpine climbing and ski mountaineering
          </p>
          <p 
            className="font-body text-xl font-light mb-10 tracking-[0.04em] leading-relaxed opacity-90"
            style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
          >
            Focus on tailored, private guiding experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;