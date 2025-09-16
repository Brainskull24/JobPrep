// {
//   const message = "Hello";
//   var globalVar = "I am global";
//   function sayHi() {
//     const message = "Hi";
//     var globalVar2 = "I am global";
//     return function () {
//       console.log(message);
//     };
//   }

//   const greet = sayHi();
//   greet();
// }

// console.log(message); // ReferenceError: message is not defined
// console.log(globalVar); // "I am global"
// console.log(globalVar2); // ReferenceError: globalVar2 is not defined
// This happened because var has function scope, while const and let have block scope.



// Illegal shadowing example
// let a = "Hello"
// {
//   var a = "Hi" // SyntaxError: Identifier 'a' has already been declared
// }




// Legal shadowing example
var b = "Hello"
{
  let b = "Hi" // No error
}

console.log(b);



