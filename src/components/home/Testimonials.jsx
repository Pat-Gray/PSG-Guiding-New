import styled from "styled-components";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New Zealand Alps",
      text: "Petrouchka's expertise and calm demeanor made our first alpine climbing experience unforgettable. Her attention to safety while pushing our boundaries was exactly what we needed.",
      activity: "Alpine Climbing",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Canadian Rockies",
      text: "An incredible week of ice climbing with Petrouchka. Her technical knowledge and teaching ability transformed my climbing. Can't wait to return for another adventure.",
      activity: "Ice Climbing",
    },
    {
      id: 3,
      name: "Emma Larsson",
      location: "Norwegian Fjords",
      text: "The ski touring experience exceeded all expectations. Petrouchka's local knowledge led us to perfect powder and breathtaking views. A truly world-class guide.",
      activity: "Ski Touring",
    },
    {
      id: 4,
      name: "James Wilson",
      location: "New Zealand Alps",
      text: "A life-changing experience in the Southern Alps. Petrouchka's guidance helped me achieve climbing goals I never thought possible.",
      activity: "Alpine Climbing",
    },
    {
      id: 5,
      name: "Sofia Rodriguez",
      location: "Canadian Rockies",
      text: "The perfect balance of challenge and safety. Petrouchka's professionalism and experience made every moment on the ice memorable.",
      activity: "Ice Climbing",
    },
    {
      id: 6,
      name: "Thomas Berg",
      location: "Norwegian Fjords",
      text: "An exceptional guide who brings both technical expertise and a great personality to the mountains. The week of ski touring was simply incredible.",
      activity: "Ski Touring",
    }
  ];

  return (
    <TestimonialsSection>
      <SectionTitle>Client Experiences</SectionTitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <QuoteSymbol>"</QuoteSymbol>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialAuthor>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorDetails>
                {testimonial.activity} | {testimonial.location}
              </AuthorDetails>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--snow-white);
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  text-align: center;
  color: var(--slate-blue);
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const QuoteSymbol = styled.span`
  font-family: var(--font-heading);
  font-size: 4rem;
  color: var(--alpine-teal);
  opacity: 0.2;
  position: absolute;
  top: -0.5rem;
  left: 1rem;
`;

const TestimonialText = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: var(--slate-blue);
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  margin-top: 1.5rem;
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`;

const AuthorName = styled.h4`
  font-family: var(--font-heading);
  color: var(--slate-blue);
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const AuthorDetails = styled.p`
  color: var(--alpine-teal);
  font-size: 0.9rem;
  font-weight: 500;
`;

export default Testimonials;