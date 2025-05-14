// o'zgaruvchilarni tenglash uchun va tekshirish uchun o'zgatuvchilar elon qilingan
// var, let, const buni qanday ishlatamiz

var a = 10
    a = 20 
// var bu juda ham eski bolgan o'zgartuvchi hisoblanib bunda bir marta elon qilingan o'zgaruvchini qayta elon qilsa bo'ladi

// let b = 1
// let b = 2 
// vardan letning farqi bir marta elon qilinga o'zgaruvchini qayta elon qilib bolmaydi

const x = 10
//const bu qatiy o'zgartirib bolmas o'zgartuvchi hisoblanib unga berilgan o'zgaruvchi va (value ) qiymatni hech qachon o'zgartirib bolmaydi
// buni o'zgartirishni faqat bir usuli bor uni object mavzusida tushuntirib beraman

// alert bu bizga kichik malumotlarni foydalanuvchiga korsatish uchun ishlatiladigan modal oyna bolsa 
// confirm tasdiqlash yoki qaytarish modal oynasi hisoblanadi

// console.log esa foydalanuvchiga korinmaydigan va faqat yaratuvchilar yani dasturchilar korishi mumkin bolgan muhit 
console.log(x);




// malumot turlari
//1- matn -> Sting  bundan foydalanish uchun biz "" yoki '' yoki `` dan foydalanib string yani matn yozishim mumkin
let salom = "Hello world" // string data typesini elon qilish usuli
//2- raqamlar -> Number  23163512675326157 bu raqam elon qilish usuli ammo `3261732178` // bu string hisoblanadi

let number =  "1" // bu string
let num = 2 // bu number

// uchinchi malumot turi bu numberni kattaroq varianti bigint
// number 2ni 53 darajasini -1 sigacha tog'ri hisobledi 
// undan katta qiymatlar uchun bigInt ishlatiladi

// 4-chi data type boolean data typesi true -> rost  false -> yolg'on qiymatlarni qaytaradi

let meningismimazamjon = true
let meningismimyoq = false

// 5-chi data type null bu qiymat ham yoq o'zgaruvchi ham yoq null degan javob qaytishi kerak lekin bizga hozir hatolik chiqadi sababi bizda bunday qiymatni console tekshirib bera olmaydi

// 6-chi data type bu undefined bu o'zgaruvchi bor ammo qiymat mavjud bolmagan hollarda 
// chiqadigan hatolik 
let galaxy 
console.log(galaxy);

// 7-chi data type symbol bu (unique) takrorlanmas malumotlarni yaratish uchun ishlatiladi

let hello = Symbol("salom")
let welcome = "salom"

console.log(hello ==welcome);

// shu yergacha bolgan malumot turlari primitiv malumot turlari hisoblanadi

// bizda ikki hil data type bolib  biri primitive ikkinchisi non-primitive
// non-primitive -> 8-chi data type bu object

// object bu juda kop key va valuelardan tashkil topgan malumot turi
// object yaratish uchun {} shunday qavs (scope) ishlatishimiz kerak 
let person = {
 name:"Laylo",
 age:18,
 weight:45,
 height:165,
 isBeautyfull:true,
 color:"white"||"Pink",
 haircolor:"beige",
} // bu object

console.log("Kelinlikka nomzodning ismi "+person.name + " " + "Yoshi " + person.age );



