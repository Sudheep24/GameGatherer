"use client"

import React from 'react'
import './Logcomp.css'
import { signIn, useSession } from 'next-auth/react'

export default function LoginComp() {

const {data,status} = useSession();
console.log(data,status)

  return (
   /* <div className='logg'>
        <div>
        <span className='lo'>Login</span>
        <div>
        <span className='username'>
            Username
        </span>
        <input type="text" placeholder='username' className='user' />
        </div>
        <span className='password'>
            Password
        </span>
        <input type="password" placeholder='password' className='pass' />


        <span className='sss'>If you dont have an account? <a href='/signup'>Signup</a></span>
        <button className='logbut'> Login</button>
        </div>
        
    </div>*/
    <div className="logg">
      <div className="google">
        <button onClick={()=>signIn("google")}>Sign in with Google</button>
      </div>
    </div>
  )
}
