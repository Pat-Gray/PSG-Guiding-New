import { Link } from 'react-router-dom';
import Cook from '../../Images/pointingInCookNp.webp'
import Japan from '../../Images/Japan.jpg'
import Rockies from '../../Images/Rockies.jpg'
import SkiNorway from '../../Images/SkiNorway.webp'
import WyeCreek from '../../Images/WyeCreek.webp'
import Lofoten from '../../Images/Lofoten.jpg'
import PetNorwayIce from '../../Images/PetNorwayIce.webp'
import Plateau from '../../Images/plateau.webp'
import Patbabs from '../../Images/Pat-babs.jpg'
const FeaturedLocations = () => {
  const locations = [
    {
      id: 1,
      name: 'New Zealand Southern Alps',
      image: Cook,
      season: 'Nov - Apr',
      description: 'Technical alpine climbing and ski touring in the Southern Alps.',
    },
    {
      id: 2,
      name: 'Canadian Rockies',
      image: Rockies,
      season: 'Dec - Apr',
      description: 'World-class ice climbing and powder skiing in the Rockies and British Columbia.',
    },
    {
      id: 3,
      name: 'Norwegian Fjords',
      image: SkiNorway,
      season: 'Mar - May',
      description: 'Ski touring from summit to sea in Lofoten and Tromsø.',
    },     {
      id: 4,
      name: 'Japan Powder Skiing',
      image: Japan,
      season: 'Jan - Mar',
      description: 'Deep powder skiing and cultural experiences in the heart of Hokkaido and Honshu.',
    },
    {
      id: 5,
      name: 'Lofoten Islands',
      image: Lofoten,
      season: 'Jun - Sep',
      description: 'World-renowned granite climbing above the Arctic Circle under the midnight sun.',
    },
    {
      id: 6,
      name: 'New Zealand Ice',
      image: WyeCreek,
      season: 'Jun - Sep',
      description: 'Ice climbing in the southern Alps.',
    },
    {
      id: 7,
      name: 'Rock Climbing', 
      image: Patbabs,
      season: 'All year',
      description: 'Rock climbing in New Zealand and overseas.',
    }, 
    {
      id: 8,
      name: 'Ski Touring',
      image: Plateau,
      season: 'All year',
      description: 'Ski touring in New Zealand and overseas.',
    }, 
    {
      id: 9,
      name: 'Expedition Trips',
      image: PetNorwayIce,
      season: 'All year',
      description: 'Got a dream trip in mind? Get in touch and we can make it happen.',
    }
  ];


  return (
    <section className="py-24 px-8 bg-slate-blue">
      <h2 className="text-center text-snow-white text-4xl mb-12">Destinations</h2>
      <p className="text-center text-snow-white text-xl mb-12">New Zealand and overseas</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {locations.map(location => (
          <div key={location.id} className="relative h-[500px] rounded-lg overflow-hidden cursor-pointer group">
            <img 
              src={location.image} 
              alt={location.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-8 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-snow-white text-2xl mb-2">{location.name}</h3>
             
              <p className="text-snow-white mb-6 leading-relaxed">{location.description}</p>
              <Link 
                to={`/locations/${location.name.toLowerCase()}`}
                className="bg-alpine-teal text-snow-white px-6 py-3 rounded inline-block w-fit hover:-translate-y-1 transition-transform duration-200 opacity-100"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedLocations;