import React from 'react'
import './LoginRegister.css'
function LoginRegister() {
  return (
   <div className="Login">
    <div className="LoginForm">
        <form>
        <input type='name'  placeholder='Please enter your email...'/>
        <input type='email' placeholder='Please enter your email...'/>
        <input type='password'  placeholder='Please enter your email...'/>
        </form>
        <button>Sign In</button>
    </div>
    <div className="FormSwitch">
        <input type='checkbox'/>
        <p>Remember Me</p>
        <p>Already have an account?</p><span>Sign Up</span>
    </div>
   </div>
  )
}

export default LoginRegister