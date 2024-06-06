import React from 'react'
import "../css/login.css"
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
import { loginUser } from '../helpers/api'
 function Login() {
  const auth = useAuth()
  const handleSubmit =async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email)
    console.log(password)
    try{
      console.log("try la irukenda kanna")
      toast.loading("signing In",{id:"login"})
      await auth?.login(email,password)
      toast.success("signed In Successfully",{id:"login"})

    }
    catch(error){
      console.log(error)
      toast.error("sign in failed da kanna",{id:"login"})
    }
  }
  return (
    <div className='login'>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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