import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function OnePage() {
    let {id} = useParams()
    const [oneProduct , setOneProduct]= useState()
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch("https://dummyjson.com/products/"+id).then((res)=>res.json())
        .then((data)=>{
            // setOneProduct(data)
            setLoading(false)
        })
    },[])
    console.log(id);
    
  return (
    <div>
        {
            loading
            ?
            <>loading.....</>:
            oneProduct?.stock>0?
            <div className='oneProduct'>
                <img src={oneProduct?.thumbnail} alt="" />
                {/* oddiy soroq ishlatish ni asosiy sababi object ichida null qiymat qaytib qolsa yoki siz hohlagan key qaytmasa foydalanuvchiga hatolik chiqarmaslik uchun qollaniladi va bu optional chaining deyiladi. */}
                <h2>{oneProduct.title}</h2>
            </div>
            :
            <>Product Not found</>
        }
    </div>
  )
}

export default OnePage