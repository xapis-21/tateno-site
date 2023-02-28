'use client'

import MobileHero from '../components/MobileHero'
import Hero from '../components/Hero'
import VideoBg from '../components/VideoBg'




export default function Home() {
 
  return (
    <div className="h-full w-full overflow-hidden grid place-items-center bg-black/60 ">
      <div className='absolute top-0 right-0 w-full h-full scale-[400%] md:scale-[300%] grayscale isolate'>  
      {/* <div className='grain z-10'/> */}
      <VideoBg videoSrc={"https://youtu.be/RVqj-6dljx0"}/> 
      </div>
      <Hero/>
      <MobileHero/>
    </div>
  )
}
