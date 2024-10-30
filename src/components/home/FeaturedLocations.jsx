import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cook from '../../Images/pointingInCookNp.webp'
import Japan from '../../Images/Japan.webp'

const FeaturedLocations = () => {
  const locations = [
    {
      id: 1,
      name: 'New Zealand Alps',
      image: Cook,
      season: 'Nov - Apr',
      description: 'Technical alpine climbing and ski touring in the Southern Alps',
    },
    {
      id: 2,
      name: 'Canadian Rockies',
      image: '/images/canada.jpg',
      season: 'Dec - Apr',
      description: 'World-class ice climbing and powder skiing in the Rockies',
    },
    {
      id: 3,
      name: 'Norwegian Fjords',
      image: '/images/norway.jpg',
      season: 'Mar - May',
      description: 'Ski touring from summit to sea in the land of the midnight sun',
    },     {
      id: 4,
      name: 'Japanese Alps',
      image: Japan,
      season: 'Jan - Mar',
      description: 'Deep powder skiing and cultural experiences in the heart of Japan',
    },
    {
      id: 5,
      name: 'Lofoten Islands',
      image: '/images/lofoten.jpg',
      season: 'Jun - Sep',
      description: 'World-renowned granite climbing above the Arctic Circle',
    },
    {
      id: 6,
      name: 'New Zealand Ice',
      image: '/images/nz-ice.jpg',
      season: 'Jun - Sep',
      description: 'Technical ice climbing in the pristine Southern Alps',
    }
  ];

  return (
    <LocationsSection>
      <SectionTitle>Destinations</SectionTitle>
      <LocationGrid>
        {locations.map(location => (
          <LocationCard key={location.id}>
            <LocationImage src={location.image} alt={location.name} />
            <LocationOverlay>
              <LocationName>{location.name}</LocationName>
              <LocationSeason>{location.season}</LocationSeason>
              <LocationDescription>{location.description}</LocationDescription>
              <ExploreButton to={`/locations/${location.name.toLowerCase()}`}>
                Explore
              </ExploreButton>
            </LocationOverlay>
          </LocationCard>
        ))}
      </LocationGrid>
    </LocationsSection>
  );
};

export default FeaturedLocations;
const LocationsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--glacier-blue);
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--slate-blue);
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const LocationCard = styled.div`
  position: relative;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.05);
    }
    
    div {
      opacity: 1;
    }
  }
`;

const LocationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const LocationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
`;

const LocationName = styled.h3`
  color: var(--snow-white);
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const LocationSeason = styled.span`
  color: var(--dawn-orange);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const LocationDescription = styled.p`
  color: var(--snow-white);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ExploreButton = styled(Link)`
  background: var(--alpine-teal);
  color: var(--snow-white);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  width: fit-content;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`; 