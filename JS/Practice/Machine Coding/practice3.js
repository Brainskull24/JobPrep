// //Question 1

// let logs = `Alice  apples  3
// Bob    oranges 5
// Alice  bananas 2
// Bob    apples 1`;

// /* Expected Output:

// {
//   "Alice": [
//     { item: "apples", qty: 3 },
//     { item: "bananas", qty: 2 }
//   ],
//   "Bob": [
//     { item: "oranges", qty: 5 },
//     { item: "apples", qty: 1 }
//   ]
// }

// */

// let arr = logs.split("\n");

// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   let line = arr[i];
//   let parts = line.split(" ").filter((item) => item != "");

//   let key = parts[0];

//   let values = {
//     item: parts[1],
//     qty: Number(parts[2]),
//   };

//   if (key in obj) {
//     obj[key].push(values);
//   } else {
//     obj[key] = [values];
//   }
// }

// console.log(obj);

// // Question 2

// let email = [
//   "alice@gmail.com",
//   "bob@yahoo.com",
//   "charlie@gmail.com",
//   "david@outlook.com",
//   "eve@yahoo.com",
// ];

// /* Expected Output:
// {
//   "gmail.com": ["alice", "charlie"],
//   "yahoo.com": ["bob", "eve"],
//   "outlook.com": ["david"]
// }
// */

// let obj1 = {};

// for (let i = 0; i < email.length; i++) {
//   let e = email[i];
//   let parts = e.split("@");

//   let key = parts[1];
//   if (key in obj1) {
//     obj1[key].push(parts[0]);
//   } else {
//     obj1[key] = [];
//     obj1[key].push(parts[0]);
//   }
// }

// console.log(obj1);

// // Question 3

// let string = "this is a test this is only a test";

// /* Expected Output:
// {
//   "this": 2,
//   "is": 2,
//   "a": 2,
//   "test": 2,
//   "only": 1
// }
// */

// let arr1 = string.split(" ");
// let mapp = new Map();

// for (i of arr1) {
//   if (mapp.has(i)) {
//     mapp.set(i, mapp.get(i) + 1);
//   } else {
//     mapp.set(i, 1);
//   }
// }

// console.log(Object.fromEntries(mapp));

// // Question 4

// let students = [
//   { name: "Alice", subject: "Math", marks: 90 },
//   { name: "Bob", subject: "Math", marks: 85 },
//   { name: "Alice", subject: "Science", marks: 95 },
//   { name: "Bob", subject: "Science", marks: 80 },
// ];

// /* Expected Output:
// {
//   "Alice": { "Math": 90, "Science": 95 },
//   "Bob": { "Math": 85, "Science": 80 }
// }
// */

// let obj2 = {};

// for (let i = 0; i < students.length; i++) {
//   let entry = students[i];
//   let name = entry.name;
//   let subject = entry.subject;
//   let marks = entry.marks;
//   if (name in obj2) {
//     obj2[name][subject] = marks;
//   } else {
//     obj2[name] = {};
//     obj2[name][subject] = marks;
//   }
// }

// console.log(obj2);

function groupLogs(logs) {
  return logs.split("\n").reduce((acc, line) => {
    const parts = line.split(" ").filter(Boolean);
    const name = parts[0];
    const item = { item: parts[1], qty: Number(parts[2]) };

    if (!acc[name]) acc[name] = [];
    acc[name].push(item);

    return acc;
  }, {});
}

let logs = `Alice  apples  3
  Bob    oranges 5
  Alice  bananas 2
  Bob    apples 1`;

console.log(groupLogs(logs));

function groupEmailsByDomain(emails) {
  return emails.reduce((acc, e) => {
    const [user, domain] = e.split("@");
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(user);
    return acc;
  }, {});
}

let emails = [
  "alice@gmail.com",
  "bob@yahoo.com",
  "charlie@gmail.com",
  "david@outlook.com",
  "eve@yahoo.com",
];

console.log(groupEmailsByDomain(emails));

function wordFrequency(str) {
  return str.split(" ").reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

let sentence = "this is a test this is only a test";
console.log(wordFrequency(sentence));

function groupStudentMarks(students) {
  return students.reduce((acc, { name, subject, marks }) => {
    if (!acc[name]) acc[name] = {};
    acc[name][subject] = marks;
    return acc;
  }, {});
}

let students = [
  { name: "Alice", subject: "Math", marks: 90 },
  { name: "Bob", subject: "Math", marks: 85 },
  { name: "Alice", subject: "Science", marks: 95 },
  { name: "Bob", subject: "Science", marks: 80 },
];

console.log(groupStudentMarks(students));
