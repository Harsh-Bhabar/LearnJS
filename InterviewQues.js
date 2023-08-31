//1. function declaration
function func(name){
	console.log("Hi " + name);
}

//2. anonymous function // function expression - assigened to variable 
const f  = function(name){ 
	return name + name;
}
console.log(f("H"));

//3. First Class function - pass function in another function 
function sq(num){
	return num * num;
}
function disp(fn){
	console.log("square is " + fn(5));
}
disp(sq);

//4. IIFE - Immediately invoked funciton expression
(function iife(num){
	console.log(num * num);
}) (5);

//4.1 que

(function(x){
	return (function(y){
		console.log(x);
	})(2);
})(1); 
// Closure - the ability of a function to access the variable that are lexically out of its scope is Closuse
// ans - 1

//4.2 ques 

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// 4.3 -> VAR vs LET vs CONST // hoisting 
function abc(){
	// console.log(a, b, c);
	var a = 10; // works fine since hoisted
	// let b = 10; // error since in Temperal Dead Zone - when variables are in the scope but not declared 
	// const c = 10 ; // smae as LET 
}
abc();

//5 hoisting

var x5 = 21;
const a = function() {
	console.log(x5); // will be undefined because of local scope 
	var x5 = 20;
}
a()


//6 params vs arguments 

function para(num1, num2){ // params
console.log("num1");
}
para(1, 3); // arguments 


// 7 SPREAD vs REST

function spreadVSrest(...nums) { // here its REST param
	console.log(nums);
}
const arr = [5, 6];
spreadVSrest(...arr); // here its SPREAD argument

//7.1

// const fn = (a, ...nums, x, y) => {
// 	console.log(x, y);
// }
// fn(1, 2, 3, 4); // will give us error as REST param should be last param


// 8 CALLBACK FUNCTIONS

// function abc();


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

const sums =  arr1.reduce( (acc, curr, i, arr1) => {
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
	if(cb(this[i], i, this))
	    temp.push(this[i]);
  }
  return temp;
};
const polyFiler = arr1.myFiler((num, i, arr1) => {
  return num % 2 == 0;
});

// PolyFill for reduce
// Array.reduce(acc, curr, i, arr)

 Array.prototype.myReduce = function(cb, initalVal){
	let accumulator = initalVal;
	for (let i = 0; i < this.length; i++) {
		accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];		
	}
	return accumulator;
 }
 const polyReduce = arr1.myReduce((acc, curr, i, arr1)=>{
	return acc + curr;
 }, 0);

console.log(polyMap);
console.log(polyFiler);
console.log(polyReduce);


// arrow function vs normal func 
// function fun(num){
// 	return num*5;
// }
// const fun = (num) => {
// 	return num * 5;
// }
// console.log(fun(5));

// ques

let user = {
	username1 : "Harsh use",
	rc : () => {
		console.log(this.username1);
	},
	rc2() {
		console.log(this.username1);
	} 
}
user.rc();
user.rc2();