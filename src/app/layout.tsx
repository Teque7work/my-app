import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/(Components)/Header';
import Footer from '@/app/(Components)/Footer';

import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'

// Font files can be colocated inside of `pages`
const SpandanFont = localFont({ src: '../font/FertigoPro-Regular2.otf' })


// const inter = Inter({ subsets: ['latin'] })

const roboto = localFont({
  src: [
    {
      path: '../font/FertigoPro-Regular2.otf',
      weight: '100',
      style: 'normal',
    }
  ],
})

// export const metadata: Metadata = {
//   title: 'Spandan Maternity Home',
//   keywords: 'Dr.Surbhi Vegad, Gynecologist Bhuj, Best Gynec in Bhuj Kutch',
//   description: 'As a distinguished gynecologist, IVF expert, and laparoscopic surgeon',
// }
  // openGraph: {
  //   title: 'Spandan Maternity Home',
  //   description: 'As a distinguished gynecologist, IVF expert, and laparoscopic surgeon',
  //   images: [
  //     {
  //       url: './Spandan-Logo.svg',
  //       width: 800,
  //       height: 600,
  //       alt: 'Spandan Maternity Home',
  //     },
  //   ],
  // },


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body className={SpandanFont.className}>

    
       

        <Header />

        {children}

        <Footer />
        
        </body>
        <GoogleAnalytics gaId="G-LJWN5XSLM3" />
    </html>
  )
}
