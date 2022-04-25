import React from 'react'






import {BrowserRouter, Routes, Route, Link} form "react-router-dom"
const Home=()=>{
    return (
        <h2>this is home componenet</h2>
    )
}

const About=()=>{
    return (
        <h2>this is about componenet</h2>
    )
}

const Contact=()=>{
    return (
        <h2>this is Contact componenet</h2>
    )
}

const Router = () => {
  return (
    <div>
    <navbar>
    <ul>
    <Link to ='/'>Home</Link>
    <Link to ='/about'>About</Link>
    <Link to ='/contact'>Contact</Link>
    </ul>
    </navbar>
        <h1>this is router </h1>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>

              </Routes>
          
          </BrowserRouter>
    </div>
  )
}

export default Router