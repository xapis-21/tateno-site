'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/react-splide/css'
import Link from 'next/link'
import { urlFor } from 'lib/sanity.client'

const ScrollContainer = ({ data }) => {
  const splideOptions = {
    perPage: 1,
    autoWidth: true,
    perMove: 1,
    gap: '1rem',
    padding: {
      left: '20vw', // set the left padding to 20% of the viewport width
    },
    breakpoints: {
      640: {
        perPage: 1,
        gap: '0.5rem',
      },
      768: {
        perPage: 2,
      },
    },
  }
  return (
    <Splide options={splideOptions}>
      {data?.map(({ cover, title, desc }) => (
        <SplideSlide className="photo h-full w-fit group border-4 border-transparent hover:border-wood/50 transition duration-200 overflow-hidden relative isolate">
          <div className="absolute hidden text-light w-full h-full py-8 top-0 left-0 z-40 group-hover:flex flex-col justify-end px-4 duration-500">
            <h2 className="text-2xl font-[500] pb-2">{title}</h2>
            <p className="text-[12px]">{desc}</p>
          </div>
          <div className="h-full w-auto">
            <img
              className="h-full object-cover object-center max-w-[800px] grayscale group-hover:scale-105 group-hover:grayscale-0 duration-300"
              src={urlFor(cover).width(1000).url()}
              alt={title}
            />
          </div>
        </SplideSlide>
      ))}
      <SplideSlide>
        <div className="w-full px-20 pr-40 h-full flex flex-col justify-center items-center text-light">
          <h2 className="text-light/20 text-6xl font-bold translate-x-10 translate-y-6">
            Hire Us
          </h2>
          <ul>
            <li className="text-xl">
              <a href="tel:+256 761 074816">+256 761 074816</a>
            </li>
            <li className="text-xl">
              <a href="tel:+256 761 074816">Kasangati,Gayaza Road</a>
            </li>
            <li className="text-xl">
              <a href="tel:+256 761 074816">Uganda</a>
            </li>
          </ul>
          <div className="mt-14">
            <Link href={'/'}>{'next page'}</Link>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  )
}

export default ScrollContainer
