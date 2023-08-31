

// 1. what is Call 

const obj = {name : "Harsh"};

function fun() {
  return "Hello " + this.name;
}
function fun2(age) {
  return "Hello " + this.name + " age " + age;
}
function fun3(age, name) {
  return "Hello " + this.name + " age " + age + " " + name;
}

console.log(fun());
console.log(fun.call(obj));
console.log(fun2.call(obj, 24));

// 2. APPLY
// same as call  but needs arguments as list 

console.log(fun3.apply(obj, [24, "Ayus"]));

// 3. BIND 
// it return us a funtion to be called later 

const bindFunc = fun3.bind(obj);
console.log(bindFunc(24, "mrinal"));

// print all elements of a obj of list using call 

const animals = [
  {species: "snake", age: 2},
  {species: "snake2", age: 2},
  {species: "snake3", age: 2}
];

function printAnimals(i){
  this.print = () => {
    console.log(i, this.species, this.age);
  };
  this.print();
}

for(let i=0; i<animals.length; i++){
  printAnimals.call(animals[i], i);
}

// concat two arrays

let array = [1, 2, 3]
let names = ["harsh", "ayush"]

array.push(...names)
console.log(array);

array.push.apply(array, names);
console.log(array);


// MAX and MIN of array

let nums = [1, 5, 3, 5, 6, 7]
console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));


// que 

function f(){
  return this; 
}

const user = {
  g : f.bind(null)
}

console.log(user.g()); // will give us window object 

// ques 

function checkPass(success, failure){
  // let pass = prompt("pass : ", "");
  let pass = "harsh";
  if(pass == "harsh")
    return success();
  else  
    return failure();
}

let user2 = {
  name: "ayush",

  loginS : function(){
    console.log("welcome ", this.name);
  } ,

  loginF: function(){
    console.log("retry ", this.name);
  }
}

checkPass(user2.loginS.bind(user2), user2.loginF.bind(user2));



// POLYFILL - CALL

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


// POLYFILL - APPLY

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

// POLYFILL - BIND 

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