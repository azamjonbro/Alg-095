import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import addToCartFunc from "../../utils/AddToCart.js"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './OneProduct.css'

function OneProduct() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [activeSize, setActiveSize] = useState(null)
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])
  
  console.log(addToCartFunc.calculateBasket());
  
  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <div className="one-product">
      {/* LEFT */}
      <Link to="/">Ortga</Link>
      <div className="left">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="product-swiper"
        >
          {product.images?.map((img, index) => (
            <SwiperSlide>
              <img src={img} alt={product.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT */}
      <div className="right">
        <h1>{product.title}</h1>
        <p className="brand">{product.brand}</p>
        <h2>${product.price}</h2>

        <p className="desc">{product.description}</p>

        {/* SIZES */}
        <div className="sizes">
          <h4>Size:</h4>
          <div className="size-box">
            {sizes.map(size => (
              <button
                key={size}
                className={activeSize === size ? 'active' : ''}
                onClick={() => setActiveSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* COUNT */}
        <div className="counter">
          <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        {/* ACTION */}
        <button className="add-cart" onClick={()=>addToCartFunc.addToCartFunc(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default OneProduct
