import  { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import styled from 'styled-components';
import L from 'leaflet';

// Import map styles
import 'leaflet/dist/leaflet.css';

// Custom marker icons
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<i class="fas fa-mountain" style="color: ${color}; font-size: 24px;"></i>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
};

const locations = [
  {
    id: 1,
    name: "Aoraki/Mount Cook",
    position: [-43.5950, 170.1410],
    season: "Nov - Apr",
    description: "New Zealand's highest peak. Technical alpine climbing and ski touring opportunities.",
    activities: ["Alpine Climbing", "Ski Touring"],
    difficulty: "Advanced",
    type: "alpine"
  },
  {
    id: 2,
    name: "Mount Aspiring/Tititea",
    position: [-44.3833, 168.7333],
    season: "Nov - Apr",
    description: "The 'Matterhorn of the South'. Classic alpine routes and ski touring.",
    activities: ["Alpine Climbing", "Ski Touring"],
    difficulty: "Intermediate to Advanced",
    type: "alpine"
  },
  {
    id: 3,
    name: "Remarkables",
    position: [-45.0333, 168.8167],
    season: "Jun - Oct",
    description: "Premier backcountry skiing and alpine climbing near Queenstown.",
    activities: ["Skiing", "Rock Climbing"],
    difficulty: "All Levels",
    type: "mixed"
  },
  {
    id: 4,
    name: "Treble Cone Backcountry",
    position: [-44.6333, 168.9000],
    season: "Jun - Sep",
    description: "Extensive backcountry terrain with stunning views of Lake Wanaka.",
    activities: ["Skiing"],
    difficulty: "Intermediate to Advanced",
    type: "ski"
  },
  {
    id: 5,
    name: "Wye Creek",
    position: [-45.0667, 168.8000],
    season: "Year-round",
    description: "Sport climbing paradise with routes for all abilities.",
    activities: ["Rock Climbing"],
    difficulty: "All Levels",
    type: "rock"
  },
  {
    id: 6,
    name: "Mount Taranaki",
    position: [-39.2967, 174.0639],
    season: "Dec - Mar",
    description: "Iconic volcanic peak with alpine climbing and skiing opportunities.",
    activities: ["Alpine Climbing", "Skiing"],
    difficulty: "Intermediate",
    type: "mixed"
  },
  {
    id: 7,
    name: "Bugaboos",
    position: [50.7500, -116.7500],
    season: "Jun - Sep",
    description: "Renowned for its granite spires and alpine climbing routes.",
    activities: ["Alpine Climbing"],
    difficulty: "Advanced",
    type: "alpine"
  },
  {
    id: 8,
    name: "Sierra Nevada",
    position: [36.5785, -118.2923],
    season: "May - Oct",
    description: "Home to some of the best alpine climbing in the US.",
    activities: ["Alpine Climbing"],
    difficulty: "Intermediate to Advanced",
    type: "alpine"
  },
  {
    id: 18,
    name: "Chamonix",
    position: [45.9237, 6.8694],
    season: "Jun - Sep",
    description: "Famous for its alpine climbing and skiing in the French Alps.",
    activities: ["Alpine Climbing", "Skiing"],
    difficulty: "Intermediate to Advanced",
    type: "alpine"
  },
  {
    id: 19,
    name: "Yosemite",
    position: [37.8651, -119.5383],
    season: "Apr - Oct",
    description: "Iconic rock climbing destination with world-renowned big wall routes.",
    activities: ["Rock Climbing"],
    difficulty: "Advanced",
    type: "rock"
  },
  {
    id: 20,
    name: "Whistler Blackcomb",
    position: [50.1163, -122.9574],
    season: "Nov - Apr",
    description: "One of the largest ski resorts in North America, known for its diverse terrain.",
    activities: ["Skiing"],
    difficulty: "All Levels",
    type: "ski"
  },
  {
    id: 21,
    name: "Banff National Park",
    position: [51.4968, -115.9281],
    season: "Year-round",
    description: "Offers a range of activities including skiing, hiking, and climbing.",
    activities: ["Skiing", "Hiking", "Rock Climbing"],
    difficulty: "All Levels",
    type: "mixed"
  },
  {
    id: 22,
    name: "Zermatt",
    position: [46.0207, 7.7491],
    season: "Year-round",
    description: "Home to the Matterhorn, offering skiing and alpine climbing.",
    activities: ["Alpine Climbing", "Skiing"],
    difficulty: "Intermediate to Advanced",
    type: "alpine"
  },
  {
    id: 23,
    name: "Norway",
    position: [61.0000, 8.0000],
    season: "Nov - Apr",
    description: "Offers a unique skiing experience with stunning fjords.",
    activities: ["Skiing"],
    difficulty: "Intermediate to Advanced",
    type: "ski"
  },
  {
    id: 24,
    name: "Niseko, Japan",
    position: [42.8048, 140.6874],
    season: "Dec - Mar",
    description: "Famous for its deep powder snow and ski resorts.",
    activities: ["Skiing"],
    difficulty: "Intermediate to Advanced",
    type: "ski"
  }
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const filteredLocations = filter === 'all' 
    ? locations 
    : locations.filter(loc => loc.activities.includes(filter));

  return (
    <PageWrapper>
      <LocationsWrapper>
        <FilterBar>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Locations
          </FilterButton>
          <FilterButton 
            active={filter === 'Alpine Climbing'} 
            onClick={() => setFilter('Alpine Climbing')}
          >
            Alpine Climbing
          </FilterButton>
          <FilterButton 
            active={filter === 'Skiing'} 
            onClick={() => setFilter('Skiing')}
          >
            Skiing
          </FilterButton>
          <FilterButton 
            active={filter === 'Rock Climbing'} 
            onClick={() => setFilter('Rock Climbing')}
          >
            Rock Climbing
          </FilterButton>
        </FilterBar>

        <MapContainer 
          center={[16.0055, 12.1798]} 
          zoom={2} 
          style={{ height: "100%", width: "100%" }}
          whenReady={() => setIsLoading(false)}
        >
          {isLoading && <LoadingOverlay>Loading Map...</LoadingOverlay>}
          
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; Esri'
          />
          {filteredLocations.map(location => (
            <Marker
              key={location.id}
              position={location.position}
              icon={createCustomIcon(
                location.type === 'alpine' ? '#ff4444' :
                location.type === 'ski' ? '#4444ff' :
                location.type === 'rock' ? '#44ff44' : '#ffaa00'
              )}
              eventHandlers={{
                click: () => {
                  setSelectedLocation(location);
                },
              }}
            />
          ))}
        </MapContainer>

        {selectedLocation && (
          <InfoCard>
            <CardContent>
              <CardTitle>{selectedLocation.name}</CardTitle>
              <CardSeason>{selectedLocation.season}</CardSeason>
              <CardDescription>{selectedLocation.description}</CardDescription>
              
              
            </CardContent>
          </InfoCard>
        )}
      </LocationsWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
  height: calc(100vh - 80px - 60px); // Subtract header and footer height
  margin: 80px 0 60px 0; // Add margins for header and footer
`;

const LocationsWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-size: 1.2rem;
  color: var(--slate-blue);
`;

const FilterBar = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 0.25rem;
    gap: 0.25rem;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--alpine-teal)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--alpine-teal)'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }

  &:hover {
    background: var(--alpine-teal);
    color: white;
  }
`;

const InfoCard = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 400px;
  z-index: 1000;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const CardSeason = styled.p`
  margin: 0.5rem 0;
  color: #f0a500;
`;

const CardDescription = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
`;


export default Locations;