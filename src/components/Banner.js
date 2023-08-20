import React from 'react';
//Images
import Image  from '../assets/avatar.svg';
//Icones for Banners
import {FaGithub, FaLinkedin} from 'react-icons/fa'; 
import {TypeAnimation} from 'react-type-animation';
//Motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section 
  className='min-h-[85hv] lg:min-h-[78hv] flex items-center' 
  id='home'>
  <div className='container mx-auto'>
    <div  className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
      {/* Text */}
      <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amout: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          Alexandre <span>RADOS</span>
          </motion.h1>
          
          <motion.div 
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amout: 0.7}}
          className='mb-6-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]' >
            <span className='mr-4'>Je suis</span>
            <TypeAnimation sequence={[
              'Ingénieur en Informatique et Réseaux', 2000,
              'Développeur', 2000,
            ]} 
            speed={50}
            className='text-accent'
            repeat={Infinity}
            />
          </motion.div>

          <motion.p
           variants={fadeIn('up', 0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once: false, amout: 0.7}}
           className='mb-8 max-w-lg mx-auto lg:mx-0'
           >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          </motion.p>
          <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amout: 0.7}}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contactez moi</button>
            <a href='#' className='text-gradient bt btn-link'>
              Mon Portfolio
            </a>
            {/* Réseaux Sociaux*/}
            <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amout: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaGithub/>
              </a>
              <a href='#'>
                <FaLinkedin/>
              </a> 
            </motion.div>
          </motion.div>
      
      </div>
      {/* Image */}
      <motion.div 
      variants={fadeIn('down', 0.5)} 
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once: false, amout: 0.7}}className='hidden, lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'
      >
        <img src={Image} alt=''/>
      </motion.div>
    </div>
  </div> 
  </section>
  );
};

export default Banner;
