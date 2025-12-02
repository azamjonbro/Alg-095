import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
function Product() {
    const [product, setProduct]= useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data.products)
            setLoading(false)
        })
    },[])
  return (
    <div className='products'>
        {loading?<div>Loading.......</div>:null}
        {
            !loading&& !product.length?<div>Products not found</div>:product.map((item, index)=>{
                return(
                    <div className='product'>
                        <div className="product-imgbox" style={{"width":"400px"}}>
                            <img src={item.thumbnail} width="100%" height="100%" loading='lazy' prefix='true' alt={item.title} />
                        </div>
                        <div className="product-contentBox">
                            <h3>{item.title}</h3>
                            <p>{item.description.slice(0,100)}... <NavLink to={"/"+item.title}>More</NavLink></p>
                            <b>{item.price}</b>
                            <del>{Math.floor(item.price)+Math.floor(Math.random()*20)}</del>
                            
                        </div>
                        <div className="buttonbox">
                            <button>Buy one click</button>
                            <button>Add to cart</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product