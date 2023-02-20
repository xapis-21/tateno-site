'use client'

import { Inter } from '@next/font/google'
import Hero from './(components)/Hero'
import VideoBg from './(components)/VideoBg'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <div className="h-full w-full overflow-hidden grid place-items-center bg-black/60 backdrop-blur-xl">
      <div className='absolute top-0 right-0 w-full h-full scale-[400%] md:scale-[300%] grayscale isolate'>  
      <div className='grain z-10'/>
      <VideoBg videoSrc={"https://youtu.be/RVqj-6dljx0"}/> 
      </div>
      <Hero/>
    </div>
  )
}
