import React, { useEffect, useState } from 'react'
import "./App.css"
import Header from './components/Header'
import { FaSearch } from "react-icons/fa";
import Cards from './components/Cards';
function App() {
  const [value, setValue] = useState()
  const [allProduct, setProduct] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products)
      })


  }, [])
  function filterProduct() {
    if (value.length !== 0) {
      let filtered = allProduct.filter((item => item.title.toLowerCase().includes(value.toLowerCase())))
      setProduct(filtered)
    }
  }
  return (
    <div className='allhead'>
      <Header />
      <section className="search-section container">
        <div className="box">
          <FaSearch />
          <input type="text" placeholder='Product' onChange={(item) => { setValue(item.target.value) }} />
          <button onClick={filterProduct}>Search</button>
        </div>
      </section>
      <Cards Products={allProduct} />
    </div>
  )
}

export default App