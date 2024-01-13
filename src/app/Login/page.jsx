import React from 'react';
import './login.css';

export default function Page() {
  return (
    <div className='fo'>
      <div className="form-container">
        <p className="title">Welcome back</p>
        <form className="form">
          <div className="input-container">
            <input type="email" className="input" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="password" className="input" placeholder="Password" />
          </div>
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          <button className="form-btn">Log in</button>
        </form>
        <p className="sign-up-label">
          Don't have an account?<span className="sign-up-link"><a href='/signup'>Sign up</a></span>
        </p>
        
      </div>
    </div>
  );
}
