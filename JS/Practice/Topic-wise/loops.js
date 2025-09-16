let age = 18;
if (age > 18) {
  console.log("Adult");
} else if (age === 18) {
  console.log("Just turned adult");
} else {
  console.log("Minor");
}

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  default:
    console.log("Unknown fruit");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let ii = 1;
while (ii <= 5) {
  console.log(ii);
  ii++;
}

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0 to 4
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}

const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}

const arr = [10, 20, 30];
for (let num of arr) {
  console.log(num);
}
