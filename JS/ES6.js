//let and const 
let age = 25;
const namee = "Nimit";

// Template literal (`)
const name2 = "Nimit";
console.log(`Hello, ${name2}!`);

// Arrow function
const add = (a, b) => a + b;

// default values
function greet(name3 = "Guest") {
  console.log(`Hello, ${name3}`);
}
greet(); // Hello, Guest

// Spread operator
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]
console.log(newArr)

// rest operator
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6

// Object Destructuring
const user1 = { name: "Nimit", age: 25 };
const { name1, age1 } = user1;
console.log(name1, age1);

// Array Destructuring
const [a, b] = [10, 20];
console.log(a, b);

// Enhanced Object Literals
const age3 = 25;
const user3 = { name3: "Nimit", age3 }; // age shorthand

// import & export 
export const greet = () => console.log("Hello");

import { greet } from "./utils.js";
greet();

// classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
const p = new Person("Nimit");
p.greet();

// Promises & Async/Await
const user = { profile: { name: "Nimit" } };
console.log(user.profile?.name); // "Nimit"
console.log(user.address?.street); // undefined (no error)

// Nullish Coalescing (??)
const name = null ?? "Guest"; // "Guest"

// Maps and set
const map = new Map();
map.set("name", "Nimit");
console.log(map.get("name"));

const set = new Set([1, 2, 2, 3]);
console.log(set); // {1, 2, 3}
