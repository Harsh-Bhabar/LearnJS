
// POLYFILL - BIND 

Function.prototype.myBind = function (context = {}, ...args) {
	if (typeof this != 'function') {
		throw new Error(this + " is not callable");
	}

	context.fn = this;
	return function (...newargs) {
		return context.fn(...args, ...newargs);
	}
}

const carPrint = printCar.myBind(car);
console.log(carPrint(100));