import styled from 'styled-components';

const ContactSection = () => {
  return (
    <ContactWrapper>
      <ContactContent>
        <SectionTitle>Let's Plan Your Next Adventure</SectionTitle>
        <ContactText>
          Ready to explore? Get in touch to discuss your mountain objectives and start planning your next trip.
        </ContactText>
        <ContactForm>
          <InputGroup>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </InputGroup>
          <TextArea placeholder="Tell me about your mountain objectives..." />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  background: var(--charcoal);
  color: var(--snow-white);
  padding: 6rem 2rem;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: var(--snow-white);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ContactText = styled.p`
 
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--snow-white);
  padding: 1rem;
  border-radius: 4px;
  
  &:focus {
    border-color: var(--alpine-teal);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--snow-white);
  padding: 1rem;
  border-radius: 4px;
  
  &:focus {
    border-color: var(--alpine-teal);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: var(--sage-green);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    background: var(--alpine-teal);
    transform: translateY(-2px);
  }
`;

export default ContactSection; 