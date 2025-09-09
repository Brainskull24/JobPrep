// todo: find duplicates in an array
// let arr = [1, 2, 3, 4, 1, 2];

// let mapp = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (mapp.has(arr[i])) {
//     mapp.set(arr[i], mapp.get(arr[i]) + 1);
//   } else {
//     mapp.set(arr[i], 1);
//   }
// }

// for (let [key, value] of mapp) {
//   if(value > 1){
//     console.log(key);
//   }
// }

// function findDuplicates(arr) {
//   let result = [];
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1] && !result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(findDuplicates(arr));

// todo: check if "me" is present more than once in below string
// let str = "My Name is Nimet";
// console.log(str.match(/me/g).length > 1 ? true : false);
// console.log(str.indexOf("imt") != -1 ? true : false);

// todo: find the index of sh in below string
// let str1 = "My name is sh us sh";
// console.log(str1.indexOf("sh"));
// console.log(str1.lastIndexOf("sh"));

// todo: find the no ocurrences of "me" in below string
// let str2 = "My Name is Namit";
// str2.match(/me/g) ? console.log(str2.match(/me/g).length) : console.log(0);

// If I am not allowed to use match method

// let count = 0;
// str2 = str2.toLowerCase();
// for (let i = 0; i < str2.length; i++) {
//   if (str2[i] == "n" && str2[i + 1] == "a") {
//     count++;
//   }
// }

// console.log(count);

// todo: Guess the output
// Rules for && and || operators:
// && returns the first falsy value or the last value if all are truthy
// || returns the first truthy value or the last value if all are falsy
// Precedence: && has higher precedence than ||

// const str1 = "Hi";
// const str2 = "Hello";

// const str3 = str1 && str2;
// console.log(str3); // "Hello"

// const str4 = str1 || str2;
// console.log(str4); // "Hi"

// console.log(0 && "Hi"); // 0 (first falsy)
// console.log(1 && "Hi"); // "Hi" (first truthy, so return second)
// console.log(0 || "Hi"); // "Hi" (first falsy, so return second)
// console.log(1 || "Hi"); // 1   (first truthy, so return first)

// console.log(0 || (1 && 2) || 3); // 2
// // 1 && 2 is evaluated first (due to precedence), resulting in 2
// // Then 0 || 2 is evaluated, resulting in 2
// console.log((0 || 1) && (2 || 3)); // 2
// // (0 || 1) is evaluated first, resulting in 1
// // (2 || 3) is evaluated next, resulting in 2
// console.log((0 && 1) || (2 && 3)); // 3
// // 0 && 1 is evaluated first, resulting in 0
// // 2 && 3 is evaluated next, resulting in 3
// console.log((0 && 1) || (2 && 3)); // 3
// // (0 && 1) is evaluated first, resulting in 0
// // (2 && 3) is evaluated next, resulting in 3
// console.log(1 || (0 && 2) || 3); // 1

// todo: Guess the output
// [a] = [1, 2, 3];
// console.log(a); // 1

// const [, b] = [1, 2, 3];
// console.log(b); // 2

// const [x, y, z] = [10, 20, 30];
// console.log(x, y, z); // 10 20 30

// const [p, q, r = 5] = [1, 2];
// console.log(p, q, r); // 1 2 5 (default value for r)

// const [head, ...tail] = [1, 2, 3, 4];
// console.log(head); // 1
// console.log(tail); // [2, 3, 4]

// const [c1, c2] = "Hi";
// console.log(c1, c2); // "H" "i"

// todo: Guess the output
// let aa = 100;
// const bb = ++aa + aa++;
// const cc = aa++ + ++aa;
// console.log(bb); // 202
// console.log(cc); // 202

// todo: Find if 2nd string is substring of 1st string or not in the array

// let arr = ["Chandan", "and"];
// console.log(arr[0].indexOf(arr[1]) != -1 ? true : false); // true
// console.log(arr[0].includes(arr[1])); // true
// console.log(arr[0].search(arr[1]) != -1 ? true : false); // true
// console.log(arr[0].match(arr[1]) ? true : false); // true

// todo: difference between find and every method of array

// let arr = [1, 2, 3, 4, 5];
// let isEven = (num) => num % 2 === 0;
// console.log(arr.find(isEven)); // 2 (first even number)
// console.log(arr.every(isEven)); // false (not all numbers are even)

// todo: shift and unshift methods of array
// let arr = [1, 2, 3];
// arr.shift(); // removes first element
// console.log(arr); // [2, 3]
// arr.unshift(0); // adds element at the start
// console.log(arr); // [0, 2, 3]

// todo: write the function for fibonacci series

// function fibonacci(n) {
//   let result = [];
//   let a = 0,
//     b = 1,
//     next;
//   result = [a, b];

//   for (let i = 2; i < n; i++) {
//     next = a + b;
//     result.push(next);
//     a = b;
//     b = next;
//   }

//   return result;
// }

// console.log(fibonacci(9));

// todo: Create a object and filter the keys with age > 25

// let obj = [
//   {
//     name: "Chandan",
//     age: 24,
//   },
//   {
//     name: "Nimit",
//     age: 26,
//   },
//   {
//     name: "Ankit",
//     age: 27,
//   },
// ];

// let result = obj.filter((value) => {
//   if (value.age > 25) {
//     return value;
//   }
// });

// console.log(result);

// function abc(a, ...b) {
//   console.log(b, typeof b);
// }

// abc(1, 2, 3, 4, 5);
