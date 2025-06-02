// number -> bigint ikkisini bir biridan farqi

// Number va BigInt o‘rtasidagi farq:
// JavaScript dasturlash tilida sonlar bilan ishlash uchun Number va BigInt degan ikki asosiy tur mavjud.

// 📌 Number nima?
// JavaScript’dagi default raqam tipi.

// IEEE 754 double-precision (64-bit) formatda saqlanadi.

// Maksimal aniqlik bilan ishlaydigan butun sonlar oraliği:
// -9007199254740991 dan +9007199254740991 gacha (ya’ni ±(2^53 - 1)).

// Agar bu oraliqdan chiqilsa, aniqlik yo‘qoladi (precision loss).

// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992 — xato natija!
// 📌 BigInt nima?
// Juda katta butun sonlar bilan aniq ishlash uchun kiritilgan yangi tip.

// Number bilan aniqlik yo‘qoladigan joylarda BigInt ishlatiladi.

// n harfi bilan yoziladi:

// const big = 9007199254740991n + 2n;
// console.log(big); // 9007199254740993n — to‘g‘ri natija
// 🔁 Farqlar:
// Xususiyat	Number	BigInt
// Aniqlik chegarasi	±2^53 - 1	Cheksiz (RAMga bog‘liq)
// Tezligi	Tezroq	Nisbatan sekinroq
// Kasr sonlar	Bor (0.1, 1.5 va h.k.)	Yo‘q (faqat butun sonlar)
// Qo‘shma ishlatish	BigInt bilan aralashtirib bo‘lmaydi	Number bilan aralashtirib bo‘lmaydi

// ❗ Muhim eslatma:
// BigInt faqat butun sonlar bilan ishlaydi.

// Number esa butun ham, kasr sonlar bilan ishlay oladi.

// BigInt va Number’ni birga qo‘shib ishlatish xatolik beradi:

// console.log(5n + 2); // ❌ TypeError: Cannot mix BigInt and other types


