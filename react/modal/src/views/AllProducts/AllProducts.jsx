import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTimeout(()=>{setLoading(false);},1000)
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
          <p>Yuklanmoqda...</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((item) => (
            <Link to={"/"+item.id} className="product-card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.description.slice(0, 70)}...</p>
                <div className="card-footer">
                  <span>${item.price}</span>
                  <button>Buy</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
