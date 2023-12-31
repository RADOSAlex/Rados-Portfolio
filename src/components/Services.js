import React from 'react';
import  {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const services = [
  {
    name: 'Ingénieur Informatique et Réseaux',
    description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    lien : 'En savoir plus',
  }
]
const Services = () => {
  return (
  <section className='section' id='services'>
    
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*Texte + Image*/}
        <motion.div
         variants={fadeIn('right', 0.3)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once: false, amout: 0.3}}
         className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>Que fais-je ?</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Je fais du dévelopement Informatique</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        {/*Services*/}
        <motion.div
        variants={fadeIn('left', 0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amout: 0.3}}
        className='flex-1'>
          <div>
            {/*Liste des services*/}
            {services.map((service, index) => {
              const {name, description, lien}= service;
              return (
              <div 
                className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                key={index}>
                <div className='max-w-[476px]'>
                <h4 
                className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                  {name}
                </h4>
                <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight/>
                  </a>
                  <a href='#' className='text-gradient text-sm'>
                    {lien}
                  </a>
                </div>
              </div>
              
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>

    </section>
  );
};

export default Services;
