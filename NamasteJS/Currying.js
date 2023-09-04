// CURRYING

// is a function that takes one argument at a time and returns a new function expecting the next argument.
// it is a conversion of functions from fn(a, b) to f(a)(b)

// normal
function fn(a, b) {
	console.log(a, b);
}
// CURRYING
function fn2(a) {
	return function (b) {
		console.log(a, b);
	}
}
let f = fn2(5); // will return us a funtion 
f(3); // 5, 3 - will call the inner function


// Q - WHY DO WE USE CURRYING

// IMPLEMETN SUM(1)(2)(3)

function sum(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		}
	}
}

let add = sum;
console.log(add(5)(10)(19));

// IMPLEMENT 
// EVAL("SUM")(2)(4) => 6
// EVAL("SUB")(2)(4) => -2
// EVAL("MUL")(2)(4) => 8
// EVAL("DIV")(2)(4) => 0.5

function eval(op) {
	return function (a) {
		return function (b) {
			if (op == "SUM") return a + b;
			else if (op == "SUB") return a - b;
			else if (op == "MUL") return a * b;
			else if (op == "DIV") return a / b;
			else return "Error";
		}
	};
}

const addEval = eval("SUM");
console.log(addEval(15)(20));
console.log(eval("SUM")(5)(6));
console.log(eval("SUB")(5)(6));
console.log(eval("MUL")(5)(6));
console.log(eval("DIV")(5)(6));


// INFINITE CURRYING sum(1)(2)(3)...(n)

function addInfinte(a) {
	return function (b) {
		if (b) return add(a + b);
		return a;
	}
}
console.log(addInfinte(5)(6)(43)(1));


// CURRYING vs PARTIAL APPLICATIONS


// MANIPULATING DOM USING CURRYING 

function updateDom(id) {
	return function (content) {
		document.querySelector("#" + id).textContent = content;
	};
}

const updateHeader = updateDom("header");
updateHeader("Ayush");


// IMPLEMENT CURRY -> (A, B, C) -> (A)(B)(C);

function curry(func) {
	return function curryFunc(...args) {
		if (args.length >= func.length) {
			return func(...args);
		} else {
			return function (...next) {
				return curryFunc(...args, ...next);
			}
		}
	}
}

const sum2 = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum2);

console.log(totalSum(1)(2)(3)(4));
