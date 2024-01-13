import React from 'react'

export default function LoginComp() {
  return (
    <div className='logg'>
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
        <input type="text" placeholder='password' className='pass' />


        <span className='sss'>If you dont have an account? <a href='/signup'>Signup</a></span>
        <button className='logbut'> Login</button>
        </div>
        
    </div>
  )
}
