import styled from 'styled-components';

const UpcomingTrips = () => {
  const trips = [
    {
      id: 1,
      title: "Winter Ice Climbing",
      location: "Canadian Rockies",
      date: "Jan 2024",
      spots: "2 spots left",
    },
    {
      id: 2,
      title: "Alpine Climbing",
      location: "New Zealand Alps",
      date: "Nov 2024",
      spots: "4 spots left",
    },
    {
      id: 3,
      title: "Ski Touring",
      location: "Norwegian Fjords",
      date: "Mar 2024",
      spots: "3 spots left",
    }
  ];

  return (
    <TripsSection>
      <SectionTitle>Upcoming Trips</SectionTitle>
      <TripsGrid>
        {trips.map(trip => (
          <TripCard key={trip.id}>
            <TripInfo>
              <TripTitle>{trip.title}</TripTitle>
              <TripLocation>{trip.location}</TripLocation>
              <TripDate>{trip.date}</TripDate>
              <TripSpots>{trip.spots}</TripSpots>
            </TripInfo>
            <InquireButton>Inquire</InquireButton>
          </TripCard>
        ))}
      </TripsGrid>
    </TripsSection>
  );
};

const TripsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--glacier-blue);
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--slate-blue);
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const TripsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TripCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TripInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const TripTitle = styled.h3`
  color: var(--slate-blue);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TripLocation = styled.p`
  color: var(--rock-gray);
  margin-bottom: 0.5rem;
`;

const TripDate = styled.p`
  color: var(--alpine-teal);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const TripSpots = styled.p`
  color: var(--dawn-orange);
  font-weight: 500;
`;

const InquireButton = styled.button`
  background: var(--slate-blue);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default UpcomingTrips; 