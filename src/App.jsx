import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Climbing = lazy(() => import('./pages/Climbing'));
const Skiing = lazy(() => import('./pages/Skiing'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const LocationsMap = lazy(() => import('./pages/Locations'));
const Overseas = lazy(() => import('./pages/Overseas'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse">Loading...</div>
  </div>
);

const App = () => {
  return (
    <>
      <SpeedInsights />
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="climb" element={<Climbing />} />
              <Route path="ski" element={<Skiing />} />
              <Route path="overseas" element={<Overseas />} />    
              <Route path="locations" element={<LocationsMap />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;