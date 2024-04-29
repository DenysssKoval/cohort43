const fruits=["apple","orange","mango"];
const fruits2 = fruits;
fruits[0]= "banana";
console.log(fruits);
console.log(fruits2);

let str1 = "hello";
let str2 = str1;
str1 = "Goodbye"
console.log(str1);
console.log(str2);

const cars = ["BMW","Mercedes", "Audi"]
// spread
const carsCopy = [...cars];
carsCopy[0]="Opel";
console.log(cars);
console.log(carsCopy);

const cities1 = ["Berlin", "Paris"];
const cities2 = ["London", "Budapest"];
const joinedCities =[...cities1, ...cities2];
console.log(joinedCities);

const vegitables =['cucumber', 'tomato'];
const newVegitables = [...vegitables, "carrot"];
console.log(newVegitables);