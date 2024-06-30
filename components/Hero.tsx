import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Typewriter from "typewriter-effect";
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles'

type Props = {
  pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {  
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full w-[150px] h-[150px]' 
        src={urlFor(pageInfo.heroImage).url()}
        alt="Picture of the author"
        />
        
        <div className='z-20'>
        <h2 className='xs:text-[8px] text-sm uppercase text-gray-500 tracking-[5px] md:tracking-[15px] pb-4'>Software Engineer</h2>
          <h1 className='text-4xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3'>
              <Typewriter
                options={{
                  strings: ["Hi, My Name Is Hussain","I am a Developer", "I am a Designer", "I am a Creator"],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
            </span>
          </h1>

          <div className=''>
            <Link href="#about-section">
              <button className='hero-button-class'>About</button>
            </Link>
            <Link href="#experience-section">
              <button className='hero-button-class'>Experience</button>
            </Link>
            <Link href="#skills-section">
              <button className='hero-button-class'>Skill</button>
            </Link>
            <Link href="#project-section">
              <button className='hero-button-class'>Projects</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero