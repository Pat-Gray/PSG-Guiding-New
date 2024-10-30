import styled from 'styled-components';
import Footstool from '../../Images/Footstool.jpg'
const ParallaxSection = () => {
  return (
    <ParallaxContainer>
      
    </ParallaxContainer>
  );
};

const ParallaxContainer = styled.div`
  height: 60vh;
  background-image: url(${Footstool}); /* You'll need to add this image */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;



export default ParallaxSection; 