import Image from "next/image"

const Photo = ({image}) => {
  return (
    <div className='img h-full border bg-pink-400'>
      <Image height={900} width={1000} className='h-full object-contain' src={image} alt={'hello'} />
    </div>
  )
}

export default Photo