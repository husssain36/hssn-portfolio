import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo,
}

function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 3}}
    className='flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-16 lg:top-12 text-center uppercase tracking-[30px] text-gray-500 
        text-2xl'>
          About
        </h3>
        <motion.img 
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{once:true}}
        transition={{duration: 1.2}}
        className='mt-20 -mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full 
        object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] ' 
        src={urlFor(pageInfo.profilePic).url()}
        />
        
        <div className='mt-10 space-y-10 px-0 md:px-10'>
          <h4 className='text-3xl mt-10 font-semibold'>
            Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
          </h4>
          <p className='text-[14px] xl:text-sm xl:hidden'>
          Hey, there I am Hussain, I am an Engineering student at Vidyalankar Institute of Technology. Here’s a little bit of info about me… 
          I’ve been coding since 2018. I consider myself as a full stack web developer, but my love lies with front end development. I personally 
          love NextJs and TailwindCSS. For other styling I love to use styled components. I started my journey in December of 2019 when I landed my 
          first ever internship in web development. During this I found passion for design and detail, This lead me to try out graphic designing for
           some time where I did almost 4 internships before starting out my own venture “The Pixel Parody”. The experience I gained from my stint 
           as a graphic designer has helped me better my skills as a web developer since I got to learn about UI/UX too. I am well versed with Data 
           Structures too and I love to code in C++. Thankyou <span role="img" aria-label="hand waiving">👋</span>
          </p>
          <p className= 'text-md hidden xl:block'>
          Hey, there I am Hussain, I am an Engineering student at Vidyalankar Institute of Technology. Here’s a little bit of info about me… 
          I’ve been coding since 2018. I consider myself as a full stack web developer, but my love lies with front end development. I personally 
          love NextJs and TailwindCSS. For other styling I love to use styled components. I started my journey in December of 2019 when I landed 
          my first ever internship in web development. During this I found passion for design and detail, This lead me to try out graphic 
          designing for some time where I did almost 4 internships before starting out my own venture “The Pixel Parody”. The experience I gained 
          from my stint as a graphic designer has helped me better my skills as a web developer since I got to learn about UI/UX too. I am well 
          versed with Data Structures too and I love to code in C++. I consider C++ as one of my great strengths since I am learning it since 2018 
          and 5 years down the line I still say I am learning it cause the latest updates and push keep on making it better and better. My core 
          subject consist of database management systems, dsa, operating system and computer networks. You can check out my work experience and my 
          projects down below!!. Thankyou <span role="img" aria-label="hand waiving">👋</span>
          </p>
          </div>
    </motion.div>
  )
}

export default About