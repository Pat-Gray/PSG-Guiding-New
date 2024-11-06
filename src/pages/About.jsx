import { lazy, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PetEastRidge from '../Images/petOnEastRidge.webp'
import GuidePet from '../Images/GuidePet.webp'
import Pet1 from '../Images/Pet1.webp'
import NorwayIce from '../Images/PetNorwayIce.webp'
const About = () => {
  

  const values = [
    {
      title: "Safety First",
      icon: "shield-alt",
      description: "Your safety is paramount. Every decision is made with careful consideration of risks and conditions."
    },
    {
      title: "Personal Growth",
      icon: "mountain",
      description: "Mountains teach us about ourselves. Each journey is an opportunity for learning and development."
    },
    {
      title: "Environmental Respect",
      icon: "leaf",
      description: "We practice and promote responsible mountain ethics and environmental stewardship."
    }
  ];

  const carouselImages = [
    { url: GuidePet, caption: 'Guiding in the Southern Alps' },
    { url: Pet1, caption: 'Ski guiding up the Tasman Glacier' },
    { url: NorwayIce, caption: 'Ice Climbing in Norway'},
  ];

  const sliderSettings = {
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="min-h-screen">
      <div style={{ backgroundImage: `url(${PetEastRidge})` }} 
           className="h-[70vh] bg-black/40 bg-center bg-cover flex items-center justify-center text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-heading md:text-center"
        >
          About Petrouchka
        </motion.h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Story Section - Left Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-slate-blue text-4xl mb-8 font-heading">My Story</h2>
            <p className="text-slate-blue text-lg leading-relaxed mb-6">
              Born in New Zealand and raised with a deep connection to the mountains, 
              I've dedicated my life to exploring and sharing the world's most beautiful 
              alpine environments. With over a decade of guiding experience across three 
              continents, I bring technical expertise and local knowledge to every expedition.
            </p>
            <p className="text-slate-blue text-lg leading-relaxed mb-6">
              My journey began in the Southern Alps of New Zealand, where I developed 
              my skills in alpine climbing and ski touring. This led me to pursue guiding 
              professionally, eventually achieving IFMGA certification - the highest 
              level of mountain guiding qualification worldwide.
            </p>
            <p className="text-slate-blue text-lg leading-relaxed mb-6">
              Today, I split my time between New Zealand, Canada, and Norway, leading 
              climbs, ski tours, and training courses. My passion lies in helping others 
              discover their potential in the mountains, whether they're complete beginners 
              or experienced alpinists.
            </p>
          </div>

          {/* Carousel Section - Right Side */}
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden h-[400px] md:h-[600px] relative">
              <Suspense fallback={<div className="loading-skeleton h-full w-full"></div>}>
                <Slider {...sliderSettings} className="h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="relative h-full w-full">
                      <LazyLoadImage 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-full object-cover"
                        effect="blur"
                        placeholderSrc={image.url + '?quality=1'}
                        threshold={100}
                        wrapperClassName="h-full w-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                        <p className="text-lg text-center">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </Suspense>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-slate-blue text-4xl mb-8 font-heading">Guiding Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl text-alpine-teal mb-4">
                  <i className={`fas fa-${value.icon}`}></i>
                </div>
                <h3 className="text-slate-blue text-2xl mb-4 font-heading">{value.title}</h3>
                <p className="text-slate-blue leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        

        <section className="bg-slate-blue rounded-xl p-16 text-center text-white">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-4xl mb-4 font-heading">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your mountain objectives and create an experience 
              tailored to your goals.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-dawn-orange text-white px-8 py-4 rounded font-medium 
                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 