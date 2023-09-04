
// MAKE A FUNC CALL ONCE

function isCalled() {
	let called = 0;
	return () => {
		if (called == 0) {
			console.log("Called first time.");
			called++;
		} else {
			console.log("Already been called.");
		}
	}
}
let call = isCalled();
call(); call(); call(); call();

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
