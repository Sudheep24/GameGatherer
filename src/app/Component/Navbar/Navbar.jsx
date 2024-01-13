import React from 'react'
import './navbar.css'
import Link from  'next/link'


export default function Navbar() {
  return (
    <div className='nav'>

        <img src="https://i.pinimg.com/736x/24/3f/8f/243f8f7c11cd929fe553f53095847d9f.jpg" alt="" />

        <Link href='/'>
            <button>Home</button>
        </Link>
        <Link href='/Events'>
            <button>Events</button>
        </Link>
    
    </div>
  )
}
