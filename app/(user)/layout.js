import './globals.css'

import {Fira_Mono } from '@next/font/google'
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Footer from '../components/Footer';


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
     
      <body>
      <Cursor/>
      <Header/>
        <div className='grain'/>
        {children}
        <Footer/>
      </body>
     
    </html>
  )
}
