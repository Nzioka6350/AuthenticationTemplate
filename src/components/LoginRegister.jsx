import React from 'react'
import './LoginRegister.css'

function LoginRegister() {
  return (
   <div className="Login">
    <div className="LoginForm">
        <h1>Sign In</h1>
        <form>
        {/* The first input type should be 'text' instead of 'name' */}
        <input type='name'  placeholder='Please enter your email...'/>
        
        {/* Email input field */}
        <input type='email' placeholder='Please enter your email...'/>
        
        {/* Password input field */}
        <input type='password'  placeholder='Please enter your email...'/>
        </form>
        
        {/* Sign-in button */}
        <button>Sign In</button>
        
        <div className="formHelp">
        <div className="remember">
        {/* Checkbox for remembering login */}
        <input type='checkbox'/>
        <label htmlFor="">Remember Me</label>
        </div>
    </div>

    <div className="form-switch">
        {/* This message is repeated, one should say 'Don't have an account?' */}
        <p>Already have an account?</p><span>Sign Up</span>
        <p>Already have an account?</p> <span>Login</span>
    </div>
   </div>
    </div>
  )
}

export default LoginRegister
