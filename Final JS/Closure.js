// global scope 
let username2 = "aysuh";
function lol() {
	// outer function scope
	let x = "harsh";
	function lol2(name) {
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
(function () {
	if (cnt == 0) {
		let cnt = 1; // SHADOWING
		console.log(cnt); // 1 
	}
	console.log(cnt); // 0
})();

// OPTIMIZE USING CLOSURE

function myFunc2() {
	let a = [];
	for (let i = 0; i < 10000000; i++) {
		a[i] = i * i;
	} // will only run one time and stores in the list
	return function (ind) { // closure to return val
		return a[ind];
	}
}

// CREATE CLOSURE

let addSix = addsixfun(6);
addSix(10); // returns 16
addSix(20); // returns 26

function addsixfun(x) {
	function addsixfun2(y) {
		console.log(x + y);
		return x + y;
	};
	return addsixfun2;
}

