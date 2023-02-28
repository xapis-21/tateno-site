
import Link from 'next/link'
import InstaScroll from './InstaScroll'


export const Ball = ({ text, icon, link }) => {
  return (
    <Link href={link} className="h-20 w-20 border-2 grid place-items-center ">
      <div className="text-wood font-light border border-wood h-20 w-20 relative text-2xl whitespace-nowrap rounded-full  grid place-items-center p-4">
        {icon}
      </div>
      <p>{text}</p>
    </Link>
  )
}

const MobileHero = () => {
  const links = [
    { text: 'Photo', link: '/work/photography' },
    { text: 'Website design', link: '/work/webdesign' },
    { text: 'Film', link: '/work/film' },
    { text: 'Graphics Design', link: '/work/graphics' },
    { text: 'Animation', link: '/work/animation' },
    { text: 'Art', link: '/work/art' },
  ]


  return (
    <main className="h-screen">
       <InstaScroll links={links}/>
    </main>
  )
}

export default MobileHero
