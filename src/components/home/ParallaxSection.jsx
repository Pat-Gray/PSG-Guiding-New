import Footstool from '../../Images/Footstool.jpg'

const ParallaxSection = () => {
  return (
    <div 
      className="h-[70vh] bg-scroll md:bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center relative"
      style={{ backgroundImage: `url(${Footstool})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default ParallaxSection; 