// Polyfill for map()
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Pollyfill for filter()
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Polyfill for reduce()
Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue === undefined ? this[0] : intialValue;
  let startIndex = intialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

const arr = [1, 2, 3];
const nums = [1, 2, 3, 4, 5];

const square = arr.myMap((i) => i * i);
console.log(square);

const even = arr.myFilter((i) => i % 2);
console.log(even);

const sum = nums.reduce((acc, val) => acc - val, 0);
console.log(sum);