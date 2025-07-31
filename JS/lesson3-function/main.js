// function sayHello(){
//  console.log("men bilan salomlash");
 
//  return "sen kimsan"
//  //  return bu funksiyadan qaytariladigan qiymat
//  //  qaytarilgan qiymat esa funksiya nomiga tenglanib caqiriladigan joyda ishlatiladi
//  let ism = "Azamjon"; // bu o'zgaruvchi
//  console.log(ism);
//   // return ostida yozilgan codelar o'qilmaydi va ishlanmaydi
//   // chunki return dan keyin funksiya tugaydi
//   // return dan keyin yozilgan kodlar ishlamaydi
// }



// sayHello(); // bu funksiya chaqirildi
// console.log(sayHello())


//  function bu kalit so'z
//  sayHello bu funksiya nomi
//  () bu funksiya chaqirilishi
//  {} bu funksiya tanasi

// "" || '' -> dan ` ` bu string ustunligi bir qatorda string yozish shart emas hohlagancha enter bersangiz boladi ${} bu usul bilan dynamic yani tepada elon qilingan o'zgaruvchini yoza olasiz.
function daraxtlargasuvquyish(ism, soat) {
 console.log(`${ism} ismli shaxs ${soat} soat davomida daraxtlarga suv quydi`);
 console.log("Daraxtlarga suv quyilmoqda");
}

daraxtlargasuvquyish("Laylo", 3)

//  function decloration

const sayHello = function (){

}
//  bu yozilish usuli function expression

const sayTermin = () =>{

}
//  arrow function

