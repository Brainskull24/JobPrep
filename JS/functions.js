function greet1(name) {
  return `Hello, ${name}`;
}

console.log(greet1("Nimit"));

const greet = function (name) {
  return `Hello, ${name}`;
};

const greet2 = (name) => `Hello, ${name}`;

function greet3(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet3(); // Hello, Guest

function sayHello() {
  return "Hello!";
}

function greet4(fn) {
  console.log(fn()); // Function passed as argument
}

greet4(sayHello);

(function () {
  console.log("IIFE runs immediately");
})();

function greet5() {
  return function () {
    return "Hi!";
  };
}

console.log(greet5()());

function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "Nimit";
  callback(name); // invoking the callback
}

processUserInput(greeting); // Output: Hello, Nimit

function cook(food, callback) {
  console.log(`Cooking ${food}...`);
  callback(); // after cooking
}

function serve() {
  console.log("Food served!");
}

cook("Pasta", serve);

/*
  Output:
  Cooking Pasta...
  Food served!
*/

// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 1000);
//   }, 1000);
// }, 1000);

/*
  Output with 1s delay between each:
  1
  2
  3
*/

function calculator(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculator(5, 3, add)); // 8
console.log(calculator(5, 3, multiply)); // 15

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

function sayHello(name) {
  console.log(`${name}`);
}

function solve(callback) {
  const myName = "Nimit";
  callback(myName);
}

solve(sayHello);

function doublyy(number) {
  console.log(2 * number);
}

function num(number, callback) {
  callback(number);
}

num(5, doublyy);

function add(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function operation(a, b, callback) {
  callback(a, b);
}

operation(4, 5, add);
operation(4, 5, subtract);
operation(4, 5, multiply);

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
