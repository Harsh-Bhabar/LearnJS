// ------------- OBJECT

// const Circle = {
// 	radius : 1,
// 	location: {
// 		x: 4,
// 		y: 5 
// 	},
// 	draw: function(){
// 		console.log("draw")
// 	}
// };
// Circle.draw();

// to create a OBJECT, we've two ways

// --------------- Factory function - uses return 

// function createCircle(radius){
// 	return {
//     radius,

//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const Circle = createCircle(1);
// Circle.draw();

// ---------------- CONSTRUCTOR FUNCTION - uses this 
function Circle(radius){
	this.radius = radius;
	this.draw = function(){
		console.log("draw");
	}
};

const c = new Circle(5);
c.draw();

// ------------------- CLASSes


class Square{
	constructor(side){
		this.side = side;
	}
	draw() {
		console.log("Daaw " + this.side) ;
	}
}

let sq = new Square(5);
sq.draw();


// ------- reference in js
// primitive - primitives are copied by value
let x = 10;
let y = x;

x = 20;
console.log(x + " " + y); // copy is made 

// objects - objects are copied by refernce
let a = {value: 100};
let b = a;

a.value = 500;
console.log(a, b); // refernces the same memory

// ques on reference 

let num = 10;
function increase(num){
	num++;
}
increase(num);
console.log(num) ; // 10 not 11, since in function a copy is passed, not object

let num2 = {value : 20};
function increase2(num){
	num.value = 500; // will changes the actual object 
}
increase2(num2); // pass by reference 
console.log(num2);