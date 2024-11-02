import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IFMGA from '../../../public/Logo/IFMGA.png';
import NZMGA from '../../../public/Logo/NZMGA.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <NavWrapper>
      <Nav>
        <LeftSection>
          <Logo>
            <Link className='text-xl md:text-3xl' to="/" onClick={() => setIsOpen(false)}>
              Petrouchka<br />
              Steiner-Grierson
            </Link>
          </Logo>
          <CertificationLogos>
            <CertLogo src={IFMGA} alt="IFMGA Certified" />
            <CertLogo1 src={NZMGA} alt="NZMGA Certified"  />
          </CertificationLogos>
        </LeftSection>

        <HamburgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>

        <NavLinks isOpen={isOpen}>
          <NavItem>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </NavItem>
          <NavItem>
            <Link to="/climb" onClick={() => setIsOpen(false)}>Climb</Link>
          </NavItem>
          <NavItem>
            <Link to="/ski" onClick={() => setIsOpen(false)}>Ski</Link>
          </NavItem>
          <NavItem>
            <Link to="/overseas" onClick={() => setIsOpen(false)}>Overseas</Link>
          </NavItem>
          <NavItem>
            <Link to="/locations" onClick={() => setIsOpen(false)}>Locations</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          </NavItem>
          <NavItem>
            <ContactButton to="/contact" onClick={() => setIsOpen(false)}>Contact</ContactButton>
          </NavItem>
        </NavLinks>
      </Nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
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
   
    font-weight: 500;
    line-height: 1.2;
    
    &:hover {
      color: var(--alpine-teal);
    }
       @media (max-width: 990px) {
    font-size: 1.5rem;
  }
  }
`;

const CertificationLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
`;

const CertLogo = styled.img`
  height: 55px;
  width: auto;
  
  @media (max-width: 1024px) {
    height: 55px;
  }
`;

const CertLogo1 = styled.img`
  height: 55px;
  width: auto;
  
  @media (max-width: 510px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 930px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  @media (max-width: 930px) {
    width: 100%;
    text-align: center;
    
    a {
      display: block;
      padding: 0.75rem;
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
  }

  @media (max-width: 930px) {
    width: 100%;
    display: block;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;

  @media (max-width: 930px) {
    display: flex;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: var(--slate-blue);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default Navigation; 