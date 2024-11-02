import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RidgeClimbing from "../Images/ridgeClimbing.webp"
import PetTrogan from "../Images/PetTrogan.webp"
import PetRidge from '../Images/Pet-on-ridge.webp'
import { useState, useEffect } from 'react';

const Climbing = () => {
  const activities = [
    {
      title: "Alpine Climbing",
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
          image: "/images/nz-alps.jpg"
        },
        {
          name: "Canadian Rockies",
          season: "Jun - Sep",
          highlights: [
            "Ice Climbing",
            "Ice Fields Parkway",
            "Weeeping wall",
            "Professor Falls",
            "Louise Falls"
          ],
          description: "Classic ice climbing routes in the heart of the Canadian Rockies. Experience climbing in arguably the best ice climbing destination in the world.",
          image: "/images/canadian-rockies.jpg"
        },
        {
          name: "New Zealand Winter",
          season: "Jun - Sep",
          highlights: [
            "Wye Creek",
            "Remarkables",
            "Mt Cook National Park"
          ],
          description: "Technical ice and mixed climbing in the Southern Alps.",
          image: "/images/nz-ice.jpg"
        }
      ]
    },
    {
      title: "Norwegian Rock Climbing",
      locations: [
        {
          name: "Lofoten Islands",
          season: "Jun - Sep",
          highlights: [
            "Presten",
            "Svolværgeita",
            "Vestpillaren"
          ],
          description: "World-renowned granite climbing above the Arctic Circle. Multi-pitch routes with stunning ocean views under the midnight sun.",
          image: "/images/lofoten.jpg"
        },
        {
          name: "New Zealand Climbing",
          season: "Year-round",
          highlights: [
            "Technical rope course",
            "Sport climbing",
            "Trad climbing",
          ],
          description: "Sport and trad climbing across New Zealand. From single pitch to multi-pitch, there's something for everyone.",
          image: "/images/nz-rock.jpg"
        }
      ]
    }
  ];

  const personalizedJourneys = [
    {
      title: "Tailored Alpine Adventures",
      description: "Let us craft a unique alpine experience that builds on your past climbs and pushes your boundaries. Whether you're looking to conquer new peaks or refine your skills, we'll design a journey that matches your aspirations.",
      image: RidgeClimbing,
      highlights: [
        "Trip selections based on experience",
        "Skill enhancement",
        "Personalized coaching", 
      ]
    },
    {
      title: "Bespoke Rock Climbing Trips",
      description: "Experience the thrill of rock climbing with a personalized itinerary. From single-pitch sport climbs to multi-pitch trad adventures, we'll tailor the perfect climbing trip based on your previous experiences and future goals.",
      image: PetTrogan,
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
      image: "/images/ice-experience.jpg",
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
                <ExploreButton to={`/climbing/${journey.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn More
                </ExploreButton>
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
                    <ExploreButton to={`/climbing/${activity.title.toLowerCase()}/${location.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Explore Routes
                    </ExploreButton>
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

      
    </ClimbingWrapper>
  );
};

const ClimbingWrapper = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.div`
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${PetRidge}) center/cover;
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

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--slate-blue);
  
  i {
    color: var(--alpine-teal);
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
  border-radius: 12px;
  text-align: center;
  color: var(--slate-blue);
`;

const PersonalizedHeader = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const PersonalizedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
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