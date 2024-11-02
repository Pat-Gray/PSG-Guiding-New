import { motion } from 'framer-motion';
import styled from 'styled-components';

const Overseas = () => {
  const destinations = [
    {
      country: "Norway",
      activities: [
        {
          type: "Skiing",
          locations: [
            {
              name: "Lyngen Alps",
              description: "Spectacular ski touring above the Arctic fjords.",
              season: "March - May",
              difficulty: "Intermediate to Advanced",
              image: "/images/lyngen-alps.jpg"
            },
            {
              name: "Lofoten Islands",
              description: "Unique ski touring from summit to sea.",
              season: "February - April",
              difficulty: "Intermediate to Advanced",
              image: "/images/lofoten-skiing.jpg"
            }
          ]
        },
        {
          type: "Climbing",
          locations: [
            {
              name: "Lofoten Islands",
              description: "World-class granite climbing in the midnight sun.",
              season: "June - September",
              difficulty: "All levels",
              image: "/images/lofoten-climbing.jpg"
            }
          ]
        }
      ]
    },
    {
      country: "Canada",
      activities: [
        {
          type: "Skiing",
          locations: [
            {
              name: "Rogers Pass",
              description: "Legendary backcountry skiing in the heart of the Selkirks.",
              season: "December - April",
              difficulty: "Advanced",
              image: "/images/rogers-pass.jpg"
            }
          ]
        },
        {
          type: "Climbing",
          locations: [
            {
              name: "Canadian Rockies",
              description: "Classic alpine routes on limestone peaks.",
              season: "June - September",
              difficulty: "Intermediate to Advanced",
              image: "/images/canadian-rockies.jpg"
            }
          ]
        }
      ]
    }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-heading text-white text-center"
        >
          International Adventures
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-xl text-center mt-4 max-w-2xl mx-auto"
        >
          Experience world-class climbing and skiing destinations across the globe
        </motion.p>
      </HeroSection>

      <ContentWrapper>
        {destinations.map((destination, index) => (
          <CountrySection key={index}>
            <CountryTitle>{destination.country}</CountryTitle>
            
            {destination.activities.map((activity, actIndex) => (
              <ActivitySection key={actIndex}>
                <ActivityTitle>{activity.type}</ActivityTitle>
                <LocationGrid>
                  {activity.locations.map((location, locIndex) => (
                    <LocationCard key={locIndex}>
                      <LocationImage src={location.image} alt={location.name} />
                      <LocationContent>
                        <LocationName>{location.name}</LocationName>
                        <LocationSeason>{location.season}</LocationSeason>
                        <LocationDescription>{location.description}</LocationDescription>
                        <LocationDifficulty>
                          <i className="fas fa-mountain mr-2"></i>
                          {location.difficulty}
                        </LocationDifficulty>
                      </LocationContent>
                    </LocationCard>
                  ))}
                </LocationGrid>
              </ActivitySection>
            ))}
          </CountrySection>
        ))}

        <ContactSection>
          <h2>Plan Your International Adventure</h2>
          <p>Ready to explore these world-class destinations? Get in touch to start planning your trip.</p>
          <ContactButton href="/contact">Contact Us</ContactButton>
        </ContactSection>
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/overseas-hero.jpg') center/cover;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const CountrySection = styled.section`
  margin-bottom: 4rem;
`;

const CountryTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--slate-blue);
  margin-bottom: 2rem;
  font-family: var(--font-heading);
`;

const ActivitySection = styled.div`
  margin-bottom: 3rem;
`;

const ActivityTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--alpine-teal);
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const LocationCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LocationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const LocationContent = styled.div`
  padding: 1.5rem;
`;

const LocationName = styled.h4`
  font-size: 1.4rem;
  color: var(--slate-blue);
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
`;

const LocationSeason = styled.p`
  color: var(--dawn-orange);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const LocationDescription = styled.p`
  color: var(--rock-gray);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const LocationDifficulty = styled.div`
  display: flex;
  align-items: center;
  color: var(--slate-blue);
  font-weight: 600;
`;

const ContactSection = styled.div`
  text-align: center;
  background: var(--slate-blue);
  color: white;
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-top: 4rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: var(--font-heading);
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: var(--dawn-orange);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: var(--alpine-teal);
    transform: translateY(-2px);
  }
`;

export default Overseas; 