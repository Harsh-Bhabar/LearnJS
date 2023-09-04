// PRIVATE COUNTER USING CLOSURE
function counter() {
	let _counter = 0;

	function add(increment) {
		_counter += increment;
	}
	function retrieve() {
		return _counter;
	}
	return {
		add,
		retrieve
	};
}

const cntr = counter();
cntr.add(5);
console.log("cntr ret - ", cntr.retrieve());
cntr.add(55);
console.log("cntr ret - ", cntr.retrieve());