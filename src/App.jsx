import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Climbing from './pages/Climbing';
import Skiing from './pages/Skiing';
import Overseas from './pages/Overseas';
import LocationsMap from './pages/Locations';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <BrowserRouter>
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
          {/* Other routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }

export default App;