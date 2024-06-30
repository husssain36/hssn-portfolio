import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[]
}

function Experience({experiences}: Props) {
  
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}
    className='h-screen relative flex overflow-hidden flex-col  text-left   
    md:flex-row max-w-full mx-auto justify-evenly items-center'>
        <h3 className='absolute top-24 text-center uppercase tracking-[20px] text-gray-500 
        text-2xl'>
          Experience
        </h3>
        <div className="absolute top-14 md:mt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {experiences.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience}/>
            ))}
        </div>
         
    </motion.div>
  )
}

export default Experience