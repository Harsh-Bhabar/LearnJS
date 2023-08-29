// // To print anything 
// console.log("Hello World!");


// // types of variables 
// // string , number , boolean, undefined , null
// let name = "our var"; 
// let firstName = "Harsh";
// let lastName = "Bhabar";
// let age = 30;
// console.log(firstName + " " + lastName + " age is " + age);

// // dynamic - can update
// console.log(typeof(firstName));
// firstName = 1;
// console.log(typeof firstName);
// firstName = undefined;
// console.log(typeof firstName);

// // objects 

// let Person = {
// 	age: 24,
// 	name: "Harsh"
// };
// console.log(Person);
// console.log(Person.age + " " + Person.name);


// arrays 
let selectedArrays = [1, 2, 3];
console.log(selectedArrays);
selectedArrays[2] = "Harsh";
console.log(selectedArrays, selectedArrays.length);

function hiFunc(){
	console.log("Hi");
}
function nameFunc(name){
	console.log("Hi " + name );
}

function area(len){
	return len * len;
}

hiFunc();
nameFunc("YOUYOYOY");
console.log(area(10));