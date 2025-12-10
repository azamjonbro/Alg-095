import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./views/Home/Home.jsx"
import About from "./views/About/About.jsx"
import Navbar from './components/Navbar.jsx'
import Products from './views/Products/Products.jsx'
import "./App.css"
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App