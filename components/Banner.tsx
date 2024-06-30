import React from 'react'

type Props = {}

function Banner({}: Props) {
  return (
    <div className='flex flex-col max-w-7xl mx-auto p-3'>
        <h1 className='flex text-5xl font-bold mt-7'>Blogs</h1>
        <div>
            <h1 className='text-xl mt-3'>Hey, there!, I am Hussain and welcome to my blogs. Have a great read <span role="img" aria-label="hand waiving">👋</span></h1>
        </div>
        <div className="w-[800px] mx-auto">
            <img className='width object-cover mx-auto rounded-xl mt-10' src="/banner-02.jpg" alt="" />
        </div>

        <div className='mt-10 border-b border-gray-800'></div>
    </div>
  )
}

export default Banner