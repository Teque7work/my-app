import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/(Components)/Header';
import Footer from '@/app/(Components)/Footer';
import Head from 'next/head'
import localFont from 'next/font/local'

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

      <Head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174476784-1"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-174476784-1');
        `}} />
      </Head>
        <Header />

        {children}

        <Footer />
        
        </body>
    </html>
  )
}
