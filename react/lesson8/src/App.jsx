import {Routes, Route, NavLink} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  return (
    <div>
      <nav>
        <li>
          <NavLink className="salom" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App