import React from 'react'
import {Link} from "react-router-dom"
import NavLink from './NavLink'
import "../css/logo.css"
import { useAuth } from '../context/AuthContext'


function Logos() {
  
  const auth = useAuth()
  // console.log("hi")
  console.log(auth?.isLoggedIn)
  const logsout=(e)=>{
  // console.log("hi")
  e.preventDefault()
    console.log("logout ra kanna")
    auth.logout()
    console.log("hello")
    
  }
  return (
    <div className='logoscomponent'>
      
        
      <Link to ="/" className='link'>
          <img src = "/openai-icon.png" alt='openaibro' width={'30px'} height={'30px'} className='openaiimage' color='white' />
            <p className='text'>Mern-GPT</p>
          
          </Link>
        {auth.isLoggedIn?(
        <div className='flexda'>
        <div className='but1'>
        <NavLink to="/chat" text="GoToChat"  />  
        </div>
        <div className='but2'>
        <button onClick={logsout} className='nav-link' style={{ background: 'none', border: 'none', padding: '0', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Logout</button>
           </div>
        </div>

        ):(
          <>
          <div className='but1'>
        <NavLink to="/login" text="Login" />  
        </div>
        <div className='but2'>
        <NavLink to="/signup"  text="Signup" />
        </div>
          </>
        )}
        
        
    </div>
  )
}

export default Logos