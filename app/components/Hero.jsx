'use client'

import { useState} from 'react'
import { motion} from 'framer-motion'
import Link from 'next/link'

export const Ball = ({ pos, mvx, mvy, text,link }) => {
  return (
    <motion.div
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
      animate={{
        x: mvx,
        y: mvy,
      }}
      className={`h-60 w-60 grid place-items-center md:p-8 ${pos}`}
    >
      <Link href={link} className="text-wood font-light border border-wood h-60 w-60 relative text-2xl whitespace-nowrap rounded-full  grid place-items-center p-4">
        {text}
      </Link>
    </motion.div>
  )
}

const Hero = () => {
  const moving_values = [
    { value: -2, pos: 'col-start-2', text: 'Photo',link:'/work/photography'},
    { value: -3, pos: 'col-start-1', text: 'Website design',link:'/work/webdesign' },
    { value: 4, pos: 'col-start-3 row-start-3', text: 'Film',link:'/work/film'},
    { value: 4, pos: 'col-start-3', text: 'Graphics Design',link:'/work/graphics' },
    { value: 2, pos: 'col-start-2', text: 'Animation',link:'/work/animation' },
    { value: -4, pos: 'col-start-1 row-start-1', text: 'Art',link:'/work/art' },

  ]
  const [mx, setMx] = useState(0)
  const [my, setMy] = useState(0)

  const handleMouseMove = (e) => {
    setMx(e.clientX)
    setMy(e.clientY)
  }

  const handleMouseOut = (e) => {
    setMx(0)
    setMy(0)
  }

  return (
    <div
      className="w-screen h-screen hidden md:grid place-items-center z-10"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <div className="w-fit grid grid-cols-3 gap-4  justify-items-center items-center" >
        {moving_values.map(({ value, pos, link,text }) => (
          <Ball
            mvx={(value * mx) / 70}
            mvy={(value * my) / 50}
            pos={pos}
            text={text}
            link={link}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
