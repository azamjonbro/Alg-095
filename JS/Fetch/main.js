"use strict"

let productList = document.querySelector(".product-list")
fetch("https://fakestoreapi.com/products",{
 method:"GET",
 headers:{
  "Content-type":"application/json"
 },
})
.then((response)=>response.json())
.then((data)=>{
 data.length ?data.map((e, index)=>{
  let product = document.createElement("div")
  product.classList.add("product")

  product.innerHTML=`
   <img src="${e.image}" width="250px" height="250px"/>
   <h2>${e.title.slice(0,20)} ...</h2>
  `
  productList.appendChild(product)
 }):console.log('no data') 
})



