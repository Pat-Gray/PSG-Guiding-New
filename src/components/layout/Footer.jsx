import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <i className="far fa-envelope"></i>
              contact@petrouchka.com
            </ContactItem>
            <ContactItem>
              <i className="fab fa-whatsapp"></i>
              +64 123 456 789
            </ContactItem>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Petrouchka Guiding. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--charcoal);
  color: var(--snow-white);
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  color: var(--alpine-teal);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;
  
  i {
    color: var(--alpine-teal);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: var(--snow-white);
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    color: var(--alpine-teal);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--snow-white);
  font-size: 1.5rem;
  opacity: 0.8;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    color: var(--alpine-teal);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  text-align: center;
  opacity: 0.6;
  font-size: 0.9rem;
`;

export default Footer; 