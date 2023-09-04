// POLYFILL - CALL

let car = {
	name: "Porsche",
	color: "white"
}

function printCar(price) {
	console.log("car name-color-price", this.name, this.color, price);
}

Function.prototype.myCall = function (context = {}, ...args) {
	if (typeof this != 'function') {
		throw new Error(this + " is not callable");
	}
	context.fn = this; // in our case its printcar
	context.fn(...args);
}

printCar.myCall(car, 100);