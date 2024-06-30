import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  skill: Skill,
}

function SkillSec({skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
      initial={{
        x : 200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{duration: 1}}
      viewport={{ once: true }}
      className="rounded-full w-20 h-20 border border-gray-500 object-contain
      group-hover:grayscale transition duration-300 ease-in-out"
      src={urlFor(skill?.image).url()} alt="" 
      /> 
      {/* <div className='absolute opacity-0 group-hover:opacity-60 transition 
      duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className="text-3xl font-bold opacity-100 text-black">100%</p>
        </div>
      </div>  */}
    </div>
  )
}

export default SkillSec