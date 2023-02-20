import './globals.css'

import {Fira_Mono } from '@next/font/google'
import Cursor from './(components)/Cursor';
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./(components)/Header'), { ssr: false });
const Footer = dynamic(() => import('./(components)/Footer'), { ssr: false });


const sans =Fira_Mono({
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500','700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${sans.className} bg-dark`}>
      <head />
      <Cursor/>
      <Header/>
      <body>
        <div className='grain'/>
        {children}
      </body>
      <Footer/>
    </html>
  )
}
