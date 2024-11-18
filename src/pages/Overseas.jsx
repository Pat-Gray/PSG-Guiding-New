import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Overseas = () => {
  const destinations = [
    {
      country: "Norway",
      countryMap: "/images/NorwayMap.webp",
      activities: [
        {
          type: "Climbing",
          locations: [
            {
              name: "Lofoten Islands",
              description: "World-class granite climbing in the midnight sun.",
              season: "June - September",
              difficulty: "All levels",
              image: "/images/Stetind-1200.webp"
            }
          ]
        },
        {
          type: "Skiing",
          locations: [
            {
              name: "Northern Norway",
              description: "Ski touring in the stunning fjords.",
              season: "February - April",
              difficulty: "Intermediate to Advanced",
              image: "/images/patNorway-1200.webp"
            }
          ]
        }
      ]
    },
    // {
    //   country: "Canada",
    //   activities: [
    //     {
    //       type: "Ice Climbing",
    //       locations: [
    //         {
    //           name: "Canadian Rockies",
    //           description: "Challenging ice routes in a breathtaking setting.",
    //           season: "December - March",
    //           difficulty: "Advanced",
    //           image: "/images/ridgeClimbing-1200.webp"
    //         }
    //       ]
    //     },
    //     {
    //       type: "Skiing",
    //       locations: [
    //         {
    //           name: "Rogers Pass",
    //           description: "Legendary backcountry skiing in the heart of the Selkirks.",
    //           season: "December - April",
    //           difficulty: "Advanced",
    //           image: "/images/ridgeClimbing-1200.webp"
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      country: "Japan",
      activities: [
        {
          type: "Powder Skiing",
          locations: [
            {
              name: "Hokkaido",
              description: "Experience the best powder skiing in the world.",
              season: "December - March",
              difficulty: "All levels",
              image: "/images/Japan1-1200.webp"
            }
          ]
        }
      ]
    }
  ];

  const otherLocations = [
    // {
    //   image: "/images/OtherLocationImage.webp",
    //   name: "China",
    //   icon: "hiking",
    //   activityType: "Activity Type"
    // }
   ];

  return (
    <div className="min-h-screen">
      
      <div 
        style={{ backgroundImage: "url('/images/SkiShot-1200.webp')" }}
        className="relative h-[80vh] bg-center bg-cover flex items-center justify-center text-snow-white"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative text-center max-w-[800px] px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-4 font-heading"
          >
            Overseas Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            From backcountry powder to Ice Climbing to big mountain climbing.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {destinations.map((destination, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-4xl text-slate-blue mb-8 font-heading">{destination.country}</h2>
            
           
              
              <div className={`grid gap-8 ${destination.activities.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} flex-1`}>
                {destination.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="mb-12">
                    <h3 className="text-2xl text-alpine-teal mb-6 font-heading">{activity.type}</h3>
                    <div className={`grid gap-8 ${activity.locations.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                      {activity.locations.map((location, locIndex) => (
                        <div key={locIndex} className="bg-white rounded-xl overflow-hidden shadow-md">
                          <img
                            src={location.image}
                            alt={location.name}
                            className="w-full h-80 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="text-lg text-slate-blue mb-2 font-heading">{location.name}</h4>
                            <p className="text-gray-600 mb-2">{location.description}</p>
                            <p className="text-gray-500 mb-2">{location.season}</p>
                            <div className="flex items-center">
                              <i className="fas fa-mountain mr-2"></i>
                              <span className="text-gray-500">{location.difficulty}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            
          </section>
        ))}

        {/* Other Locations Section */}
        <section className="mb-16">
          {/* <h2 className="text-4xl text-slate-blue mb-8 font-heading">Other Locations</h2> */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {otherLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg text-slate-blue mb-2 font-heading">{location.name}</h4>
                  <div className="flex items-center">
                    <i className={`fas ${location.icon} mr-2`}></i>
                    <span className="text-gray-500">{location.activityType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        </section>

        <div className="text-center bg-slate-blue text-white p-8 rounded-xl">
          <h2 className="text-2xl mb-4 font-heading">Plan Your International Adventure</h2>
          <p className="mb-6 text-lg">Ready to explore these world-class destinations? Get in touch to start planning your trip.</p>
          <Link to="/contact" className="bg-dawn-orange text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 hover:bg-alpine-teal">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Overseas; 