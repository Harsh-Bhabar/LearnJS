// Map Filter Reduce
const arr1 = [1, 2, 3, 4, 5, 6, 7];

const mult = arr1.map((num, i, arr1) => {
  return num * 5;
});
console.log(mult);

const evenNums = arr1.filter((num) => {
  return num % 2 == 0; // true to keep the element and false to remove
});
console.log(evenNums);

const sums = arr1.reduce((acc, curr, i, arr1) => {
  return acc + curr;
}, 0);
console.log(sums);

// Polyfill for Map
// Array.map((num, i, arr)=>{});
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
const polyMap = arr1.myMap((num, i, arr1) => {
  return num * 5;
});

// Polyfill for Filter
Array.prototype.myFiler = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
const polyFiler = arr1.myFiler((num, i, arr1) => {
  return num % 2 == 0;
});

// PolyFill for reduce
// Array.reduce(acc, curr, i, arr)

Array.prototype.myReduce = function (cb, initalVal) {
  let accumulator = initalVal;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
const polyReduce = arr1.myReduce((acc, curr, i, arr1) => {
  return acc + curr;
}, 0);

console.log(polyMap);
console.log(polyFiler);
console.log(polyReduce);
