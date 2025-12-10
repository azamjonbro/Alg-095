import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='container navbar-container'>
        <div className="logobox">
            <NavLink to="/">Logo</NavLink>
        </div>
        <div className="nav-list">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="iconbox">
            <MdOutlineShoppingCart />
            <FaHeart/>
            <button className="login">Login</button>
        </div>
    </nav>  
  )
}

export default Navbar