/**
 * 1-push
 * Array.prototype.push()
 * 
 * Vazifasi:
 *  - Massivning oxiriga element qo'shadi, yangi uzunlikni qaytaradi.
 * Ishlanishi:
 *  - let arr = [1,2]; arr.push(3); // [1,2,3], natija: 3
 * Hato ishlashi:
 *  - Massiv bo'lmasa, TypeError.
 */

/**
 * 2-pop
 * Array.prototype.pop()
 * 
 * Vazifasi:
 *  - Massivning oxiridan elementni olib tashlaydi, o'sha elementni qaytaradi.
 * Ishlanishi:
 *  - let arr = [1,2,3]; arr.pop(); // [1,2], natija: 3
 * Hato ishlashi:
 *  - Bo'sh massivda undefined qaytaradi.
 */

/**
 * 3-unshift
 * Array.prototype.unshift()
 * 
 * Vazifasi:
 *  - Massiv boshiga element qo'shadi, yangi uzunlikni qaytaradi.
 * Ishlanishi:
 *  - let arr = [2,3]; arr.unshift(1); // [1,2,3], natija: 3
 * Hato ishlashi:
 *  - Massiv bo'lmasa, TypeError.
 */

/**
 * 4-shift
 * Array.prototype.shift()
 * 
 * Vazifasi:
 *  - Massiv boshidan elementni olib tashlaydi, o'sha elementni qaytaradi.
 * Ishlanishi:
 *  - let arr = [1,2,3]; arr.shift(); // [2,3], natija: 1
 * Hato ishlashi:
 *  - Bo'sh massivda undefined qaytaradi.
 */

/**
 * 5-map
 * Array.prototype.map()
 * 
 * Vazifasi:
 *  - Har bir elementga funksiya qo'llab, yangi massiv qaytaradi.
 * Ishlanishi:
 *  - [1,2,3].map(x=>x*2); // [2,4,6]
 * Hato ishlashi:
 *  - Callback bo'lmasa, TypeError.
 */

/**
 * 6-filter
 * Array.prototype.filter()
 * 
 * Vazifasi:
 *  - Shartga mos elementlardan yangi massiv qaytaradi.
 * Ishlanishi:
 *  - [1,2,3].filter(x=>x>1); // [2,3]
 * Hato ishlashi:
 *  - Callback bo'lmasa, TypeError.
 */

/**
 * 7-reduce
 * Array.prototype.reduce()
 * 
 * Vazifasi:
 *  - Massiv elementlarini bitta qiymatga qisqartiradi.
 * Ishlanishi:
 *  - [1,2,3].reduce((a,b)=>a+b,0); // 6
 * Hato ishlashi:
 *  - Bo'sh massiv va boshlang'ich qiymat bo'lmasa, TypeError.
 */

/**
 * 8-forEach
 * Array.prototype.forEach()
 * 
 * Vazifasi:
 *  - Har bir element uchun funksiya bajaradi, natija qaytarmaydi.
 * Ishlanishi:
 *  - [1,2].forEach(x=>console.log(x));
 * Hato ishlashi:
 *  - Callback bo'lmasa, TypeError.
 */

/**
 * 9-find
 * Array.prototype.find()
 * 
 * Vazifasi:
 *  - Shartga mos birinchi elementni qaytaradi.
 * Ishlanishi:
 *  - [1,2,3].find(x=>x>1); // 2
 * Hato ishlashi:
 *  - Topilmasa undefined.
 */

/**
 * 10-findIndex
 * Array.prototype.findIndex()
 * 
 * Vazifasi:
 *  - Shartga mos birinchi element indeksini qaytaradi.
 * Ishlanishi:
 *  - [1,2,3].findIndex(x=>x>1); // 1
 * Hato ishlashi:
 *  - Topilmasa -1.
 */

/**
 * 11-includes
 * Array.prototype.includes()
 * 
 * Vazifasi:
 *  - Element bor yoki yo'qligini tekshiradi, boolean qaytaradi.
 * Ishlanishi:
 *  - [1,2,3].includes(2); // true
 * Hato ishlashi:
 *  - NaN ni ham tekshiradi.
 */

/**
 * 12-some
 * Array.prototype.some()
 * 
 * Vazifasi:
 *  - Kamida bitta element shartga mos bo'lsa, true qaytaradi.
 * Ishlanishi:
 *  - [1,2,3].some(x=>x>2); // true
 * Hato ishlashi:
 *  - Callback bo'lmasa, TypeError.
 */

/**
 * 13-every
 * Array.prototype.every()
 * 
 * Vazifasi:
 *  - Barcha elementlar shartga mos bo'lsa, true qaytaradi.
 * Ishlanishi:
 *  - [1,2,3].every(x=>x>0); // true
 * Hato ishlashi:
 *  - Callback bo'lmasa, TypeError.
 */

/**
 * 14-concat
 * Array.prototype.concat()
 * 
 * Vazifasi:
 *  - Massivlarni birlashtirib yangi massiv qaytaradi.
 * Ishlanishi:
 *  - [1,2].concat([3,4]); // [1,2,3,4]
 * Hato ishlashi:
 *  - Massiv emas qiymat ham qo'shiladi.
 */

/**
 * 15-slice
 * Array.prototype.slice()
 * 
 * Vazifasi:
 *  - Massivdan bo'lak olib, yangi massiv qaytaradi.
 * Ishlanishi:
 *  - [1,2,3,4].slice(1,3); // [2,3]
 * Hato ishlashi:
 *  - Manfiy indeks ishlatish mumkin.
 */

/**
 * 16-splice
 * Array.prototype.splice()
 * 
 * Vazifasi:
 *  - Massivdan elementlarni olib tashlaydi yoki qo'shadi, o'zgartiradi.
 * Ishlanishi:
 *  - let arr=[1,2,3]; arr.splice(1,1,4); // arr=[1,4,3]
 * Hato ishlashi:
 *  - Massivni mutatsiya qiladi.
 */

/**
 * 17-sort
 * Array.prototype.sort()
 * 
 * Vazifasi:
 *  - Massiv elementlarini tartiblaydi.
 * Ishlanishi:
 *  - [3,1,2].sort(); // [1,2,3]
 * Hato ishlashi:
 *  - Default bo'yicha string sifatida tartiblaydi.
 */

/**
 * 18-reverse
 * Array.prototype.reverse()
 * 
 * Vazifasi:
 *  - Massiv tartibini teskarisiga o'zgartiradi.
 * Ishlanishi:
 *  - [1,2,3].reverse(); // [3,2,1]
 * Hato ishlashi:
 *  - Massivni mutatsiya qiladi.
 */

/**
 * 19-flat
 * Array.prototype.flat()
 * 
 * Vazifasi:
 *  - Ichma-ich massivlarni tekislaydi.
 * Ishlanishi:
 *  - [1,[2,3]].flat(); // [1,2,3]
 * Hato ishlashi:
 *  - Default chuqurlik 1.
 */

/**
 * 20-join
 * Array.prototype.join()
 * 
 * Vazifasi:
 *  - Massiv elementlarini stringga birlashtiradi.
 * Ishlanishi:
 *  - [1,2,3].join('-'); // "1-2-3"
 * Hato ishlashi:
 *  - Bo'sh massivda bo'sh string.
 */

let  string = "A,ssa,lo,mu, ala,yk,um"
let newStr = string.split(",")
console.log(newStr.filter(item=>item.includes("a")));

// .includes bu string methodi hisoblanib bizga string ichida biz bergan parameter bor yoki yoqligini anglatadi. boolean typeda javob qaytaradi.

console.log(string.replaceAll(",","")); 

//replace bu string qiymatlari orasidan birinchi uchraganini o'zgartiradi
// replaceAll tegishli hammasini o'rnini alishtiradi.



