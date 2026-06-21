import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'

function Navigation() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<About/>}/>

    </Routes>

    </BrowserRouter>
  )
}

export default Navigation