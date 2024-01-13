import React from 'react';
import './signup.css';

export default function Page() {
  return (
    <div className='rt'>
      <div className="body">
        <div className="container">
          <form>
            <div className="head">
              <span>Sign up</span>
              <p>Create a free account with your email.</p>
            </div>
            <div className="inputs">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <button>Sign up</button>
            <p>Have an account? <a href="/Login">Log in</a></p>
          </form>
          
        </div>
      </div>
    </div>
  );
}

