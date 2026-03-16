import {Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App