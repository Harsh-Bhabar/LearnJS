// -------------- DEBOUNCE 

// Debounce function polypill
function debounce(func, delay) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

// Example usage
const debouncedFunction = debounce(() => {
	console.log("Debounced function executed!");
}, 300);

// Attach the debounced function to an event
window.addEventListener("scroll", debouncedFunction);