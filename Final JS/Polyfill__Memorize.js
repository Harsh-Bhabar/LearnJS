
// POLYFILL - MEMORIZE / CACHING 

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
	}

}

let memo = myMemorize(withoutMemorize);

console.time("with Memorize");
console.log(memo(765, 765));
console.timeEnd("with Memorize");

console.time("with Memorize");
console.log(memo(765, 765));
console.timeEnd("with Memorize");