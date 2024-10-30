import React, { useState, Suspense } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    image: "/images/mount-cook.jpg",
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
    image: "/images/mt-aspiring.jpg",
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
    image: "/images/remarkables.jpg",
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
    image: "/images/treble-cone.jpg",
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
    image: "/images/wye-creek.jpg",
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
    image: "/images/mt-taranaki.jpg",
    season: "Dec - Mar",
    description: "Iconic volcanic peak with alpine climbing and skiing opportunities.",
    activities: ["Alpine Climbing", "Skiing"],
    difficulty: "Intermediate",
    type: "mixed"
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
          center={[-43.5950, 170.1410]} 
          zoom={6} 
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
            <CardImage src={selectedLocation.image} alt={selectedLocation.name} />
            <CardContent>
              <CardTitle>{selectedLocation.name}</CardTitle>
              <CardSeason>{selectedLocation.season}</CardSeason>
              <CardDescription>{selectedLocation.description}</CardDescription>
              <CardDetails>
                <DetailItem>
                  <i className="fas fa-mountain"></i>
                  {selectedLocation.difficulty}
                </DetailItem>
                <Activities>
                  {selectedLocation.activities.map((activity, index) => (
                    <Activity key={index}>{activity}</Activity>
                  ))}
                </Activities>
              </CardDetails>
              <ExploreButton to={`/locations/${selectedLocation.id}`}>
                Explore Routes
              </ExploreButton>
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
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--alpine-teal)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--alpine-teal)'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

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

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
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

const CardDetails = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const Activities = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Activity = styled.div`
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  background: var(--alpine-teal);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--sage-green);
    transform: translateY(-2px);
  }
`;

export default Locations;