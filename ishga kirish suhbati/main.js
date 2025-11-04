// js bu dynamic dasturlash tili hisoblanib web sahifalarni interaktiv qilishda ishlatiladi.

// js ni html ga ulash uchun 3 usul bor
// 1-usul: inline usul
// 2-usul: internal usul
// 3-usul: external usul

// 1-usul: inline usul
// bu usulda js kodlari html elementlarining ichida yoziladi
// kamchiliklari: kodlarni boshqarish qiyinlashadi, kodlar chalkashib ketadi

// 2-usul: internal usul
// bu usulda js kodlari html faylning <head> yoki <body> teglarining ichida <script> teglarining orasida yoziladi
// kamchiliklari: kodlarni boshqarish qiyinlashadi, katta loyihalarda ishlatish tavsiya etilmaydi

// 3-usul: external usul
// bu usulda js kodlari alohida .js faylga yozilib, html faylga <script> tegining src atributi orqali ulanishi amalga oshiriladi
// afzalliklari: kodlarni boshqarish osonlashadi, katta loyihalarda ishlatish tavsiya etiladi

// misol uchun external usulni ko'rib chiqamiz:

// index.html faylida quyidagicha ulash mumkin:
// <script src="main.js"></script>

// main.js faylida js kodlari yoziladi

// end of main.js fayli 






// javaScript C dasturlash tili oilasiga mansub bolib u sintaksis jihatidan C++ ga juda yaqin hisoblanadi. Lekin javaScript ning C++ dan farqi shundaki u obyektga yo'naltirilgan dasturlash tilidir. Ya'ni javaScript da hamma narsa obyekt hisoblanadi. Masalan, sonlar, matnlar, massivlar, funksiyalar va hatto null va undefined qiymatlari ham obyekt hisoblanadi.

// javaScript ning yana bir muhim xususiyati shundaki u dinamik tipga ega dasturlash tilidir. Ya'ni o'zgaruvchilarning tiplari dastur ishga tushirilganda aniqlanadi va o'zgaruvchilar istalgan vaqtda istalgan turdagi qiymatlarni qabul qilishi mumkin.

// javaScript ning yana bir muhim xususiyati shundaki u interpretatsiya qilinadigan dasturlash tilidir. Ya'ni javaScript kodlari brauzer tomonidan to'g'ridan-to'g'ri bajariladi va kompilyatsiya qilinmaydi. Bu esa dasturchilarga kodlarni tezda yozish va sinovdan o'tkazish imkonini beradi.

// javaScript ning yana bir muhim xususiyati shundaki u voqea asosida dasturlash tilidir. Ya'ni dastur foydalanuvchi harakatlariga (masalan, tugmani bosish, matn kiritish va h.k.) javob beradigan kodlarni yozish imkonini beradi. Bu esa interaktiv web sahifalar yaratishda juda muhim hisoblanadi.


// 2-ni 53-1 chigacha number hisoblanadi
// undan kattalari esa BigInt hisoblanadi

console.log(typeof 256); // number
console.log(typeof 9007199254741991); // number
console.log(typeof 9007199254741992n); // BigInt

// false, null, 0, NaN, undefined, "" bu qiymatlar javascriptda false hisoblanadi

// integer bu butun sonlarni ifodalaydi
// float bu o'nlik sonlarni ifodalaydi

// misollar
let a = 10; // integer
let b = -10.4; // float

console.log(Math.floor(b));
console.log(Math.trunc(b));
console.log(Math.round(b));
console.log(Math.ceil(b));

let soz = "Hello World";

console.log(soz.slice(6)); // bu yerda slice metodi yordamida matnning 6-indeksidan boshlab oxirigacha kesib olindi
console.log(soz.substring(0, 5)); // bu yerda substring metodi yordamida matnning 0-indeksidan boshlab 5-indeksigacha kesib olindi
console.log(soz.substr(6, 5)); // bu yerda substr metodi yordamida matnning 6-indeksidan boshlab 5 ta belgini kesib olindi


