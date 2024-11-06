import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log('Form submitted:', formData);

    emailjs.send(
      'service_o3vd634', // Replace with your EmailJS service ID
      'template_usv2jef', // Replace with your EmailJS template ID
      formData,
      'hXAjj4thBMxE7eg1W' // Replace with your EmailJS public key (user ID)
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setStatus('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setStatus('Failed to send email. Please try again.');
    });
  };

  const whatsappNumber = "+64225618308"; // Replace with actual number
  const instagramHandle = "sheclimbs.skis"; // Replace with actual handle
  const emailAddress = "Petrouchka@hotmail.com"; // Replace with actual email

  return (
    <ContactWrapper>
      <ContactHero>
        <HeroContent>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Plan Your Mountain Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to explore? Get in touch and let's start planning your next mountain experience.
          </motion.p>
        </HeroContent>
      </ContactHero>

      <ContactContent>
        <FormSection>
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Send a Message</FormTitle>
            <InputGroup>
              <FormField>
                <Label>Name</Label>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </FormField>
              <FormField>
                <Label>Email</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
              </FormField>
            </InputGroup>
            
           

            <FormField>
              <Label>Message</Label>
              <TextArea 
                placeholder="Tell me about your experience level and what you're hoping to achieve..."
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </FormField>

            <SubmitButton type="submit">Send Message</SubmitButton>
            <p>{status}</p>
          </ContactForm>
        </FormSection>

        <ConnectSection>
          <ConnectTitle>Connect Directly</ConnectTitle>
          <SocialButtons>
            <WhatsAppButton 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              Message on WhatsApp
            </WhatsAppButton>
            
            <EmailButton 
              href={`mailto:${emailAddress}`}
            >
              <i className="far fa-envelope"></i>
              Send an Email
            </EmailButton>
            
            <InstagramButton 
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
              Follow on Instagram
            </InstagramButton>
          </SocialButtons>

         
        </ConnectSection>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div`
  min-height: 100vh;
`;

const ContactHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/Stockimage-1200.webp') center/cover;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--snow-white);
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: var(--font-heading);
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: -4rem auto 4rem;
  padding: 0 2rem;
  position: relative;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormSection = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  padding: 3rem;
`;

const FormTitle = styled.h2`
  color: var(--slate-blue);
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--slate-blue);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--alpine-teal);
    box-shadow: 0 0 0 3px rgba(102, 153, 155, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--alpine-teal);
    box-shadow: 0 0 0 3px rgba(102, 153, 155, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--alpine-teal);
    box-shadow: 0 0 0 3px rgba(102, 153, 155, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: var(--alpine-teal);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    background: var(--sage-green);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 153, 155, 0.2);
  }
`;

const ConnectSection = styled.div`
  background: var(--snow-white);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ConnectTitle = styled.h2`
  color: var(--slate-blue);
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  
  i {
    font-size: 1.5rem;
  }
`;

const WhatsAppButton = styled(SocialButton)`
  background: #25D366;
  color: white;
  
  &:hover {
    background: #22c55e;
    transform: translateY(-2px);
  }
`;

const InstagramButton = styled(SocialButton)`
  background: #E4405F;
  color: white;
  
  &:hover {
    background: #d62e4c;
    transform: translateY(-2px);
  }
`;

const EmailButton = styled(SocialButton)`
  background: var(--alpine-teal);
  color: white;
  
  &:hover {
    background: var(--sage-green);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 153, 155, 0.2);
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`; 