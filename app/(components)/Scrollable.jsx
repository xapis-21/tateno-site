'use client'
import { useState } from 'react'
import { ScrollContainer } from 'react-indiana-drag-scroll'
import Photo from './Photo'
import Image from 'next/image'
import { motion } from 'framer-motion'
import 'react-indiana-drag-scroll/dist/style.css'

// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import Link from 'next/link'

export const Scrollable = ({ images,nextpage,nextlink }) => {
  const [showText, setShowText] = useState(false)
  const [sliderStyle, setSliderStyle] = useState(null)

  const [cdx, setCdx] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    setCdx({ x: e.clientX, y: e.clientY })
  }

  function handleMouseEnter() {
    setShowText(true)
  }

  return (
    <div
      className="w-screen h-screen flex items-center relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      {showText && (
        <motion.div
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100,
          }}
          animate={{
            x: (6 * cdx.x) / 70,
            y: (2 * cdx.y) / 50,
          }}
          className={`h-60 w-60 grid place-items-center p-8 z-50 fixed top-0 left-80`}
        >
          <span className="text-wood/40 font-light border border-wood/40 h-60 w-60 relative text-2xl whitespace-nowrap rounded-full  grid place-items-center p-4">
            Click & Drag
          </span>
        </motion.div>
      )}
      <Swiper
        slidesPerView={'3'}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex items-center"
      >
        {images.map((image, title, desc) => (
          <SwiperSlide className="h-full w-fit group border-4 border-transparent hover:border-wood/50 transition duration-200 overflow-hidden relative isolate">
            <div className="absolute hidden text-light w-full h-full py-8 top-0 left-0 z-40 group-hover:flex flex-col justify-end px-4 duration-500">
              <h2 className="text-2xl font-[500] pb-2">Photo text</h2>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus atque asperiores blanditiis vero expedita reprehenderit
                omnis ex quos explicabo tenetur.
              </p>
            </div>
            <Image
              height={1000}
              width={1000}
              className="h-full object-cover photo grayscale group-hover:scale-105 group-hover:grayscale-0 duration-300"
              src={image}
              alt={'hello'}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className='w-full h-full flex flex-col justify-center items-center text-light'>
            <h2 className='text-light/20 text-6xl font-bold translate-x-10 translate-y-6'>Hire Us</h2>
            <ul>
              <li className='text-xl'><a href="tel:+256 761 074816">+256 761 074816</a></li>
              <li className='text-xl'><a href="tel:+256 761 074816">Kasangati,Gayaza Road</a></li>
              <li className='text-xl'><a href="tel:+256 761 074816">Uganda</a></li>
            </ul>
            <div className='mt-14'>
              <Link href={nextlink || '/'}>{nextpage || 'next page'}</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
