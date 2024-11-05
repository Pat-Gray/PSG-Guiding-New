import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceBadges from '../components/common/ServiceBadges';
import SkiHero from '../Images/SkiHero.jpg'
import ConnieImg from '../images/Connie.jpg';
import Plateau from '../images/plateau.webp'
import Japan1 from '../images/Japan1.jpg'

import Gallery from '../components/Gallery'
import patNorway from '../images/patNorway.jpg'

import Sunrise from '../images/Sunrise.jpg'
import SkiBelay from '../images/SkiBelay.jpg'
import TransitionJapan from '../images/TransitionJapan.webp'
import PetSkiing from '../images/petskiing.webp'

const Skiing = () => {
  const skiingImages = [
    
    PetSkiing,
    
    Sunrise,
    SkiBelay,
    TransitionJapan,
  ]

  const skiingActivities = [
    {
      title: "Backcountry Skiing In New Zealand",
      locations: [
        {
          name: "New Zealand Alps",
          season: "Jul - Sep",
          highlights: [
            "Mount Cook National Park",
            "Treble Cone Backcountry",
            "Remarkables Range"
          ],
          description: "Explore the amazing terrain of New Zealand's Southern Alps. Perfect for those seeking adventure or those seeking to gain experience and knowledge of the backcountry.",
          image: Plateau
        },
        {
          name: "Avalanche Courses",
          season: "Jun - Sept",
          highlights: [
            "Based from Wanaka",
            
          ],
          description: "Gain valuable skills and knowledge of avalanches, resuce, and snowpack knowledge.",
          image: "/images/canadian-backcountry.jpg"
        },
        {
          name: "Ski Mountaineering",
          season: "Jun - Sept",
          highlights: [
            "Mount Cook National Park",
            
          ],
          description: "Ski-Mountaineering for those with high ski ability and want to experience New Zealand's best ski descents",
          image: ConnieImg
        }
      ]
    },
    {
      title: "Overseas Ski Touring",
      locations: [
        {
          name: "Norwegian Fjords",
          season: "Feb - May",
          highlights: [
            "Lyngen Alps",
            "Lofoten",
        
          ],
          description: "Ski from summit to sea in the stunning Norwegian fjords. A once in a lifetime experience combining northern lights, amazing ski terrain and breathtaking views.",
          image: patNorway
        },
        {
          name: "Japan Powder Skiing",
          season: "Dec - Mar",
          highlights: [
            "Niseko",
            "Central Hokkaido",
            "Honshu"
          ],
          description: "Experience the best powder skiing in the world in the mountains of Japan with unquie culture, food and onsens.",
          image: Japan1
        }
      ]
    }
  ];


  return (
    <div className="min-h-screen">
      <div style={{ backgroundImage: `url(${SkiHero})` }} className="relative h-[70vh] bg-[url('../../public/images/SkiHero.jpg')] bg-center bg-cover flex items-center justify-center text-snow-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative text-center max-w-[800px] px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-4 font-heading font-bold"
          >
            Skiing Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            From backcountry powder to heli-skiing, explore the world's best skiing destinations
          </motion.p>
        </div>
      </div>

      <ServiceBadges />

      <div className="max-w-[1200px] mx-auto py-16 px-8">
        {skiingActivities.map((activity, index) => (
          <section key={index} className="mb-24">
            <h2 className="text-slate-blue text-4xl mb-8 font-heading">
              {activity.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activity.locations.map((location, locIndex) => (
                <div key={locIndex} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-slate-blue text-2xl font-heading">
                        {location.name}
                      </h3>
                      <span className="text-alpine-teal font-medium">
                        {location.season}
                      </span>
                    </div>
                    <p className="text-slate-blue mb-6 leading-relaxed">
                      {location.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {location.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2 text-slate-blue">
                          <i className="fas fa-mountain text-alpine-teal text-sm"></i>
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <Link 
                      to={`/skiing/${activity.title.toLowerCase()}/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-alpine-teal text-white px-6 py-3 rounded hover:bg-sage-green transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Explore Routes
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

     <Gallery images={skiingImages} />
    </div>
  );
};

export default Skiing;