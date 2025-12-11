import {use, useEffect, useState} from 'react'


function Products() {
    const [news, setNews] = useState([])
    const [basket, setBasket] = useState({})
    useEffect(() => {
        fetch("https://hackathon.techinfo.uz/api/blogs")
        .then((res)=> res.json())
        .then((data)=>{
            setNews(data)
        })
    }, []);
    const addToCart = (oneProduct) => {
        let savedProduct = JSON.parse(localStorage.getItem("product")) || [];
        
    // product mavjudmi?

    let exist = savedProduct.find(item => item._id === oneProduct._id);
    setBasket(exist)
    if(exist&& exist.counter>=10){
        return alert("bolajon puling yetmaydi baribir asabbi buzib savatga qo'shma!")
    }
    if (exist) {
        exist.counter += 1; // mavjudni oshirish
    } else {
        oneProduct.counter = 1; // yangisiga counter qo‘yish
        savedProduct.push(oneProduct); // arrayga qo‘shish
    }

    localStorage.setItem("product", JSON.stringify(savedProduct));
}

  return (
    <div className='container product-container'>
        <h1>Products Page</h1>
        <p>Welcome to the products page. Here you can find a variety of products we offer.</p>


        <div className="products">
            {
            news.length?news.map((item)=>{
                return <div className='news-item'>
                    <img src={item.coverImage} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.shortDescription}</p>

                    <div className="buttonbox">
                        <button className="oneclick">Buy one click</button>
                        <button className="oneclick" onClick={()=>addToCart(item)}>{basket._id== item._id?basket.counter:"Add to cart"}</button>
                    </div>
                </div>
            }):<>Error</>
        }
        </div>
    </div>
  )
}

export default Products