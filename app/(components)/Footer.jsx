import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-screen px-8 flex justify-between py-4 z-10'>
        <a href='https://www.instagram.com/dev_xapis' target='_blank' className='text-light'>Design + Dev: Zziwa Shafic</a>
        <nav>
            <ul className='flex items-center space-x-8'>
                <li className='text-2xl text-light font-[500]'><Link href={'/about'}>About</Link></li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer