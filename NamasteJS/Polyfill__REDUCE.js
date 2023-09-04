// ------------------------ REDUCE
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
