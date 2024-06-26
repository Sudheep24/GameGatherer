"use client";

import React, { useState } from 'react';
import './navbar.css';
import Link from 'next/link';
import { signOut, useSession,signIn } from 'next-auth/react';

export default function Navbar() {


  return (
    <><div className='nav'>
     
    
        <img src="https://i.pinimg.com/736x/24/3f/8f/243f8f7c11cd929fe553f53095847d9f.jpg" alt="" className='profile' />
        <div>
          <Link href='/'>
            <button>Home</button>
          </Link>
          <Link href='/Events'>
            <button>Events</button>
          </Link>
        </div>
        
        <>
        <div className="loginlinks">
          <button className='buttlog'>Logout</button>
          <Link href='/write'>
            <button className='buttlog'>Post events</button>
          </Link>
          </div>
        </>
      
      </div>
      
    </>
  );
}
