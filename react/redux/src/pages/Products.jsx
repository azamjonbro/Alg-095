import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addByAmount } from "../store/priceSlice.js";

function Products() {
  const [products, setProducts] = useState([]);
  const price = useSelector((state) => state.price.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.products.map((p) => ({ ...p, qty: 0 }))
        );
      });
  }, []);

  const increase = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p
      )
    );
  };

  const decrease = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.qty > 0
          ? { ...p, qty: p.qty - 1 }
          : p
      )
    );
  };

  const addToPriceToNavbar = (product) => {
    dispatch(addByAmount(product.price * product.qty));
  };

  return (
    <div className="products">

      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>

          <div className="actions">
            <button onClick={() => decrease(product.id)}>➖</button>
            <span>{product.qty}</span>
            <button onClick={() => increase(product.id)}>➕</button>
          </div>

          <button
            className="add-btn"
            onClick={() => addToPriceToNavbar(product)}
            disabled={product.qty === 0}
          >
            🛒 Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
