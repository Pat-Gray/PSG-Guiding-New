/* eslint-disable react/prop-types */

import { useState } from 'react';
import { locations } from '../../utils/locations';


const OptimizedLocationCard = ({ location }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden group">
      <img
        src={location.image}
        alt={location.name}
        className={`
          w-full h-full object-cover transition-transform duration-300 group-hover:scale-105
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        onLoad={() => setIsLoaded(true)}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-8 
                   opacity-80 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-snow-white text-2xl mb-2 font-medium">
          {location.name}
        </h3>
        <p className="text-snow-white mb-6 leading-relaxed">
          {location.description}
        </p>
        <div className="text-snow-white mb-4 text-sm ">
          {location.season}
        </div>
      </div>
        
    </div>
  );
};

const FeaturedLocations = () => {
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