import { Scrollable } from 'app/(components)/Scrollable'

export default function Page() {
  const images = [
    'https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg',
    'https://images.pexels.com/photos/14865792/pexels-photo-14865792.jpeg',
    'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg',
    'https://images.pexels.com/photos/14679223/pexels-photo-14679223.jpeg',
    'https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg',
    'https://images.pexels.com/photos/14865792/pexels-photo-14865792.jpeg',
    'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg',
    'https://images.pexels.com/photos/14679223/pexels-photo-14679223.jpeg',
  ]
  return (
    <div>
      <Scrollable images={images}/>
    </div>
  )
}
