import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ServiceBadges from '../components/common/ServiceBadges';
import Gallery from '../components/Gallery'




const Skiing = () => {

  const skiingImages = [
    '/images/petskiing-1200.webp',
    '/images/Sunrise-1200.webp',
    '/images/SkiBelay-1200.webp',
    '/images/TransitionJapan-1200.webp',
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
            "Remarkables Range",
            "Mount Aspiring National Park"
          ],
          description: "Explore the amazing terrain of New Zealand's Southern Alps. Perfect for those seeking adventure or those seeking to gain experience and knowledge of the backcountry.",
          image: '/images/plateau-1200.webp'
        },
        {
          name: "Avalanche Courses",
          season: "Jun - Sept",
          highlights: [
            "Based from Wanaka",
            
          ],
          description: "Gain valuable skills and knowledge of avalanches, resuce, and snowpack knowledge.",
          image: "/images/snowtest-1200.webp"
        },
        {
          name: "Ski Mountaineering",
          season: "Jun - Sept",
          highlights: [
            "Mount Cook National Park",
            "Mount Aspiring National Park"
          ],
          description: "Ski-Mountaineering for those with high ski ability and who want to experience New Zealand's most technical ski descents",
          image: '/images/SkiMountaineeringImage-1200.webp'
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
          image: '/images/SkiNorway-1200.webp'
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
          image: '/images/Japan1-1200.webp'
        }
      ]
    }
  ];


  return (
    <div className="min-h-screen">
      <div 
        style={{ backgroundImage: "url('/images/SkiHero-1200.webp')" }}
        className="relative h-[70vh] bg-center bg-cover flex items-center justify-center text-snow-white"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative text-center max-w-[800px] px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-4 font-heading"
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

      <div className="max-w-[1200px] mx-auto py-16 px-8 ">
        {skiingActivities.map((activity, index) => (
          <section key={index} className="mb-24">
            <h2 className="text-slate-blue text-4xl mb-8 font-heading">
              {activity.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 [&>*:last-child:nth-child(2n+1)]:col-span-full [&>*:last-child:nth-child(2n+1)]:justify-self-center">
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
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CTASection>
          <CTAContent>
            <CTATitle className="font-heading">Ready for Your Next Adventure?</CTATitle>
            <CTAText>
              Whether you're new to climbing or an experienced alpinist, 
              let's plan your next mountain objective together.
            </CTAText>
            <CTAButton to="/contact">Get in Touch</CTAButton>
          </CTAContent>
        </CTASection>

     <Gallery images={skiingImages} />
    </div>
  );
};

const CTAButton = styled(Link)`
  display: inline-block;
  background: var(--dawn-orange);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`; 

const CTASection = styled.section`
  background: var(--slate-blue);
  padding: 4rem;
  border-radius: 12px;
  text-align: center;
  color: var(--snow-white);
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;


export default Skiing;