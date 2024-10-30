import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  const certifications = [
    { name: "IFMGA/UIAGM Mountain Guide", year: "2018" },
    { name: "Avalanche Stage 2", year: "2017" },
    { name: "Wilderness First Responder", year: "2016" },
  ];

  const values = [
    {
      title: "Safety First",
      icon: "shield-alt",
      description: "Your safety is paramount. Every decision is made with careful consideration of risks and conditions."
    },
    {
      title: "Personal Growth",
      icon: "mountain",
      description: "Mountains teach us about ourselves. Each journey is an opportunity for learning and development."
    },
    {
      title: "Environmental Respect",
      icon: "leaf",
      description: "We practice and promote responsible mountain ethics and environmental stewardship."
    }
  ];

  return (
    <AboutWrapper>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Petrouchka
        </motion.h1>
      </HeroSection>

      <ContentSection>
        <StorySection>
          <SectionTitle>My Story</SectionTitle>
          <StoryText>
            Born in New Zealand and raised with a deep connection to the mountains, 
            I've dedicated my life to exploring and sharing the world's most beautiful 
            alpine environments. With over a decade of guiding experience across three 
            continents, I bring technical expertise and local knowledge to every expedition.
          </StoryText>
          <StoryText>
            My journey began in the Southern Alps of New Zealand, where I developed 
            my skills in alpine climbing and ski touring. This led me to pursue guiding 
            professionally, eventually achieving IFMGA certification - the highest 
            level of mountain guiding qualification worldwide.
          </StoryText>
          <StoryText>
            Today, I split my time between New Zealand, Canada, and Norway, leading 
            climbs, ski tours, and training courses. My passion lies in helping others 
            discover their potential in the mountains, whether they're complete beginners 
            or experienced alpinists.
          </StoryText>
        </StorySection>

        <ValuesSection>
          <SectionTitle>Guiding Values</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <ValueIcon>
                  <i className={`fas fa-${value.icon}`}></i>
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <CertificationsSection>
          <SectionTitle>Certifications</SectionTitle>
          <CertList>
            {certifications.map((cert, index) => (
              <CertItem key={index}>
                <CertName>{cert.name}</CertName>
                <CertYear>{cert.year}</CertYear>
              </CertItem>
            ))}
          </CertList>
        </CertificationsSection>

        <CTASection>
          <CTAContent>
            <CTATitle>Ready to Start Your Journey?</CTATitle>
            <CTAText>
              Let's discuss your mountain objectives and create an experience 
              tailored to your goals.
            </CTAText>
            <CTAButton href="/contact">Get in Touch</CTAButton>
          </CTAContent>
        </CTASection>
      </ContentSection>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.div`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/images/about-hero.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--snow-white);
  text-align: center;

  h1 {
    font-size: 3.5rem;
    font-family: var(--font-heading);
  }
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  color: var(--slate-blue);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
`;

const StorySection = styled.section`
  margin-bottom: 4rem;
`;

const StoryText = styled.p`
  color: var(--slate-blue);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ValuesSection = styled.section`
  margin-bottom: 4rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--alpine-teal);
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  color: var(--slate-blue);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
`;

const ValueDescription = styled.p`
  color: var(--slate-blue);
  line-height: 1.6;
`;

const CertificationsSection = styled.section`
  margin-bottom: 4rem;
`;

const CertList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CertItem = styled.div`
  background: var(--glacier-blue);
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CertName = styled.h4`
  color: var(--slate-blue);
  font-size: 1.2rem;
  font-weight: 600;
`;

const CertYear = styled.span`
  color: var(--alpine-teal);
  font-weight: 500;
`;

const CTASection = styled.section`
  background: var(--slate-blue);
  border-radius: 12px;
  padding: 4rem;
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

const CTAButton = styled.a`
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

export default About; 