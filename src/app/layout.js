import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Component/Navbar/Navbar'
import { AuthProvider } from './providers/AuthProvider'
import Footer from './Component/footer/Footer'
import Head from 'next/head'

import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GameGatherer',
  
  
  
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      
      <body className={inter.className}>
    
        <Navbar></Navbar>
        {children}
        <Footer/>
        
        </body>
    </html>
    </ClerkProvider>
  )
}
