import HeroBackground from '../../Images/Stetind.webp';

const Hero = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(42, 51, 66, 0.3), rgba(42, 51, 66, 0.5)), url(${HeroBackground})`
      }}
    >
      <div className="text-center text-snow-white max-w-[800px] px-8">
        <h1 className="font-heading text-[4.2rem] font-normal mb-6 tracking-[0.02em] leading-tight md:text-[3rem]">
          Personalized Mountain Experiences
        </h1>
        <p className="font-body text-xl font-light mb-10 tracking-[0.04em] leading-relaxed opacity-90">
          Professional mountain guiding in New Zealand, Canada, and Norway with expertise in technical alpine climbing and ski mountaineering
        </p>
        <p className="font-body text-xl font-light mb-10 tracking-[0.04em] leading-relaxed opacity-90">
          Focus on tailored, private guiding experiences
        </p>
      </div>
    </div>
  );
};

export default Hero;