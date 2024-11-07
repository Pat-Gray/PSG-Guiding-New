/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import ServiceBadges from '../components/common/ServiceBadges';

const images = [
  '/images/SkiMountaineeringImage-1200.webp',
  '/images/patMalteBrun-1200.webp',
  '/images/pat-nazomi-1200.webp',
  '/images/Instruction-1200.webp',
  '/images/RockClimbing-1200.webp'
];

const Climbing = () => {
  const activities = [
    {
      title: "Alpine Climbing, Mountaineering & Rock Climbing",
      locations: [
        {
          name: "New Zealand Alps",
          season: "Nov - Apr",
          highlights: [
            "Mount Cook / Aoraki",
            "Mount Aspiring",
            "Darran Mountains",
            "Mount Tutuko",
            "3000m peaks",
            "Instructional courses"
          ],
          description: "Technical alpine climbing in New Zealand's Southern Alps. From moderate snow and ice routes to challenging mixed climbing.",
          image: '/images/patMalteBrun-1200.webp'
        },
        {
          name: "Ice Climbing",
          season: "Jun - Sep",
          highlights: [
            "South Face Douglas",
            "Vampire",
            "South Face Hicks",
          ],
          description: "Ice Climbing private guiding on technical ice routes",
          image: '/images/pat-nazomi-1200.webp'
        },
        {
          name: "Rock Climbing Guiding",
          season: "All Year",
          highlights: [
            "Wanaka",
            "Courses",
            "Overseas Trips Available"
          ],
          description: "Guiding, instruction and courses for Rock Climbing and Rope Resuce.",
          image: '/images/RockClimbing-1200.webp'
        },
        {
          name: "Courses and Instruction",
          season: "All Year",
          highlights: [
            "Rope Rescue",
            "Mountaineering Skills",
            "Cravasse Rescue",
            
          ],
          description: "Guiding, instruction and courses To stay safe in the mountains",
          image: '/images/Instruction-1200.webp'
        },
      {
        name: "Mount Aspiring",
        season: "Nov - Apr",
        highlights: [
          "One of New Zealand's most iconic climbs",
          "North West Ridge",
          "South West Ridge",
        ],
        description: "One of New Zealands best mountains which offers the full New Zealand alpine experience.",
        image: '/images/Aspiring-1200.webp'
      },
      {
        name: "Mount Cook / Aoraki",
        season: "Nov - Jan",
        highlights: [
          "New Zealand's highest mountain",
          "Lifetime challenge",
          "For repeat clients only",
        ],
        description: "Aoraki / Mount Cook is a beautiful mountain with a range of routes with the Linda Glacier being the easiest.",
        image: '/images/MountainsNZ-1200.webp'
      }
      ]
    },
    
      
    
  ];

  const personalizedJourneys = [
    {
      title: "Tailored Alpine Adventures",
      description: "Let us craft a unique alpine experience that builds on your past climbs and pushes your boundaries. Whether you're looking to conquer new peaks or refine your skills, we'll design a journey that matches your aspirations.",
      image: '/images/ridgeClimbing-1200.webp',
      highlights: [
        "Trip selections based on experience",
        "Skill enhancement",
        "Personalized coaching", 
      ]
    },
    {
      title: "Bespoke Rock Climbing Trips",
      description: "Experience the thrill of rock climbing with a personalized itinerary. From single-pitch sport climbs to multi-pitch trad adventures, we'll tailor the perfect climbing trip based on your previous experiences and future goals.",
      image: '/images/PetTrogan-1200.webp',
      highlights: [
        "Handpicked routes",
        "Technique improvement",
        "Goal-oriented climbing", 
        "Skill enhancement", 
        "Personalized coaching", 
        "Overseas trips"
            ]
    },
    {
      title: "Personalised Overseas Climbing Trips",
      description: "Get in touch if you have a dream climbing trip in mind.  Let's make it happen.",
      image: '/images/SkiMountaineeringImage-1200.webp',
      highlights: [
        "Build on previous experience",
        "Customised trips",
        "Dream Trips"
      ]
    }
  ];

  return (
    <ClimbingWrapper>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Climbing Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From alpine peaks to vertical ice, explore the world's best climbing destinations
          </motion.p>
        </HeroContent>
      </HeroSection>

      <PersonalizedSection>
        <ServiceBadges />

        <PersonalizedContent>
          {personalizedJourneys.map((journey, index) => (
            <PersonalizedJourney key={index}>
              <JourneyImage src={journey.image} alt={journey.title} />
              <JourneyContent>
                <JourneyTitle>{journey.title}</JourneyTitle>
                <JourneyDescription>{journey.description}</JourneyDescription>
                <HighlightsList>
                  {journey.highlights.map((highlight, hIndex) => (
                    <HighlightItem key={hIndex}>
                      <i className="fas fa-mountain"></i>
                      {highlight}
                    </HighlightItem>
                  ))}
                </HighlightsList>
               
              </JourneyContent>
            </PersonalizedJourney>
          ))}
        </PersonalizedContent>
      </PersonalizedSection>
      
      <ContentSection>
        {activities.map((activity, index) => (
          <ActivitySection key={index}>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <LocationGrid>
              {activity.locations.map((location, locIndex) => (
                <LocationCard key={locIndex}>
                  <ImageContainer>
                    <LocationImage src={location.image} alt={location.name} />
                  </ImageContainer>
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
                  </LocationContent>
                </LocationCard>
              ))}
            </LocationGrid>
          </ActivitySection>
        ))}


        <CTASection>
          <CTAContent>
            <CTATitle>Ready for Your Next Adventure?</CTATitle>
            <CTAText>
              Whether you're new to climbing or an experienced alpinist, 
              let's plan your next mountain objective together.
            </CTAText>
            <CTAButton to="/contact">Get in Touch</CTAButton>
          </CTAContent>
        </CTASection>
      </ContentSection>

      <Gallery images={images} />
    </ClimbingWrapper>
  );
};

const ClimbingWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const HeroSection = styled.div`
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/Pet-on-ridge-1200.webp') center/cover;
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
  padding: 4rem 1rem;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const LocationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const LocationContent = styled.div`
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
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

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--slate-blue);
  
  i {
    color: var(--alpine-teal);
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
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

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

const PersonalizedSection = styled.section`
  background: var(--snow-white);
  padding: 4rem;
  padding-top: 0;
  border-radius: 12px;
  text-align: center;
  color: var(--slate-blue);
`;


const PersonalizedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    
    & > * {
      max-width: 100%;
    }
  }

  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
    & > * {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const PersonalizedJourney = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const JourneyImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 16/9;
  margin: 0;
  display: block;
`;

const JourneyContent = styled.div`
  padding: 2rem;
`;

const JourneyTitle = styled.h3`
  color: var(--slate-blue);
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
`;

const JourneyDescription = styled.p`
  color: var(--slate-blue);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export default Climbing; 