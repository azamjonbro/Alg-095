import {use, useEffect, useState} from 'react'


function Products() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch("https://hackathon.techinfo.uz/api/blogs")
        .then((res)=> res.json())
        .then((data)=>{
            setNews(data)
        })
    }, []);
  return (
    <div className='container products'>
        <h1>Products Page</h1>
        <p>Welcome to the products page. Here you can find a variety of products we offer.</p>


        {
            news.length?news.map((item)=>{
                console.log(item);
                
                return <div className='news-item'>
                    
                    <img src={item.coverImage} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.shortDescription}</p>
                </div>
            }):<>Error</>
        }
    </div>
  )
}

export default Products