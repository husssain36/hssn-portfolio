import React from 'react'
import { motion } from 'framer-motion'
import SkillSec from './SkillSec'
import { Skill } from '../typings'

type Props = {
  skills: Skill[]
}

function Skills({skills}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
    className='min-h-screen relative flex flex-col xl:flex-row justify-center 
    items-center text-center md:text-left max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto'>
        <h3 className='absolute top-24 text-center uppercase tracking-[20px] text-gray-500 
        text-2xl'>
          Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current profeciency</h3>
        <div className='absolute top-52 grid grid-cols-5 gap-4'>
            {skills?.map((skill) => (
              <SkillSec key={skill._id} skill={skill}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills