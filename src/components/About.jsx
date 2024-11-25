import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}

        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        
       
        
        <img src={icon} alt={title}
        className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div> 
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka, with a strong interest in full-stack development and UI/UX design. My projects and experiences showcase my passion for crafting seamless, user-friendly digital solutions that merge functionality with visual appeal. Motivated by curiosity and a drive to solve real-world problems, I constantly seek to expand my expertise and stay ahead in the ever-evolving tech landscape. Whether working independently or within a team, I bring creativity, dedication, and a commitment to delivering meaningful and impactful results.

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}
      </div>
      
    
    </>
  )
}

export default SectionWrapper (About, "about");
