import React from 'react'
import './navbar.css'
import Link from  'next/link'


export default function Navbar() {
  return (
    <div className='nav'>

        <img src="https://i.pinimg.com/736x/24/3f/8f/243f8f7c11cd929fe553f53095847d9f.jpg" alt="" className='profile' />
        
        <div>

          <Link href='/'>
              <button>Home</button>
          </Link>
          <Link href='/Events'>
              <button>Events</button>
          </Link>
        </div>
        <Link href='/login'>
          <button className='log'><img src="https://cdn.pixabay.com/photo/2014/04/02/10/48/symbol-304598_1280.png" alt="" /></button>
        </Link>
    
    </div>
  )
}
