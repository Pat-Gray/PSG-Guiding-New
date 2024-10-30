import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Skiing = () => {
  const personalizedJourneys = [
    {
      title: "Tailored Backcountry Skiing",
      description: "Experience the thrill of backcountry skiing with a personalized itinerary. Whether you're seeking untouched powder or challenging descents, we'll craft the perfect skiing adventure based on your skills and aspirations.",
      image: "/images/backcountry-skiing.jpg",
      highlights: [
        "Custom route selection",
        "Avalanche safety",
        "Skill enhancement"
      ]
    },
    {
      title: "Bespoke Ski Touring Adventures",
      description: "Explore remote ski touring destinations with a bespoke experience. From gentle tours to steep couloirs, we'll tailor the perfect trip to match your previous experiences and future goals.",
      image: "/images/ski-touring.jpg",
      highlights: [
        "Handpicked routes",
        "Technique improvement",
        "Goal-oriented skiing"
      ]
    },
    {
      title: "Exclusive Heli-Skiing Experiences",
      description: "Dive into the world of heli-skiing with a bespoke experience. We'll select the best runs for your skill level and ambitions, ensuring a safe and exhilarating adventure.",
      image: "/images/heli-skiing.jpg",
      highlights: [
        "Tailored heli-runs",
        "Safety-focused",
        "Skill progression"
      ]
    }
  ];

  const skiingActivities = [
    {
      title: "Backcountry Skiing",
      locations: [
        {
          name: "New Zealand Alps",
          season: "Jul - Sep",
          highlights: [
            "Mount Cook National Park",
            "Treble Cone Backcountry",
            "Remarkables Range"
          ],
          description: "Explore the untouched powder of New Zealand's Southern Alps. Perfect for those seeking adventure and solitude.",
          image: "/images/nz-backcountry.jpg"
        },
        {
          name: "Canadian Rockies",
          season: "Dec - Apr",
          highlights: [
            "Banff National Park",
            "Jasper National Park",
            "Kootenay National Park"
          ],
          description: "Experience the vast wilderness and deep powder of the Canadian Rockies. A must for any serious backcountry skier.",
          image: "/images/canadian-backcountry.jpg"
        }
      ]
    },
    {
      title: "Ski Touring",
      locations: [
        {
          name: "Norwegian Fjords",
          season: "Feb - May",
          highlights: [
            "Lyngen Alps",
            "Sunnmøre Alps",
            "Romsdalen"
          ],
          description: "Ski from summit to sea in the stunning Norwegian fjords. A unique experience combining skiing and breathtaking views.",
          image: "/images/norwegian-fjords.jpg"
        },
        {
          name: "Alps of New Zealand",
          season: "Jul - Sep",
          highlights: [
            "Aoraki/Mount Cook",
            "Mount Aspiring",
            "Fiordland"
          ],
          description: "Discover the beauty of New Zealand's Alps with guided ski tours. Perfect for those looking to explore new terrain.",
          image: "/images/nz-alps-ski.jpg"
        }
      ]
    }
  ];

  return (
    <SkiingWrapper>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skiing Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From backcountry powder to heli-skiing, explore the world's best skiing destinations
          </motion.p>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        {skiingActivities.map((activity, index) => (
          <ActivitySection key={index}>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <LocationGrid>
              {activity.locations.map((location, locIndex) => (
                <LocationCard key={locIndex}>
                  <LocationImage src={location.image} alt={location.name} />
                  <LocationContent>
                    <LocationHeader>
                      <LocationName>{location.name}</LocationName>
                      <LocationSeason>{location.season}</LocationSeason>
                    </LocationHeader>
                    <LocationDescription>
                      {location.description}
                    </LocationDescription>
                    <HighlightsList>
                      {location.highlights.map((highlight, hIndex) => (
                        <HighlightItem key={hIndex}>
                          <i className="fas fa-mountain"></i>
                          {highlight}
                        </HighlightItem>
                      ))}
                    </HighlightsList>
                    <ExploreButton to={`/skiing/${activity.title.toLowerCase()}/${location.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Explore Routes
                    </ExploreButton>
                  </LocationContent>
                </LocationCard>
              ))}
            </LocationGrid>
          </ActivitySection>
        ))}
      </ContentSection>

      <PersonalizedSection>
        <PersonalizedHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Personalized Skiing Journeys
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let us guide you through a tailored skiing experience that builds on your past and sets new goals
          </motion.p>
        </PersonalizedHeader>

        <PersonalizedContent>
          {personalizedJourneys.map((journey, index) => (
            <JourneyCard key={index}>
              <JourneyImage src={journey.image} alt={journey.title} />
              <JourneyContent>
                <JourneyTitle>{journey.title}</JourneyTitle>
                <JourneyDescription>{journey.description}</JourneyDescription>
                <JourneyHighlights>
                  {journey.highlights.map((highlight, hIndex) => (
                    <HighlightItem key={hIndex}>
                      <i className="fas fa-check"></i>
                      {highlight}
                    </HighlightItem>
                  ))}
                </JourneyHighlights>
                <ExploreButton to="/contact">
                  Plan Your Journey
                </ExploreButton>
              </JourneyContent>
            </JourneyCard>
          ))}
        </PersonalizedContent>
      </PersonalizedSection>
    </SkiingWrapper>
  );
};

const SkiingWrapper = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.div`
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/skiing-hero.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--snow-white);
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-family: var(--font-heading);
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ActivitySection = styled.section`
  margin-bottom: 6rem;
`;

const ActivityTitle = styled.h2`
  color: var(--slate-blue);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LocationCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const LocationImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const LocationContent = styled.div`
  padding: 2rem;
`;

const LocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const LocationName = styled.h3`
  color: var(--slate-blue);
  font-size: 1.8rem;
  font-family: var(--font-heading);
`;

const LocationSeason = styled.span`
  color: var(--alpine-teal);
  font-weight: 500;
`;

const LocationDescription = styled.p`
  color: var(--slate-blue);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const HighlightsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;





const PersonalizedSection = styled.section`
  background: var(--glacier-blue);
  padding: 6rem 2rem;
`;

const PersonalizedHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;

  h2 {
    color: var(--slate-blue);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: var(--font-heading);
  }

  p {
    color: var(--slate-blue);
    font-size: 1.2rem;
    opacity: 0.8;
  }
`;

const PersonalizedContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JourneyCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const JourneyImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const JourneyContent = styled.div`
  padding: 2rem;
`;

const JourneyTitle = styled.h3`
  color: var(--slate-blue);
  font-size: 1.8rem;
  font-family: var(--font-heading);
  margin-bottom: 1rem;
`;

const JourneyDescription = styled.p`
  color: var(--slate-blue);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const JourneyHighlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--slate-blue);
  
  i {
    color: var(--alpine-teal);
    font-size: 0.9rem;
  }
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  background: var(--alpine-teal);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--sage-green);
    transform: translateY(-2px);
  }
`;

export default Skiing;