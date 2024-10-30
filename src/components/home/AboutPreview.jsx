import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pet from '../../Images/PetFootstoolSkiDescent.webp';
const AboutPreview = () => {
  return (
    <AboutSection>
      <ContentWrapper>
        <ImageColumn>
          <GuideImage src={Pet} alt="Petrouchka Stiner-Grierson" />
         
        </ImageColumn>
        
        <TextColumn>
          <SectionTitle>About Petrouchka</SectionTitle>
          <GuideText>
          Petrouchka is a NZMGA-trained IFMGA mountain guide based in the breathtaking landscapes of Wanaka, New Zealand.
        With a passion for the Alpine Climbing and skiing and a wealth of experience in mountain guiding, Petrouchka is
        dedicated to providing safe, exhilarating, and unforgettable mountain experiences.
    </GuideText>
    <GuideText>
        Petrouchka's journey into the world of mountain guiding began with a a love for Rock Climbing and Skiing from an
        early age. This lead her to climb & ski around the globe from Yosemite, Canada, Norway and Australia. She is a
        IFMGA mountain guides qualified through the NZMGA. She has the skills and expertise to lead climbers and
        adventurers through some of the most spectacular and demanding mountain landscapes.
          </GuideText>
          
          <LearnMoreButton to="/about">Learn More</LearnMoreButton>
        </TextColumn>
      </ContentWrapper>
    </AboutSection>
  );
};

export default AboutPreview;

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: var(--snow-white);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageColumn = styled.div`
  position: relative;
`;

const GuideImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 8px;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  color: var(--slate-blue);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const GuideText = styled.p`
  color: var(--rock-gray);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;



const LearnMoreButton = styled(Link)`
  background: var(--slate-blue);
  color: var(--snow-white);
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  width: fit-content;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`; 