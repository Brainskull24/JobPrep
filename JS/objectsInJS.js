// const user = {
//   name: "Nimit",
//   age: 25,
//   isAdmin: true,
// };

// const user = new Object();
// user.name = "Nimit";

// console.log(user.name); // dot notation
// console.log(user["age"]); // bracket notation (for dynamic keys)

// user.city = "Alwar"; // add
// user.age = 26; // update
// delete user.isAdmin; // delete

// console.log("name" in user); // true
// console.log(user.hasOwnProperty("age")); // true

// for (let key in user) {
//   console.log(key, user[key]);
// }

const user = {
  name: "Nimit",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet(); // Hello, Nimit

const obj = {
  name: "JS",
  show() {
    console.log(this.name);
  },
};

obj.show(); // JS

const obj2 = {
  name: "JS",
  show: () => console.log(this.name),
};

obj2.show(); // undefined

const user2 = { ...user }; // spread
const user3 = Object.assign({}, user);

const deepCopy = JSON.parse(JSON.stringify(user));

const { name, age } = user;
console.log(name, age);
