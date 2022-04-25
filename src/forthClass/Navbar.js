import React from 'react'
import { Link } from 'react-router-dom'

export const Home=()=>{
    return(
        <h1>this is home componenet</h1>
    )
}

export const About=()=>{
    return(
        <h1>this is About componenet</h1>
    )
}

export const Contact=()=>{
    return(
        <h1>this is Contact componenet</h1>
    )
}
const Navbar = () => {
  return (
    <div>
       <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='about'>About</Link></li>
           <li><Link to='contact'>Contact</Link></li>
       </ul>

    </div>
  )
}

export default Navbar