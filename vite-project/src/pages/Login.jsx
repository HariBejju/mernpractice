import React from 'react'
import "../css/login.css"
function Login() {
  return (
    <div className='login'>
    <div className="login-container">
      <form className="login-form">
        <h2>Welcome Back Nenba</h2>
        <div className="form-group">
          <input 
            type="email" 
            id="email" 
            name="email" 
            required  
            autoComplete="off"
          />
          <label className="text" htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            autoComplete="off"
          />
          <label className="text" htmlFor="password">Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login