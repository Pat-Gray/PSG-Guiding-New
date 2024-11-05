// eslint-disable-next-line react/prop-types

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {locations} from '../../utils/locations';

const OptimizedLocationCard = ({ location }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden">
      <LazyLoadImage
        src={location.image}
        alt={location.name}
        // width={800}
        // height={500}
        effect="blur"
        threshold={100}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover"
        placeholderSrc={location.placeholder}
      />

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-8 
                   opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      >
        <h3 className="text-snow-white text-2xl mb-2 font-medium">
          {location.name}
        </h3>
        <p className="text-snow-white mb-6 leading-relaxed">
          {location.description}
        </p>
        <div className="text-snow-white mb-4 text-sm">
          Season: {location.season}
        </div>
        <Link 
          to={`/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="bg-alpine-teal text-snow-white px-6 py-3 rounded inline-block w-fit 
                     hover:-translate-y-1 transition-transform duration-200 opacity-100"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

const FeaturedLocations = () => {
  // Preload the first few images
  useEffect(() => {
    const preloadCount = 3;
    locations.slice(0, preloadCount).forEach(location => {
      const img = new Image();
      img.src = location.image;
    });
  }, []);

  return (
    <section className="py-24 px-8 bg-slate-blue">
      <h2 className="text-center text-snow-white text-4xl mb-12">
        Destinations
      </h2>
      <p className="text-center text-snow-white text-xl mb-12">
        New Zealand and overseas
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {locations.map(location => (
          <OptimizedLocationCard 
            key={location.id} 
            location={location} 
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedLocations;