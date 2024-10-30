import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IceClimbing from '../../Images/HansIceClimbing.webp'
import Skiing from '../../Images/SkiNorway.webp'
const Services = () => {
  return (
    <ServicesSection>
      <SectionTitle>Mountain Experiences</SectionTitle>
      
      <ServiceGrid>
        <ServiceCard>
          <ServiceImage src={IceClimbing} alt="Alpine Climbing" />
          <ServiceContent>
            <h3>Climb</h3>
            <p>Technical alpine ascents and rock climbing across three continents. 
               Customized trips for all skill levels.</p>
            <ServiceLink to="/climb">Explore Climbing →</ServiceLink>
          </ServiceContent>
        </ServiceCard>

        <ServiceCard>
          <ServiceImage src={Skiing} alt="Backcountry Skiing" />
          <ServiceContent>
            <h3>Ski</h3>
            <p>Backcountry skiing and ski mountaineering adventures. 
               From powder runs to technical descents.</p>
            <ServiceLink to="/ski">Explore Skiing →</ServiceLink>
          </ServiceContent>
        </ServiceCard>
      </ServiceGrid>
    </ServicesSection>
  );
};


export default Services;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: var(--snow-white);
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--slate-blue);
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    color: var(--slate-blue);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--rock-gray);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const ServiceLink = styled(Link)`
  color: var(--alpine-teal);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`; 