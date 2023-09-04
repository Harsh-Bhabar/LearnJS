
// POLYFILL - APPLY

Function.prototype.myApply = function (context = {}, args = []) {
	if (typeof this != 'function') {
		throw new Error(this + " is not callable.");
	}

	if (!Array.isArray(args)) {
		throw new Error("pass an array as argument.");
	}

	context.fn = this;
	context.fn(...args);
};

printCar.myApply(car, [100]);