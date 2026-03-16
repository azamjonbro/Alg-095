
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addByAmount } from "../store/priceSlice.js";

export default function Navbar() {
//   const [price, setPrice] = useState(0);
  const price = useSelector((state) => state.price.value);
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <span className="logo">Dacha</span>

        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <span className="price">
          💰 {price.toFixed()} $
        </span>

        <button onClick={() => setPrice(price + 10)}>+</button>
        <button onClick={() => setPrice(price - 10)}>-</button>

        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}
