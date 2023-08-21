import React from 'react';

import CountUp from 'react-countup';
// Observer hook intersection
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const About = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })
  return (
  <section className='section' id='about'ref={ref}>
    <div className='container mx-auto'>
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amout:0.3 }}
        className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/*Image*/}
      <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
    
      </motion.div>
  {/*Texte*/}
    <motion.div 
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false, amout:0.3 }}
      className='flex-1'>
      <h1 className='h2 text-accent'>À mon propos</h1>
      <h2>RADOS Alexandre</h2>
      <h3 className='h3 mb-4'>
        Bonjour, je m'appelle Alexandre RADOS,
        <strong>ingénieur en informatique et réseaux </strong>
      </h3>
      <p className='mb-6'>
        J'ai ci ca ca d'experience
      </p>
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
        <div >
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {
              inView ?
              <CountUp start={0} end={4} duration={3} /> : null}
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Années d'expérience <br/>
          </div>
        </div>
      </div>
      </motion.div>
      
    </div>
  </section>
  );
};

export default About;
