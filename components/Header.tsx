import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"
import Link from 'next/link';
import { Social } from '../typings';


type Props = {
   
}
function Header({}: Props) {
  return (
    
    <header className='bg-[rgba(36,36,36)] sticky top-0 p-5 flex items-start justify-between max-w-7pxl mx-auto z-20 xl:items-center opacity-60'>
        <motion.div
        initial={{
            x: -5000,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.0
        }}
        className='flex flex-row items-center'>
            <a href="/">
                <img className='w-10 mr-5 object-contain cursor-pointer' src="/logo-01.png" alt="" />
            </a>
            
            {/* social icons */}
            {/* {socials.map((social) => ( */}
                <SocialIcon 
                    // key={social._id}
                    url="https://twitter.com/its_mebuddy"
                    fgColor='gray'
                    bgColor='transparent'
                />

                <SocialIcon 
                    // key={social._id}
                    url="https://www.linkedin.com/in/hussain-rampurawala-a605081a0/"
                    fgColor='gray'
                    bgColor='transparent'
                />

                <SocialIcon 
                    // key={social._id}
                    url="https://github.com/husssain36"
                    fgColor='gray'
                    bgColor='transparent'
                />
            {/* )) */}
        {/* } */}
            
        </motion.div>

        <div className='flex flex-row space-x-5 '>
        {/* <Link href="blog">
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.1
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer mt-3'>
                <p className='uppercase md:inline-flex text-lg text-gray-400 hover:text-underline'> Blogs</p>
            </motion.div>
        </Link> */}


        <Link href="#contact-section">
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.1
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    fgColor='gray'
                    bgColor='transparent'
                    network='email'
                    className='cursor-pointer'
                />
                <p className='uppercase hidden md:inline-flex text-lg text-gray-400 '> Get In Touch</p>
            </motion.div>
        </Link>
        </div>
        
    </header>
  )
}

export default Header