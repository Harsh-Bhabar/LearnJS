// ---------------------- POLYFILL - ONCE

function once(fn, context) {
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