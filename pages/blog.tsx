import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
type Props = {}

function blog({}: Props) {
  return (
    <div className="text-white">
      <Head>
        <title>Hussain Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <div className='flex'>
        <p className='mx-auto mt-40 my-auto items-center justify-center text-gray-500 font-bold text-xl'>Blog under development</p>
      </div>
      
    </div>
  )
}

export default blog