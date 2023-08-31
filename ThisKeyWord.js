//que

let user = {
	name: "Ayush",
	age: 22,
	getDetails(){
		console.log("name = " + this.name);
	}
}
user.getDetails(); // ayush

let user2 = {
  name: "Ayush",
  age: 22,
  getDetails : () => {
    console.log("name = " + this.name);
  },
};
user2.getDetails(); // undefined, since this" value comes from its parent function 

let user3 = {
	name: "Ayush",
	age: 22,
	getDetails(){
		const nestedArrow = () => console.log("name = " + this.name);
		nestedArrow();
	},
}
user3.getDetails(); // ayush

// CALCULAOR 

let calculator = {
	read() {
		this.a = +prompt("a", 0);
		this.b = +prompt("b", 0);
	},

	add(){
		return this.a + this.b;
	},

	mul(){
		return this.a * this.b;
	}
}
// calculator.read();
// console.log(calculator.add());
// console.log(calculator.mul());


// IMPLEMENT CALC 

const calc = {
	total: 0,
	add(a) {
		this.total += a;
		return this;
	},
	mul(b){
		this.total *= b;
		return this;
	},
	sub(c){
		this.total -= c;
		return this;
	}
}

const res = calc.add(10).mul(10).sub(20).add(5);
console.log(res);