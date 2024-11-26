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
          As an IFMGA mountain guide based in Wānaka, I get to share the places that have shaped me with others.
          <br/><br/>
          My work takes me across some incredible terrain—from New Zealand&apos;s Southern Alps to the quiet mountains of Norway. Each place has taught me something different about climbing, skiing, and myself. Now, I&apos;m focused on guiding here in New Zealand, helping people explore these incredible Southern Alps safely and confidently.

    </GuideText>
    <GuideText>
        For me, mountain guiding isn&apos;t just a job. It&apos;s about connecting people with wild places, sharing skills, and creating experiences that stay with you long after you&apos;ve descended the mountain.
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