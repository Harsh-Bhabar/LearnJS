function Circle(radius){
	let color = "Black"; // making them local
	let func = function(){
		console.log("FUNC");
	}
	this.radius = radius; // this is obejcts
	this.draw = function(){
		func();
		console.log("Draw");
	} 
};


const c = new Circle(1); 

const c2 = new Circle(2); 

c.location = {x: 1, y: 2}; // can add property to an object in runtime 
console.log(c);

delete c.location;
console.log(c);

// to eumberate of the objet  
// for(let key in c2){
// 	if(typeof c2[key] != 'function')
// 		console.log(key, c2[key]);
// }

console.log(Object.keys(c2));


class Rectangle{
	constructor(len, breath){
		this.len = len;
		this.breath = breath;

		this.area = () => {
			return this.len * this.breath;
		}

		let color = "Black"; // can't be accesssible to anyone 
		let size = 100;
	}
}

const rect = new Rectangle(5, 10);
console.log(rect.area());