
let girls = [
 { name: "Laylo", age: 20, weight: 45, height: 165, face: "Smiling" },
 { name: "Gulbahor", age: 21, weight: 48, height: 162, face: "Happy" },
 { name: "Dilnoza", age: 19, weight: 47, height: 160, face: "Serious" },
 { name: "Malika", age: 22, weight: 50, height: 168, face: "Smiling" },
 { name: "Zilola", age: 20, weight: 46, height: 163, face: "Calm" },
 { name: "Shahnoza", age: 23, weight: 52, height: 170, face: "Happy" },
 { name: "Nodira", age: 21, weight: 49, height: 167, face: "Smiling" },
 { name: "Dilafruz", age: 20, weight: 47, height: 164, face: "Serious" },
 { name: "Madina", age: 19, weight: 45, height: 161, face: "Smiling" },
 { name: "Aziza", age: 22, weight: 51, height: 169, face: "Happy" },
 { name: "Rayhona", age: 20, weight: 46, height: 162, face: "Calm" },
 { name: "Zarina", age: 21, weight: 48, height: 166, face: "Smiling" },
 { name: "Gulnoza", age: 23, weight: 53, height: 171, face: "Serious" },
 { name: "Feruza", age: 19, weight: 44, height: 159, face: "Happy" },
 { name: "Nilufar", age: 20, weight: 47, height: 163, face: "Smiling" },
 { name: "Dildora", age: 22, weight: 50, height: 168, face: "Calm" },
 { name: "Shaxnoza", age: 21, weight: 49, height: 165, face: "Smiling" },
 { name: "Lola", age: 20, weight: 45, height: 160, face: "Serious" },
 { name: "Gulchehra", age: 23, weight: 52, height: 172, face: "Happy" },
 { name: "Dilshoda", age: 19, weight: 46, height: 161, face: "Smiling" }
];

let box = document.querySelector(".box")

girls.length? girls.forEach((item, index)=>{
 box.innerHTML+=`
  <img src="https://picsum.photos/id/${index}/400/400"/> 
  <h2>${item.name}</h2>
  <p>${item.age}</p>
 `
}) :box.innerHTML="no data" 
