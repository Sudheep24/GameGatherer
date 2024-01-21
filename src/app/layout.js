import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Component/Navbar/Navbar'
import { AuthProvider } from '@/providers/authProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GameGatherer',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Navbar></Navbar>
        {children}
        </AuthProvider>
        </body>
    </html>
  )
}
