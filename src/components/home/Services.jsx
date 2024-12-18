import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import IceClimbing from '../../Images/HansIceClimbing.webp';
import Skiing from '../../Images/SkiNorway.webp';

const Services = () => {
  return (
    <section className="py-24 px-8 bg-snow-white">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-slate-blue text-4xl mb-12"
      >
        Mountain Experiences
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        <Link to="/climb" className='pointer'>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300"
          >
            <img 
              src={IceClimbing} 
              alt="Alpine Climbing" 
              className="w-full h-[550px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-slate-blue text-2xl mb-4">Climb</h3>
              <p className="text-rock-gray mb-6 leading-relaxed">
                Technical alpine ascents and rock climbing. 
                Customized trips for all skill levels.
                Build on previous experience.
              </p>
              <p
                className="text-alpine-teal font-medium hover:underline"
              >
                Explore Climbing →
              </p>
            </div>
          </motion.div>
        </Link>

        <Link to="/ski" className='pointer'>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300"
          >
            <img 
              src={Skiing} 
              alt="Backcountry Skiing" 
              className="w-full h-[550px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-slate-blue text-2xl mb-4">Ski</h3>
              <p className="text-rock-gray mb-6 leading-relaxed">
                Backcountry skiing and ski mountaineering adventures. 
                From powder runs to technical descents.
              </p>
              <p 
                className="text-alpine-teal font-medium hover:underline"
              >
                Explore Skiing →
              </p>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Services; 