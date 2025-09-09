// Implement Fibonacci (iterative + recursive)

// Iterative approach
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

// console.log("Iterative:", fibonacci(9));

// Recursive approach
// function fibonacciRecursive(n, a = 0, b = 1, result = [0, 1]) {
//     if (n <= 2) return result;
//     next = a + b;
//     result.push(next);
//     return fibonacciRecursive(n - 1, b, next, result);
// }

// const result = fibonacciRecursive(9);
// console.log("Recursive:", result);

// Reverse a string/array
// let str = "abcddsdf"
// let arr = [1, 2, 3, 4, 5]

// Reverse a string
// let reversed = str.split("").reverse().join("");

// function customReverse(s){
//     let result = "";
//     for(let i = s.length - 1; i >= 0; i--){
//         result += s[i];
//     }
//     return result;
// }

// let reversed1 = customReverse(str);
// let reversed2 = [...str].reverse().join("");

// console.log("Reversed string:", reversed);
// console.log("Custom Reversed string:", reversed1);
// console.log("Destructured Method: ", reversed2);

// Reverse an array

// let reversedArr = arr.reverse();
// console.log("Reversed array:", reversedArr);

// console.log(arr);

// Custom reverse without using reverse method
// let reversedArr1 = function reverseArrCustom () {
//     let left = 0, right = arr.length - 1;

//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }

//     return arr;
// }

// console.log("Custom Implementation:", reversedArr1());

// Check for palindrome

// let str1 = "madam";
// let str2 = str1.split("").reverse().join("");

// console.log(str1 === str2 ? "Palindrome" : "Not a palindrome");

// function isPalindrome(s) {
//   let left = 0,
//     right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return "Not a palindrome";
//     }
//     left++;
//     right--;
//   }
//   return "Palindrome";
// }

// console.log(isPalindrome(str1));

// Find duplicates in an array

// let arr = [1, 2, 3, 4, 1, 2];

// function findDuplicates(arr) {
//   const seen = {};
//   const duplicates = [];

//   for (const num of arr) {
//     if (seen[num]) {
//       if (!duplicates.includes(num)) duplicates.push(num);
//     } else {
//       seen[num] = true;
//     }
//   }
//   return duplicates;
// }
// console.log(findDuplicates(arr)); // [1, 2]

// const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log([...new Set(duplicates)]); // [1, 2]

// Flatten a nested array/object

// let nestedArr = [1, [2, [3, 4]], 5, [6]];
// let nestedObj = { a: 1, b: { c: 2, d: { e: 3 } }, f: 4 };

// console.log(nestedArr.flat(Infinity));

// function flattenArray(arr) {
//   const result = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       result.push(...flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }

// console.log(flattenArray(nestedArr)); // [1, 2, 3, 4, 5, 6]

// function flattenObject(obj, parentKey = "", result = {}) {
//   for (const key in obj) {
//     const newKey = parentKey ? `${parentKey}.${key}` : key;
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       flattenObject(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(flattenObject(nestedObj)); // { a: 1, 'b.c': 2, 'b.d.e': 3, f: 4 }





// find max and min in an array

// let arr = [3, 5, 1, 8, -2, 7];

// let max = Math.max(...arr);
// let min = Math.min(...arr); 

// console.log("Max:", max);
// console.log("Min:", min);

// Custom Implementation

// function findMaxMin(arr) {
//     let max = arr[0];
//     let min = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max) max = arr[i];
//         if(arr[i] < min) min = arr[i];
//     }
//     return {max, min};
// }

// console.log("Custom Implementation:", findMaxMin(arr));





// Find the missing no in an array of 1 to 10 elements
// let arr = [1, 2, 4, 5, 6, 8, 9, 10]; // missing 3 and 7

// function findMissingNumbers(arr, n) {
//     const missingNumbers = [];
//     const numSet = new Set(arr);

//     for(let i = 1; i <= n; i++){
//         if(!numSet.has(i)){
//             missingNumbers.push(i);
//         }
//     }

//     return missingNumbers;
// }

// console.log("Missing numbers:", findMissingNumbers(arr, 10)); // [3, 7]

// Another way without using space

// function findMissingNumbersNoSpace(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     let result = [];

//     for(let i = min; i <= max; i++){
//         if(arr.indexOf(i) < 0){
//            result.push(i);
//         }
//     }
//     return result;
// };

// console.log("Missing numbers without extra space:", findMissingNumbersNoSpace(arr)); // [3, 7]






// Factorial of a number
// let num = 5;
// function factorial(n) {
//     if(n === 0 || n === 1) return 1;
//     let result = 1;
//     for(let i = 2; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log("Factorial:", factorial(num)); // 120

// // Recursive approach
// function factorialRecursive(n) {
//     if(n === 0 || n === 1) return 1;
//     return n * factorialRecursive(n - 1);
// }
// console.log("Factorial Recursive:", factorialRecursive(num)); // 120


// // Find prime number or not
// function isPrime(n) {
//     if(n <= 1) return false;
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0) return false;
//     }
//     return true;
// }

// console.log("Is prime:", isPrime(401)); // true


// Find vowels in a string

// let str = "Hello World";
// function findVowels(s) {
//     const vowels = "aeiouAEIOU";
//     const foundVowels = [];
//     for(const char of s){
//         if(vowels.includes(char) && !foundVowels.includes(char)){
//             foundVowels.push(char);
//        }
//     }
//     return foundVowels;
// }
// console.log("Vowels in string:", findVowels(str)); // ['e', 'o']


// Merge two arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = arr1.concat(arr2);
console.log("Merged array:", merged); // [1, 2, 3, 4, 5, 6]

let merged1 = [...arr1, ...arr2];
console.log("Merged array using spread operator:", merged1); // [1, 2, 3, 4, 5, 6]

function mergeArrays(a, b) {
    const result = [];
    let i = 0, j = 0;
    while(i < a.length && j < b.length){
        result.push(a[i]);
        result.push(b[j]);
        i++;
        j++;
    }
    while(i < a.length){
        result.push(a[i]);
        i++;
    }
    while(j < b.length){
        result.push(b[j]);
        j++;
   }
    return result;
}

console.log("Merged array custom implementation:", mergeArrays(arr1, arr2)); // [1, 4, 2, 5, 3, 6]