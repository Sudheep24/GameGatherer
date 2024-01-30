import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Component/Navbar/Navbar'
import { AuthProvider } from './providers/AuthProvider'
import Footer from './Component/footer/Footer'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GameGatherer',
  
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <script src="https://kit.fontawesome.com/56f8f15525.js" crossorigin="anonymous"></script>
      </Head>
      <body className={inter.className}>
        <AuthProvider>
        <Navbar></Navbar>
        {children}
        <Footer/>
        </AuthProvider>
        </body>
    </html>
  )
}
