// BLOCK SCOPE & SET TIMEOUT

function guess() { // var has function scoep 
	for (var i = 0; i < 3; i++) { // VAR will give us 3 3 3 because of function scope
		setTimeout(() => { // LET will give us 0 1 2 
			console.log(i);
		}, 1000);
	}
}
guess(); // 3 3 3

//USE ONLY VAR TO PRINT 0 1 2 -> USING CLOSURE
function guess2() {
	for (var i = 0; i < 3; i++) {
		function createInnerGuess(index) {
			return function () {
				setTimeout(() => {
					console.log(index);
				}, 1000);
			};
		}

		var innerGuess = createInnerGuess(i);
		innerGuess();
	}
}

guess2();