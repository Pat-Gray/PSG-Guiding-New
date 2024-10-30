import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import styled from 'styled-components';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

export default Layout; 