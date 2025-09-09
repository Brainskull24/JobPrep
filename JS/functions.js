// Function Declaration
function greet1(name) {
  return `Hello, ${name}`;
}
console.log(greet1("Nimit"));


// Function Expression
const greet = function (name) {
  return `Hello, ${name}`;
};
console.log(greet("Nimit"));


// Arrow Function
const greet2 = (name) => `Hello, ${name}`;
console.log(greet2("Nimit"));


// Function with default Parameters
function greet3(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet3();

// First-class functions as arguments
function sayHello() {
  return "Hello!";
}
function greet4(fn) {
  console.log(fn());
}
greet4(sayHello);


// Immediately Invoked Function Expression (IIFE)
(function (n) {
  console.log(`IIFE runs ${n} times immediately`);
})(5);


// Function returning another function
function greet5() {
  return function () {
    return "Hi!";
  };
}
console.log(greet5()());

// Callback function example
function greeting(name) {
  console.log(`Hello, ${name}`);
}
function processUserInput(callback) {
  const name = "Nimit";
  callback(name); // invoking the callback
}
processUserInput(greeting);

// Another Callback function example
function cook(food, callback) {
  console.log(`Cooking ${food}...`);
  callback(); // after cooking
}
function serve() {
  console.log("Food served!");
}
cook("Pasta", serve);


// Async example with nested callbacks (callback hell)
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);

// function calculator(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// console.log(calculator(5, 3, add)); // 8
// console.log(calculator(5, 3, multiply)); // 15

function fetchUserData(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Nimit" };
    callback(user);
  }, 2000);
}

function showUser(user) {
  console.log(`User: ${user.name}`);
}

fetchUserData(showUser); // After 2s: User: Nimit

// function add(a, b) {
//   console.log(a + b);
// }

// function subtract(a, b) {
//   console.log(a - b);
// }

// function multiply(a, b) {
//   console.log(a * b);
// }

// function operation(a, b, callback) {
//   callback(a, b);
// }

// operation(4, 5, add);
// operation(4, 5, subtract);
// operation(4, 5, multiply);

function download() {
  console.log("File downloaded.");
}

function downloading(callback) {
  console.log("Downloading file...");
  setTimeout(() => {
    callback();
  }, 2000);
}

downloading(download);

const func = (function(a){
  delete a;
  return a;
})(5);
console.log(func);
