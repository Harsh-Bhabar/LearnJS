// ------- VAR is functional scope 
// ------- LET AND CONST are block scope 

{
	var a = 5; // let and const throws error
	let b = 15;
	const c = 25;
	console.log(b, c);
}
console.log(a);

// -------- SHADOWING 

// var -> let is fine 
// let -> var throws error

function test() {
	let a = "Harsh";	
	if(true){
		let a = "Mrinal"; // shadowing 
		console.log(a);
	}
	console.log(a);
}
test();

// --------- DECLARATION 
// let and const can;t be declared in the same scope 
// var can be 

// --------- DECLARTION WITHOUT INTIALIZATION 
// const throws error rest is fine 

// --------- RE-INITIALIZATION
// const throws error rest in fine

// ---------- HOISTING 

// during declaration phase JS moves our variables and funtions at the top of the code this is called hoisting

console.log("cntVAR ", cntVAR); // undefined,  here
// console.log("cntLET ", cntLET); // throws error,  that it is not inititalized 
// console.log("cntLET ", cntCONST);	// SINCE IT IS IN TEMPERAL DEAD ZONE
var cntVAR = 1;
let cntLET = 1;
const cntCONST = 1;