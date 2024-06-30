import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import moment from 'moment'

type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='mt-10 md:mt-0 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[300px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden                 '>
        <motion.img 
        initial={{
            y:-100,
            opacity: 0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
        viewport={{once:true}}
        src={urlFor(experience?.companyImage).url()} 
        alt="" 
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[150px] xl:h-[150px] object-contain object-center"
        />
        
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl md:text-3xl font-light'>{experience.jobTitle}</h4>
            <p className='text-2xl md:text-xl font-bold mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>

                {experience?.technologies?.map((technology) => (
                    technology.image && (
                        <img 
                        key={technology._id}
                        src={urlFor(technology?.image).url()}
                        className='h-10 w-10 rounded-full'
                        alt="" />
                        )
                )   
                )}
            </div>
            <p className='uppercase py-5 text-gray-300'>{moment(experience.dateStarted).format('MMMM YYYY')} - {moment(experience.dateEnded).format('MMMM YYYY')} </p>

            <ul className='list-disc space-y-4 ml-5 text-sm' >
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard