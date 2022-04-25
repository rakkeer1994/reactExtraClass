import React from 'react'
import Navbar from './Navbar'




import { Home, About, Contact } from './Navbar'


import { BrowserRouter, Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App