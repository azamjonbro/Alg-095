import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <ul className="nav-links">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services" >Services</NavLink></li>
                <li><NavLink to="/product" >Product</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
            </ul>
            <div className="nav-buttons">
                <NavLink to="/login" className="btn btn-outline">Login</NavLink>
                <NavLink to="/signup" className="btn btn-3d">Sign Up</NavLink>
            </div>
        </nav>
    );
}