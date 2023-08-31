// FUNCTION DECLARATION or function definitino or funtion statement

function square(num){
	return num * num;
}

// FUNCTION EXPRESSSION - store func in a const / ANONYMOUS function

var sq = function(num){ // here after = is called as anonymous funtion can also be passed as a callback
	return num * num;
}
console.log(sq(5));


// FIRST CLASS FUNTION - where functions can be treated like variables 

function sq(num){
	return num * num;
}
function displayFunc(cb){
	console.log("Square is ", cb(5));
}
displayFunc( sq );


// IIFE - Immediately invoked function expressions
(
function sq2(num){
	console.log(num * num);
}
)(6);

// HOISTING
var x = 21; 
function fun(){
	console.log(x); // will give undefiend, as it it locally hoisted variable
	var x = 20; 
}

//6 params vs arguments 

function para(num1, num2){ // params
console.log("num1");
}
para(1, 3); // arguments 


// 7 SPREAD vs REST

function spreadVSrest(...nums) { // here its REST param // rest should always be last param 
	console.log(nums);
}
const arr = [5, 6];
spreadVSrest(...arr); // here its SPREAD argument


// CALLBACK FUNCTION 
// a function that is passed into another fn as an argument 
 
document.addEventListener("click", function(){
	console.log("Harsh");
});

// ARROW FUNCTION
document.addEventListener("click", () => {
	console.log("Habh");
})

// ARROW VS NORMAL

// 1. syntax 

// 2. Implicit return keyword
const sqq = (num) => num * num;

// 3. arguments 
function nonarrow(){
	console.log(arguments);
}
nonarrow(1, 2,2 ,3, 4);
const arrowFunc = () => {
	console.log(arguments);
}
// arrowFunc(1, 3, 3,4); // throws error

//4, this keyword 
let user = {
	name : "Ayush",

	func(){
		console.log(this.name);
	},
	func2: () => {
		console.log(this.name);
	}
};
user.func(); // ayush
user.func2(); // undefined