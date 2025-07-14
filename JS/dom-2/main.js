let girls = [
 {
  name: "Laylo",
  surname: "Olimova",
  weight: 45,
  height: 160,
  age: 22,
  image: "./assets/rasm1.webp",
  face: "seriously",
  fashion: "europe",
  religion: "christian",
  character: "stubborn"
 },
 {
  name: "Dilnoza",
  surname: "Karimova",
  weight: 50,
  height: 165,
  age: 23,
  image: "./assets/rasm2.webp",
  face: "smiling",
  fashion: "casual",
  religion: "muslim",
  character: "kind"
 },
 {
  name: "Malika",
  surname: "Saidova",
  weight: 48,
  height: 158,
  age: 21,
  image: "./assets/rasm3.webp",
  face: "happy",
  fashion: "classic",
  religion: "christian",
  character: "cheerful"
 },
 {
  name: "Gulnoza",
  surname: "Rasulova",
  weight: 52,
  height: 162,
  age: 24,
  image: "./assets/rasm4.webp",
  face: "seriously",
  fashion: "sport",
  religion: "muslim",
  character: "active"
 },
 {
  name: "Zilola",
  surname: "Toshpulatova",
  weight: 47,
  height: 159,
  age: 22,
  image: "./assets/rasm5.webp",
  face: "smiling",
  fashion: "modern",
  religion: "christian",
  character: "friendly"
 },
 {
  name: "Shahnoza",
  surname: "Ergasheva",
  weight: 49,
  height: 161,
  age: 23,
  image: "./assets/rasm6.webp",
  face: "happy",
  fashion: "europe",
  religion: "muslim",
  character: "calm"
 }
];


let group = document.querySelector(".girls-group")

girls.forEach((item, index)=>{
 console.log(`${item.name}`);
 group.innerHTML+=`
  <div class="girl">
   <img src="${item.image}" alt="bu yerda qizni rasmi bor" loading="lazy"/>
   <h2></h2>

  </div>
 `
})