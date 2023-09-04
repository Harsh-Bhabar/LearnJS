// ---------------- THROTTLE 

/**
 * Throttle function that limits the rate at which a function can be called.
 * @param {function} callback - The function to be throttled.
 * @param {number} delay - The delay in milliseconds.
 * @returns {function} - The throttled function.
 */
function throttle(callback, delay) {
	let lastCallTime = 0;

	return function (...args) {
		const currentTime = Date.now();

		if (currentTime - lastCallTime >= delay) {
			callback.apply(this, args);
			lastCallTime = currentTime;
		}
	};
}

// Example usage
function handleScroll() {
	console.log("Scrolled!");
}

const throttledScroll = throttle(handleScroll, 200);

window.addEventListener("scroll", throttledScroll);
