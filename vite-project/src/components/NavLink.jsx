import React from 'react'
import { Link } from 'react-router-dom'
import "../css/navlink.css"
function NavLink(props) {
  return(
    <div>
        <Link to={props.to} >
    <button >{props.text}</button>
    </Link>
    </div>
  ) 
}

export default NavLink