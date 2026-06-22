import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "../components/pages/Home";
import About from "../components/pages/About";


function Navigation() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

    </Routes>

    </BrowserRouter>
  )
}

export default Navigation