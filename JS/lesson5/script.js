"use strict" // javascriptning qat'iy rejimi
// o'tgan darslikni eslash uchun masala
// let a = prompt("Enter a number:");

// console.log(a);

// if(a%2==0){ // bu yerda menga 1 yoki 0 deb javob qaytaradi
//     console.log("Juft son");
// }
// else{
//     console.log("Toq son");
// }

let a = 10; // lekin bu hatolik
var x = 5;
var x = 10; // var bu eski o'zartuvchi 

// const alphabet = "abcdefghijklmnopqrstuvwxyz"; // const bu o'zgarmas o'zgaruvchi

// alphabet = "qwerty" // bu hatolik, chunki const o'zgaruvchisi o'zgartirilmaydi
// console.log(alphabet); // bu yerda "abcdefghijklmnopqrstuvwxyz" chiqadi


// loop lar yani charxpalaklar bor
//
// for(let qiymat =10; qiymat >0; qiymat++){
//     console.log(qiymat); // bu yerda 5 dan 9 gacha sonlar chiqadi
// }
// ++ har safar bittadan son qo'shadi +=1
// -- har safar bittadan son ayiradi -=1
// ** darajaga oshiradi ** o'zini yozsak kvadratini chiqaradi agar bir ** 3 ddeb yozsak u kubini chiqaradi 
for(let i = 100; i >= 1; i--) {
 if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + " 3ga bo'linadi"); // fizzbuzz masalasi
    }
}

// while sikli biror shart to'g'ri bo'lsa, kodni takror-takror bajaradi
// Sintaksisi:
// while(shart){
//     // bajariladigan kod
// }

let son = 5; // boshlang'ich qiymat
while(son > 0) { // shart: son 0 dan katta bo'lsa
 console.log(son); // sonni chiqaradi
 son--; // sonni 1 ga kamaytiradi
}
// bu kod 5, 4, 3, 2, 1 ni chiqaradi