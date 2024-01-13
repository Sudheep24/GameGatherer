import React from 'react'
import './signup.css'

export default function page() {
  return (
    <div className='ssss'>
      <span className='uss'>Sign Up</span>
        <span className='titt'>
          Username
        </span>
        <input type='text' className='box' placeholder='username'></input>

        <span className='titt'>
          Email Id
        </span>
        <input type='email' className='box' placeholder='Email Id'></input>

        <span className='titt'>
          Password
        </span>
        <input type='password' className='box' placeholder='password'></input>

        <span> If you already have an account ! <a href="/login">Login In</a></span>

        <button>Sign Up</button>

    </div>
  )
}
