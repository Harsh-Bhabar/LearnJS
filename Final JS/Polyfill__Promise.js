
// --------------------------- POLYFILL - PROMISE


function myPromise(executor) {

	let onResolve;
	let onReject;
	let isFullFilled = false;
	let isRejected = false;
	let isCalled = false;
	let value;

	function resolve(val) {
		isFullFilled = true;
		value = val;
		if (typeof onResolve == 'function') {
			onResolve(val);
			isCalled = true;
		}

	}

	function reject(val) {
		isRejected = true;
		value = val;
		if (typeof onReject == 'function') {
			onReject(val);
			isCalled = true;
		}
	}

	this.then = function (callback) {
		onResolve = callback;
		if (isFullFilled && !isCalled) {
			isCalled = true;
			onResolve(value);
		}
		return this;
	}

	this.catch = function (callback) {
		onReject = callback;
		if (isRejected && !isCalled) {
			isCalled = true;
			onReject(value);
		}
		return this;
	}

	try {
		executor(resolve, reject);
	} catch (error) {
		reject(error);
	}
}

const examplePromise = new myPromise((resolve, reject) => {
	reject("MSG");
});

examplePromise
	.then((res) => {
		console.log(res);
	}).catch((err) => {
		console.error(err);
	})


// ------------------ PROMISE . ALL 

function myPromiseAll(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			return reject(new TypeError("promises must be an array"));
		}

		const results = [];
		let remainingPromises = promises.length;

		if (remainingPromises === 0) {
			resolve(results);
			return;
		}

		promises.forEach((promise, index) => {
			Promise.resolve(promise)
				.then((result) => {
					results[index] = result;
					remainingPromises--;

					if (remainingPromises === 0) {
						resolve(results);
					}
				})
				.catch((error) => {
					if (!results.hasOwnProperty(index)) {
						// Reject if this is the first rejected promise
						reject(error);
					}
				});
		});
	});
}

// Example usage
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject("Error in promise 3");
const promise4 = Promise.resolve(4);

myPromiseAll([promise1, promise2, promise3, promise4])
	.then((results) => {
		console.log("All promises resolved:", results);
	})
	.catch((error) => {
		console.error("At least one promise rejected:", error);
	});
