import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IFMGA from '../../../public/Logo/IFMGA.png';
import NZMGA from '../../../public/Logo/NZMGA.png';

const Navigation = () => {
  return (
    <NavWrapper>
      <Nav>
        <LeftSection>
          <Logo>
            <Link to="/">Petrouchka Stiner-Grierson</Link>
          </Logo>
          <CertificationLogos>
            <CertLogo src={IFMGA} alt="IFMGA Certified" />
            <CertLogo src={NZMGA} alt="NZMGA Certified" />
          </CertificationLogos>
        </LeftSection>

        <NavLinks>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/climb">Climb</Link>
          </NavItem>
          <NavItem>
            <Link to="/ski">Ski</Link>
          </NavItem>
          <NavItem>
            <Link to="/locations">Locations</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq">FAQ</Link>
          </NavItem>
          <NavItem>
            <ContactButton to="/contact">Contact</ContactButton>
          </NavItem>
        </NavLinks>
      </Nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.div`
  a {
    color: var(--slate-blue);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    
    @media (max-width: 1024px) {
      font-size: 1.1rem;
    }
  }
`;

const CertificationLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CertLogo = styled.img`
  height: 45px;
  width: auto;
  transition: opacity 0.2s ease;
  
  @media (max-width: 1024px) {
    height: 40px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`;

const NavItem = styled.li`
  a {
    color: var(--slate-blue);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--alpine-teal);
    }
  }
`;

const ContactButton = styled(Link)`
  background: var(--slate-blue);
  color: white !important;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--alpine-teal);
    transform: translateY(-2px);
  }
`;

export default Navigation; 