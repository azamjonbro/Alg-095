// o'tkan dars data typelarni otgandik
// Primitive
// 1- String
// 2- Number
// 3- Boolean
// 4- Undefined
// 5- Null
// 6- Bigint
// 7- Symbol

// non-primitive
// Object

// operator turlari 5 hil bolib ular

// 1- assigment operator -> tenglash operatori
// 2- arifmetik operatorlar
// 3- Comparison Operators tengligini tekshirish yoki teng emasligini tekshirish

//  shularni biriga qo'shish ayrish tekshirish kopaytirish bolish natijasini chiqarish
// matematik operatorlar
// 1+2 = 3 qo'shish 
// 2-1 = 1 ayrish 
// 3*2 = 6 ko'paytirish
// 4/2 = 2 bo'lish
// bu oddiy bo'lish hisoblanib chap tarafdagi qiyatni o'ng tarafdagi songa bo'ladi
// % bu bo'lish operatori esa chap tarafdagi sonni o'ng tarafga bo'lib qoldiqni tekshiradi
//  bu bizga har doim 0 yoki 1 degan javobni qaytaradi

// har doim ishlatamiz lekin etibor bermimiz 
// = bu oddiy natijani tekshirish va korish uchun
// 1==2 bu chap tarafdagi qiymatni o'ng taraf bilan solishtiradi true yoki false qiymat qaytaradi
// bu yerda javob false hisoblanadi 
// === bu chap tarafdagi qiymani ong tarafga tekshiribgina qolmay data typelari bilan qatiy tekshiradi

console.log(1=="1"); // ture 
console.log(1==="1"); //false

//true qiymatini falsega yoki falseni truega aylantirish usuli bor
 // ! -. bu belgi true qiymatni  falsega false qiymatni truega aylantirishi uchun ishlatilari
console.log(!true); // false
console.log(!false); // true

let a ="hello" // bu bosh qiymat yani undefined

console.log(a ?? "salom");

//  ?? bu belgi agar korsatilgan manzilda qiymat mavjud bolmasa yoki false qiymatga teng bolsa
// keyingi qiymatni tenglab yuborish uchun ishlatiladi

console.log("Salom" || undefined);

// || bu ikki tayoq yoki degan belgi hisoblanib bu console orasidan rost javobni qidiradi
// ikki tarafdagi qiymatlar olarsidan true qiymatni qidiiradi
//  agar ikkisi ham false bolsa ohirigisini qaytaradi

// false qiymatlar : "" , null , NaN , undefined, 0, !true


// && bu false qiymatlarni qidiradi

//  bu esa har doim false qiymatni qidiradi
// bu yerda esa ikkita bir hil false qiymat kelsa birinchisini oladi
// agar ikkita true qiymat kelsa ikkinchisini oladi

console.log(1234&&"Hello");

// tekrishini ham yana bir turi bor 

console.log("salom");

//  typeof bu tekshirilayotgan malumot qanday data typedaligini tekshirib beradi


// () bu jsdagi asosiy qavs hisoblanib har bir funksiyada yoki har bir tekshirish yoki har bir method ortidan qo'yladi
// bu xato usul X
// let son = 1
// if(son ==2){
//  console.log(son==3);
// }
// else if (son ==3){
//  son==4
// }


// bu to'g'ri usul
// let son = 1
//  son++ 

//  bu ++ har safar bir martadan oshirib boradi 



// & -> va 
// | -> yoki 
// ~ -> inkor