// module pattern

var module = (function func(){
	function privateFunc(){
		console.log("private");
	}

	return {
		publicFunction: () => {
			// can call private methods here 
			console.log("public");
		}
	}
})();

module.publicFunction();
// module.privateFunc(); // is undefined;


// ques - make it run only once
let view;
function fun(){
	let called = 0;
	return {
		innterFun : () => {
			if(called >= 1){
				console.log("Already done.");
			}else{
				console.log("Harsh");
				called++;
			}
		}
	};
};

let c = fun();
c.innterFun();
c.innterFun();
c.innterFun();
c.innterFun();
