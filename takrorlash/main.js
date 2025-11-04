// data("salom") //argument


// function data(data){// parameter
//     // console.log(data);
//     return data
// } // hoisting darajaga oshish

// let menberganqiymat = prompt("qiymat kiriting")

// function checkCharacter (harf){

// }
// checkCharacter(menberganqiymat)


// localStorage.setItem("nom","qiymat")
// localStorage.setItem("hey","qiymat")
// localStorage.setItem("salom","qiymat")

let data = localStorage.getItem("nom")
console.log(data);
let login = document.querySelector(".login")

// localStorage.removeItem("nom")

localStorage.clear()    

if(data !==null){
    console.log("hello");
    login.style.display="none"
}
else{
    console.log("bye");
    login.style.display="block"
    
}