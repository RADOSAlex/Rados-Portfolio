import React from 'react';
import  {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';

const Work = () => {
  return ( 
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
        {/*Texte */}
        <div>
          <h2 className='h2 leading-tight text-accent'> 
            Mon dernier  <br/>
            travail
          </h2>
          <p className='max-w-sm mb-16'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <button className='btn btn-sm'>Voir tous mes projets</button>
        </div>
        {/*Image */}
        <motion.div 
                 variants={fadeIn('right', 0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amout: 0.3}}
        className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
          {/*Overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute-z-40 transition-all duration-300'></div>
          {/*Image */}
          <img 
          className='group-hover:scale-125 transition-all duration-500'
          src={Img1} 
          alt=''
          />
          {/*Title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>Ingénieur en Informatique et Réseaux</div>
          {/*SubTitle */}
          <div>
            <span className='text-3x1 text-wgute'>Project Tile</span>
          </div>
        </motion.div>
        </div>
      </div>
      <motion.div 
        variants={fadeIn('left', 0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amout: 0.3}}
        className='flex-1 flex-col gap-y-10'>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
          {/*Overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute-z-40 transition-all duration-300'></div>
          {/*Image */}
          <img 
          className='group-hover:scale-125 transition-all duration-500'
          src={Img2} 
          alt=''
          />
          {/*Title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>Ingénieur en Informatique et Réseaux</div>
          {/*SubTitle */}
          <div>
            <span className='text-3x1 text-wgute'>Project Tile</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Work;
