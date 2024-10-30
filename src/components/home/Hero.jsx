import styled from 'styled-components';
import HeroBackground from '../../Images/stetind.webp';
const Hero = () => {
 
  return (
    <HeroContainer>
      <HeroContent>
        <Title>Personalized Mountain Experiences</Title>
        <Subtitle>
          Professional mountain guiding in New Zealand, Canada, and Norway with expertise in technical alpine climbing and ski mountaineering
        </Subtitle>
        <Subtitle>
        Focus on tailored, private guiding experiences
        </Subtitle>
      
        
      </HeroContent>
    
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    rgba(42, 51, 66, 0.3),
    rgba(42, 51, 66, 0.5)
  ),
  url(${HeroBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroContent = styled.div`
  text-align: center;
  color: var(--snow-white);
  max-width: 800px;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-family: var(--font-heading);
  font-size: 4.2rem;
  font-weight: normal;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  letter-spacing: 0.04em;
  line-height: 1.6;
  opacity: 0.9;
`;

const CTAButton = styled.button`
  font-family: var(--font-body);
  background: var(--dawn-orange);
  color: var(--snow-white);
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--snow-white);
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const ScrollText = styled.span`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  opacity: 0.8;
`;

const ScrollArrow = styled.span`
  font-size: 1.5rem;
`;

const CertificationLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const CertLogo = styled.img`
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1); // Makes logos white
  opacity: 0.9;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    height: 50px;
  }
`;

export default Hero;