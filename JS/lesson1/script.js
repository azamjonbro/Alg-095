"use strict" // bu strict mode hisoblanib qorovul rejimini ishga tushuradi
// oddiy a yoki b qilib o'zgartuvchi elon qilmasdan turib code yozishni oldini oladi


console.log(typeof null); //javobi object
// oop yani object oriented programming
 
console.log(false && true && "Salom");
// || bu har doim birinchi kelgan true qiymatni oynaga chiqaradi yoki belgilab beradi

// && belgi esa birinchi kelgan false qiymatni oynaga chiqaradi yoki belgilab beradi 

// console.log("" && 1 ||10 || false &&"salom" || null);
// bu yerda console.logga 1 javobi chiqadi sababi birinchi ampersant belgi false qiymatni topa olmagach keyingi tekshirish opertatori tekshirishni boshlaydi keyingi tekshiruv operator esa birinchi kelgan true qiymatni qaytargani sabab boshqa qiymatlar oynaga chiqmaydi
console.log(""||"a" && "salom"||1&&"a"); 
console.log("salom" && "" || "" && 1 ||"");
console.log("salom" && 1 || "" ||1 && "salom");


