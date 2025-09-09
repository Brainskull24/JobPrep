// function delay(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Resolved after ${time} milliseconds`);
//     }, time);
//   });
// }

// console.log("Starting...");
// delay(2000).then((message) => {
//   console.log(message);
// });
// console.log("Finished!");

// async function run() {
//   console.log("Starting...");
//   const message = await delay(3000);
//   console.log(message);
//   console.log("Finished!");
// }

// run();

/* so what async await does is pause the execution of the function 
until the promise is resolved but outer function continues to run making them asyncronous */

// console.log([] == []);// false because they are stored in different memory locations
// console.log({} == {});// false because they are stored in different memory locations
// console.log([] === []);// false because they are stored in different memory locations
// console.log({} === {});// false because they are stored in different memory locations

// let a = [];
// let b = a;
// console.log(a == b);   // true
// console.log(a === b);  // true

// console.log([1,2,3] == "1,2,3"); // true because array is converted to string and then compared
// console.log([] == ![]); // true because [] is converted to false and then compared
// console.log(null == undefined); // true because both are considered equal in non strict comparison
// console.log(null === undefined); // false because they are of different types
// console.log(NaN == NaN); // false because NaN is not equal to anything including itself
// console.log(NaN === NaN); // false because NaN is not equal to anything including itself

// includes() and contains() method

// String
// "hello world".includes("world"); // true
// "hello world".includes("World"); // false (case-sensitive)

// // Array
// [1, 2, 3].includes(2); // true
// [1, 2, 3].includes("2"); // false (no type coercion)

// contains method is not available in JavaScript but is in some other languages like Java
// String
// "hello world".contains("world"); // true
// "hello world".contains("World"); // false

// Collections
// List<Integer> nums = Arrays.asList(1,2,3);
// nums.contains(2);   // true
// nums.contains("2"); // false (different type, no coercion)

function filterFruits(fruits, query) {
  return fruits.filter((fruit) => fruit.includes(query));
}

const fruits = ["Apple", "Banana", "Cherry", "Mango", "Grapes"];
console.log(filterFruits(fruits, "a")); // not 'A'
// ["Banana", "Mango", "Grapes"]

// Filter fruits starting with a character
function filterFruitsByStartChar(fruits, char){
    return fruits.filter(fruit => fruit.toLowerCase().startsWith(char.toLowerCase()));
}
console.log(filterFruitsByStartChar(fruits, "a"));

// Filter fruits ending with a character
function filterFruitsByEndChar(fruits, char){
    return fruits.filter(fruit => fruit.toLowerCase().endsWith(char.toLowerCase()));
}
console.log(filterFruitsByEndChar(fruits, "a"));