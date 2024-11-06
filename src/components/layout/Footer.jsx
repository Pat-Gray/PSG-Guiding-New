import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IFMGA from '../../../public/Logo/IFMGA.png'
import NZMGA from '../../../public/Logo/NZMGA.png'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent className='flex flex-col text-center items-center justify-center'>
        <FooterSection >
          <FooterTitle>Contact</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <i className="far fa-envelope"></i>
              Petrouchka@hotmail.com
            </ContactItem>
            <ContactItem>
              <i className="fab fa-whatsapp"></i>
              +64 22 561 8308
            </ContactItem>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/climb">Climb</FooterLink>
            <FooterLink to="/ski">Skiing</FooterLink>
            <FooterLink to="/overseas">Overseas</FooterLink>
            <FooterLink to="/locations">Locations</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          
          <CertificationLogos>
            <CertLogo 
              src={IFMGA} 
              alt="IFMGA Certified Mountain Guide" 
            />
            <CertLogo 
              src={NZMGA} 
              alt="NZGA Mountain Guide" 
            />
          </CertificationLogos>
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
  text-align: center;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h3`
  color: var(--alpine-teal);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;
  justify-content: center;
  
  i {
    color: var(--alpine-teal);
    width: 20px;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 2rem;
  text-align: left;
  width: 100%;
  max-width: 300px;
`;

const FooterLink = styled(Link)`
  color: var(--snow-white);
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s ease;
  text-align: center;
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

const CertificationLogos = styled.div`
  display: flex;

  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const CertLogo = styled.img`
  height: 100px;
`;

export default Footer; 