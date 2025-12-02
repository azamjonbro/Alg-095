import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './views/Home/Home'
import Error from "./components/Error"
import About from './views/About/About'
import Product from './views/Product/Product'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App