 // Lexical scope 

// CLOSURE VS SCOPE

//  scope - refers to the current context of your code - Globally, Locally, Block scope
// lexical scope - a var declared outside of scope can be accesssed inside the block

let username = "Mrinal";
// global scope
function func(){
	// local scope
	console.log(username);
}
func();


// CLOSURE
// A closure is the combination of a function
// bundled together (enclosed) with references 
// to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an 
// outer function's scope from an inner function. 
// In JavaScript, closures are created every time a 
// function is created, at function creation time.



// every closure has three SCOPES -
// 1. local scope 2. outer func scope 3. global scope

// global scope 
let username2 = "aysuh";
function lol(){
	// outer function scope
	let x = "harsh";
	function lol2(name){
		// inner scope 
		console.log(x, name);
	}
	return lol2;
}

// calling type - 1
var ans = lol();
ans("harsh");

// calling type - 2
lol()("LOL2");


// SHADOWING  

let cnt = 0;
(function(){
	if(cnt == 0){
		let cnt = 1; // SHADOWING
		console.log(cnt); // 1 
	}
	console.log(cnt); // 0
})();

// CREATE CLOSURE

let addSix = addsixfun(6);
addSix(10); // returns 16
addSix(20); // returns 26

function addsixfun(x){
	function addsixfun2(y){
		console.log(x + y);
		return x + y;
	};
	return addsixfun2;
}

// que to optimize code using closure

function myfunc(ind) {
	let a = [];
	for(let i=0; i<10000000; i++){
		a[i] = i * i;
	}
	return a[ind];
}
// console.time(44555);
// myfunc(44555);
// console.timeEnd(44555);
// console.time(4455);
// myfunc(4455);
// console.timeEnd(4455);

// OPTIMIZE USING CLOSURE

function myFunc2(){
	let a = [];
	for(let i=0; i<10000000; i++){
		a[i] = i * i;
	} // will only run one time and stores in the list
	return function(ind){ // closure to return val
		return a[ind];
	}
}

let closure = myFunc2();
console.time(44555);
closure(44555);
console.timeEnd(44555);
console.time(4455);
closure(4455);
console.timeEnd(4455);


// BLOCK SCOPE & SET TIMEOUT

function guess(){ // var has function scoep 
	for (var i = 0; i < 3; i++) { // VAR will give us 3 3 3 because of function scope
  		setTimeout(() => { // LET will give us 0 1 2 
    	console.log(i);
  	}, 1000);
	}
}
guess(); // 3 3 3
 
//USE ONLY VAR TO PRINT 0 1 2 -> USING CLOSURE
function guess2() {
  for (var i = 0; i < 3; i++) {
    function createInnerGuess(index) {
      return function () {
        setTimeout(() => {
          console.log(index);
        }, 1000);
      };
    }

    var innerGuess = createInnerGuess(i);
    innerGuess();
  }
}

guess2();

// var inner = guess2();
// inner(0);


// PRIVATE COUNTER USING CLOSURE
function counter(){
	let _counter = 0;

	function add(increment) {
		_counter += increment;
	}
	function retrieve(){
		return _counter;
	}
	return {
		add,
		retrieve
	};
}

const cntr = counter();
cntr.add(5);
console.log("cntr ret - ", cntr.retrieve());
cntr.add(55);
console.log("cntr ret - ", cntr.retrieve());


// MODULE PATTERN 

let module = (function (){
	function privateFun() {
		console.log("private");
	} 

	return {
		publicFun : function() {
			privateFun();
			console.log("public");
		}
	}
})();

let m = module;
m.publicFun();
// m.privateFun(); // gonna give us error


// MAKE A FUNC CALL ONCE

function isCalled(){
	let called = 0;
	return ()=>{
		if(called == 0){
			console.log("Called first time.");
			called++;
		}else{
			console.log("Already been called.");
		}
	}
}
let call = isCalled();
call();call();call();call();

// POLYFILL - ONCE

function once(fn, context) {
  let ran;

  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }
  };

  return ran;
};

let on = once((a, b) => console.log("harsh", a, b));
on(1, 3); // ONLY THIS WILL RUN 
on(4, 5);
on(6, 7);

// POLYFILL - MEMORIZE / CACHING 

function withoutMemorize(num1, num2) {
	return num1 * num2;
}

// console.time("without");
// console.log(withoutMemorize(7898));
// console.timeEnd("without");

function myMemorize(fn, context){
	let res = {};
	return function(...args){
		var argsCache = JSON.stringify(args);
		if(!res[argsCache]){
			res[argsCache] = fn.call(context || this, ...args);
		}
		return res[argsCache];
	}
	
}

let memo = myMemorize(withoutMemorize);

console.time("with Memorize");
console.log(memo(765, 765));
console.timeEnd("with Memorize");

console.time("with Memorize");
console.log(memo(765, 765));
console.timeEnd("with Memorize");

// console.time("with Memorize");
// console.log(memo(765, 1000));
// console.timeEnd("with Memorize");

// console.time("with Memorize");
// console.log(memo(765, 1000));
// console.timeEnd("with Memorize");