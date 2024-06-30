import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {
    
  return (
    <div className='h-screen relative flex flex-col md:flex-row text-center md:text-left
    justify-evenly items-center mx-auto max-w-full mt-20'>
        <h3 className='absolute top-20 md:top-16 lg:top-12 text-center uppercase tracking-[20px] text-gray-500 
        text-2xl'>
          Projects
        </h3>

        <div className='absolute  w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project, i) => (
                <motion.div key={i+1} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                    initial={{y:-200, opacity: 0}}
                    whileInView={{y: 0, opacity:1}}
                    transition={{duration:1.2}}
                    viewport={{ once: true }}
                    className="w-[350px] h-[150px]  md:w-[666px] md:h-[375px] object-cover"
                    src={urlFor(project.projectImage).url()} alt="" />
                
                    <div className='space-y-2 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl font-semibold text-center'>
                            Project {i+1}: {project.projectTitle}
                        </h4>
                        <div className='flex space-x-2'>
                            {project.technologies?.map((technology) => (
                                <img 
                                key={technology._id}
                                src={urlFor(technology.image).url()}
                                className='h-10 w-10 rounded-full'
                                alt="" />
                            ))}
                            

                        </div>
                        <p className='text-sm text-center md:text-left'>
                            {project.summary}
                        </p>
                    </div>
                
                </motion.div>
                
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/5 left-0 h-[500px] -skew-y-12'>

        </div>
    </div>
  )
}

export default Projects