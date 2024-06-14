import React, { useEffect } from 'react'
import "../css/login.css"
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
import { loginUser } from '../helpers/api.js'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Signup() {
  const auth = useAuth()
  const navigate = useNavigate();
  const handleSubmit =async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email)
    console.log(password)
    try{
      console.log("try la irukenda kanna")
      toast.loading("signing In",{id:"signup"})
      await auth?.signup(name,email,password)
      toast.success("signed In Successfully",{id:"signup"})

    }
    catch(error){
      console.log(error)
      toast.error("sign up failed da kanna",{id:"signup"})
    }
  }
  useEffect(()=>{
    if (auth?.user) {
      navigate("/chat")
    
    }
  },[auth])
  return (
    <div className='login'>
    <div className="signup-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome to MERN gpt</h2>
        <div className="form-group">
          <input 
            type="name" 
            id="name" 
            name="name" 
            required  
            autoComplete="off"
          />
          <label className="text" htmlFor="name">Name</label>
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  )
}

export default Signup