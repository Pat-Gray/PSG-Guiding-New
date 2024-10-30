import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Climbing from './pages/Climbing';
import Skiing from './pages/Skiing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import LocationsMap from './pages/Locations';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="climb" element={<Climbing />} />
          <Route path="ski" element={<Skiing />} />
          <Route path="locations" element={<LocationsMap />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;