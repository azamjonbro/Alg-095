
// box.addEventListener('click',(event)=>{
 //   console.log(event.target.className);
 
 // })
 let box = document.querySelector(".box")
 let openbox = document.querySelector(".openbox")
 let param = true
document.addEventListener('keydown',(event)=>{
  console.log(event.keyCode);
   
 param = !param 
  if(param){
   openbox.style.display="none"
  }else{
   openbox.style.display="flex"

  }
  // -> bu not degan qiymatni beradi agar true qiymat oldidan qo'yilsa falsega o'giradi agar false oldidan qo'yilsa truega o'giradi

})
// box.addEventListener('mousedown',(event)=>{
//   console.log(event);
// })
// box.addEventListener('mouseup',(event)=>{
//   console.log(event);
// })

// mouseEnter bu chegaradan element ichiga kirishi

// mouseLeave MouseOver chegaradan tashqariga chiqish

// click contextmenu bular bosilishidagi hodisalar


// mouseDown sichqoncha bosilganida 
// mouseUp sichqoncha qo'yib yuborilganida ishlaydi

// keydown input bu tugmalarni bosilishidagi eventlar



