const arr = [1, 2, 3];

const square = arr.map((i) => i * i);
console.log(square);

const even = arr.filter((i) => i % 2);
console.log(even);

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, val) => acc + val, 0);

console.log(sum); // 15

const arr2 = [10, 2, 35, 7];

arr2.sort((a, b) => b - a); // descending order

console.log(arr2); // [35, 10, 7, 2]
