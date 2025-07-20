const obj = { name: "Nimit", age: 25 };

// Convert object → JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Nimit","age":25}'

// Convert JSON string → object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // Nimit


// LocalStorage
// Stores key-value pairs in browser.
// Persistent even after page refresh or browser restart.
// Storage limit: ~5MB
// Stores strings only.

localStorage.setItem("username", "Nimit");
const name = localStorage.getItem("username");
console.log(name); // Nimit
localStorage.removeItem("username");
// Clear all
localStorage.clear();


// SessionStorage
// Similar to localStorage but data persists only until the tab is closed.
sessionStorage.setItem("sessionId", "12345");
console.log(sessionStorage.getItem("sessionId"));

const user = { name: "Nimit", age: 25 };

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Nimit
