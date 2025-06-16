// let obj = {
//  name:"Laylo",
//  weight:49,
//  height:175,
//  color:["purple"],
//  face:"smooth",
// }

console.log("salom"||0);
console.log(0&&null);

console.log("salom"&&null&&0);

console.log({}||undefined);
console.log(0&&undefined||null);
// step 1:  0 && undefined -> 0
// step 2: 0 || null -> null

console.log(null||undefined&&0||"salom");

// step 1: null || undefined -> undefined
// step 2: undefined && 0 -> 0
// step 3 : 0 || "salom" -> salom


// Math.pow(2,2) bu ish darajasini ortishiga olib keladi

// console.log(2**5);
// 2*2 -> 4 bu kvadeat
// 2*2*2 -> 8 bu kub
//2*2*2*2 -> 16 bu 2ni 4chi darajasi
// 2*2*2*2*2*2*2


let string = "Assalomu alaykum"

console.log(string);

// Math methodlari

console.log(Math.pow(2,5));
console.log(Math.abs(-9999));
console.log(Math.min(10,20,30));
console.log(Math.max(10,20,30));

console.log(Math.ceil(11.4 ))
console.log(Math.floor(-11.9));
console.log(Math.trunc(-11.9));
console.log(Math.round(10.6));

console.log(Math.trunc(Math.random()*50000));

const data = new WakeMap()


console.log(data)
