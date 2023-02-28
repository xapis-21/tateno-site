
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/react-splide/css'
import {Splide, SplideSlide } from '@splidejs/react-splide'
import { Ball } from './MobileHero'

const InstaScroll = ({links}) => {
  
    const splideOptions = {
        autoWidth:true,
        perPage: 1,
        perMove: 1,
        gap: '1rem',
      }
  return (
  <div className='w-screen'>
  <Splide options={splideOptions}>
    {links.map(({ icon, link, text }) => (
      <SplideSlide>
        <Ball icon={icon} text={text} link={link} />
      </SplideSlide>
    ))}
    </Splide>
  </div>
  
  )
}

export default InstaScroll