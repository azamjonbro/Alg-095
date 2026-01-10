import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import AllProducts from "./views/AllProducts/AllProducts"
import "./App.css"
import OneProduct from './views/OneProducts/OneProduct'
import Login from './views/Login/Login'
function App() {
  const [token, setToken] = useState("")
  useEffect(()=>{
    // localStorage.setItem("token", JSON.stringify("hellobro 112233445566"))
  let getToken = JSON.parse(localStorage.getItem("token"))
  if (getToken && getToken.length >= 16) {
    setToken(getToken)
  }
  },[])

  return (
    <div>
      {
        !token
        ?
        <Login/>
        :
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AllProducts />} />
          <Route path="/:id" element={<OneProduct />} />
        </Routes>
      }
    </div>
  )
}

export default App