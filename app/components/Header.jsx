import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center px-8 z-10'>
        <Link href={'/'} className='text-2xl text-light font-[500]'>Tateno Pictures</Link>
    </header>
  )
}

export default Header