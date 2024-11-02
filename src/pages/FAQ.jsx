import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use optimized images
const HeroBackground = '/images/WestCoast-1200.webp';  // Main image
const HeroBackgroundTiny = '/images/WestCoast-placeholder.webp';  // Blur placeholder

const FAQ = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload hero image
  useEffect(() => {
    const image = new Image();
    image.src = HeroBackground;
    image.onload = () => setIsLoaded(true);

    // Add preload link
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = HeroBackground;
    document.head.appendChild(preloadLink);

    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
    };
  }, []);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          id: 1,
          question: "What experience level do I need?",
          answer: "Experience requirements vary depending on the objective. Some trips are suitable for beginners, while others require previous mountaineering experience. Each trip listing specifies the required experience level, and we're happy to help you choose an appropriate objective."
        },
        {
          id: 2,
          question: "How fit do I need to be?",
          answer: "A good level of cardiovascular fitness is essential for mountain activities. You should be able to hike with a pack for 6-8 hours and be comfortable with consecutive days of physical activity. Specific fitness recommendations are provided for each trip."
        },
        {
          id: 3,
          question: "What equipment do I need to bring?",
          answer: "Technical equipment (ropes, protection, etc.) is provided. You'll need to bring personal clothing and equipment (boots, jacket, etc.). A detailed equipment list will be provided upon booking."
        }
      ]
    },
  ]

  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <FAQWrapper>
      <FAQHero isLoaded={isLoaded}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about mountain guiding and adventures</p>
      </FAQHero>

      <FAQContent>
        {faqs.map((category) => (
          <CategorySection key={category.category}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <QuestionList>
              {category.questions.map((faq) => (
                <QuestionItem key={faq.id}>
                  <QuestionHeader
                    onClick={() => toggleQuestion(faq.id)}
                    isOpen={openQuestions[faq.id]}
                  >
                    <QuestionText>{faq.question}</QuestionText>
                    <IconWrapper isOpen={openQuestions[faq.id]}>
                      <i className="fas fa-chevron-down" />
                    </IconWrapper>
                  </QuestionHeader>
                  
                  <AnimatePresence>
                    {openQuestions[faq.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AnswerText>{faq.answer}</AnswerText>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </QuestionItem>
              ))}
            </QuestionList>
          </CategorySection>
        ))}
      </FAQContent>
      
      <StillHaveQuestions>
        <h2>Still Have Questions?</h2>
        <p>Can't find what you're looking for? Feel free to get in touch.</p>
        <ContactButton href="/contact">Contact Us</ContactButton>
      </StillHaveQuestions>
    </FAQWrapper>
  );
};


const FAQWrapper = styled.div`
  min-height: 100vh;
`;

const FAQHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${HeroBackground}) center/cover;
    
  padding: 6rem 2rem;
  text-align: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--snow-white);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: var(--font-heading);
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    opacity: 1;
  }
`;

const FAQContent = styled.div`
  max-width: 900px;
  margin: -3rem auto 4rem;
  padding: 0 2rem;
  position: relative;
`;

const CategorySection = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  color: var(--slate-blue);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QuestionItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const QuestionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: ${props => props.isOpen ? 'var(--glacier-blue)' : 'white'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--glacier-blue);
  }
`;

const QuestionText = styled.span`
  font-size: 1.1rem;
  color: var(--slate-blue);
  font-weight: 600;
  text-align: left;
`;

const IconWrapper = styled.span`
  color: var(--slate-blue);
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const AnswerText = styled.div`
  padding: 1.25rem;
  color: var(--slate-blue);
  line-height: 1.6;
  background: white;
`;

const StillHaveQuestions = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: var(--slate-blue);

  h2 {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: var(--font-heading);
  }

  p {
    color: white;
    margin-bottom: 2rem;
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default FAQ; 