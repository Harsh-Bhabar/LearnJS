
// ALSO CHECK - devtools.tech/lists/s/top-javascript-array-interview-questions-or-problem-solving-or-array-polyfills---lid---bzcbM8FDmAP0tCcJhKfe

// ---------------------- POLYFILL - ONCE

https: function once(fn, context) {
  let ran;

  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }
  };

  return ran;
}

let on = once((a, b) => console.log("harsh", a, b));
on(1, 3); // ONLY THIS WILL RUN
on(4, 5);
on(6, 7);

// ---------------------- POLYFILL - MEMORIZE / CACHING

function withoutMemorize(num1, num2) {
  return num1 * num2;
}

// console.time("without");
// console.log(withoutMemorize(7898));
// console.timeEnd("without");

function myMemorize(fn, context) {
  let res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

let memo = myMemorize(withoutMemorize);

console.time("with Memorize");
console.log(memo(765, 765));
console.timeEnd("with Memorize");

console.time("with Memorize");
console.log(memo(765, 765));
console.timeEnd("with Memorize");


// -------------------- MAP
// Array.map((num, i, arr)=>{});

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let arr1 = [1, 2,2 ,3];

const polyMap = arr1.myMap((num, i, arr1) => {
  return num * 5;
});

// ------------------------ FILTER

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

console.log(polyMap);
console.log(polyFiler);
console.log(polyReduce);


// ---------------------- POLYFILL - CALL

let car ={
  name : "Porsche",
  color: "white"
}

function printCar(price){
  console.log("car name-color-price", this.name, this.color, price);  
}

Function.prototype.myCall = function(context = {}, ...args){
  if(typeof this != 'function'){
    throw new Error(this + " is not callable");
  }
  context.fn = this; // in our case its printcar
  context.fn(...args);
}

printCar.myCall(car, 100);


// ------------------------- POLYFILL - APPLY

Function.prototype.myApply = function(context = {}, args = []){
  if(typeof this != 'function'){
    throw new Error(this + " is not callable.");
  }

  if(!Array.isArray(args)){
    throw new Error("pass an array as argument.");
  }

  context.fn = this;
  context.fn(...args);
};

printCar.myApply(car, [100]);

// ----------------------------- POLYFILL - BIND 

Function.prototype.myBind = function (context = {}, ...args){
  if(typeof this != 'function'){
    throw new Error(this +" is not callable");
  }

  context.fn = this;
  return function(...newargs){
    return context.fn(...args, ...newargs);
  }
}

const carPrint = printCar.myBind(car);
console.log(carPrint(100));


// --------------------------- POLYFILL - PROMISE


function myPromise(executor) {

  let onResolve;
  let onReject;
  let isFullFilled = false;
  let isRejected = false;
  let isCalled = false;
  let value ;

  function resolve(val){
    isFullFilled = true;
    value = val;
    if(typeof onResolve == 'function'){
      onResolve(val);
      isCalled = true;
    } 

  }
  
  function reject(val){
    isRejected = true;
    value = val;
    if(typeof onReject == 'function'){
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function(callback){
    onResolve = callback;
    if(isFullFilled && !isCalled){
      isCalled = true;
      onResolve(value);
    }
    return this;
  }

  this.catch = function(callback){
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);    
  }
}

const examplePromise = new myPromise((resolve, reject) => {
    reject("MSG");
});

examplePromise
.then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.error(err);
})


// ------------------ PROMISE . ALL 

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("promises must be an array"));
    }

    const results = [];
    let remainingPromises = promises.length;

    if (remainingPromises === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          remainingPromises--;

          if (remainingPromises === 0) {
            resolve(results);
          }
        })
        .catch((error) => {
          if (!results.hasOwnProperty(index)) {
            // Reject if this is the first rejected promise
            reject(error);
          }
        });
    });
  });
}

// Example usage
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject("Error in promise 3");
const promise4 = Promise.resolve(4);

myPromiseAll([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });


// -------------- DEBOUNCE 

// Debounce function polypill
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example usage
const debouncedFunction = debounce(() => {
  console.log("Debounced function executed!");
}, 300);

// Attach the debounced function to an event
window.addEventListener("scroll", debouncedFunction);


// ---------------- THROTTLE 

/**
 * Throttle function that limits the rate at which a function can be called.
 * @param {function} callback - The function to be throttled.
 * @param {number} delay - The delay in milliseconds.
 * @returns {function} - The throttled function.
 */
function throttle(callback, delay) {
  let lastCallTime = 0;

  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastCallTime >= delay) {
      callback.apply(this, args);
      lastCallTime = currentTime;
    }
  };
}

// Example usage
function handleScroll() {
  console.log("Scrolled!");
}

const throttledScroll = throttle(handleScroll, 200);

window.addEventListener("scroll", throttledScroll);
