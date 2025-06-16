// let Name = "   Bekzod  "

// console.log(Name.length)
// console.log(Name.toUpperCase()) /// toUpperCase hamma hariflarni katta qiladi
// console.log(Name.toLowerCase()) /// toLowerCase hamma hariflarni kichkiuna qiladi
// console.log(Name.at(2)) // at index boyicha haiflarni oladi
// console.log(Name.charAt(9)) /// charAt index boyicha hariflarni oladi,agar topolmasa "" bosh string qaytaradi
// console.log(Name.charCodeAt(0)) // charCodeAt index boyicha oladi va uni kodini chiqaradi  , bu esa Nan
// console.log(Name[1]) // index boyicha harifni oladi , bu undefined qaytaradi
// console.log(Name.trim()) // trim boshi va ohiridagi bosh joylarni oladi
// console.log(Name.trimStart()) // trimStart boshidagi bosh joylarni oladi
// console.log(Name.trimEnd()) // trimEnd ohiridagi bosh joylarni oladii
// console.log(Name.replace('Be','b')) // berilgan qiymatni qidiradi va unga ozgartiradi

let text = "lorem ipsum salom l"

console.log(text.replace('l','L'))
console.log(text.replaceAll('l',"L")) // replace All hammasini yangilaydi
console.log(text.concat(' salom'))  // textga nima kiritilgan bo`ssa shuni qoshib qoyadi