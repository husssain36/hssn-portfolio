import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';
type Inputs = {
    name: string;
    email: string;
    message: string;
    subject: string;
}

type Props = {
    
}

function Contact({}: Props) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto: rampurahussain36@gmail.com? 
                                subject= ${data.subject}
                                &body= Hi, My name is ${data.name}. {data.message}`;    
    };

  return (
    <div
    className='min-h-screen relative flex flex-col xl:flex-row basis-40 justify-center 
    items-center text-center md:text-left xl:px-10 xl:space-y-0 mx-auto'>
        <h3 className='absolute top-24 text-center uppercase tracking-[20px] text-gray-500 
        text-2xl'>
          Contact
        </h3>
        <div className='absolute top-36 flex flex-col space-y-10 mx-2'>
            <h4 className='text-xl font-semibold text-center '>
                I am open to chat and connect,{" "} 
                <span className='decoration-[#F7AB0A] underline '>Feel Free To Drop By.  </span>
            </h4>

            <div className='space-y-3'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+91 9699272858</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>rampurahussain36@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Byculla Mumbai - 400027</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto w-fit'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contact-input' type="text" />
                    <input {...register('email')} placeholder='Email' className='contact-input' type="email" />
                </div>
                <input {...register('subject')}  placeholder='Subject' className='contact-input' type="text" />
                <textarea {...register('message')}  placeholder='Message' className='contact-input'  ></textarea>
                <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold 
                text-lg'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contact