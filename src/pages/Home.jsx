import Hero from '../components/home/Hero';
import FeaturedLocations from '../components/home/FeaturedLocations';
import Services from '../components/home/Services';
import About from '../components/home/AboutPreview';
import Contact from '../components/home/ContactSection';

import ParallaxSection from '../components/home/ParallaxSection';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <ParallaxSection />
      <Services />
      <FeaturedLocations />
      <Testimonials />
      <Contact />
      
    </main>
  );
};

export default Home; 