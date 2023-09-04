// CALCULAOR 

let calculator = {
	read() {
		this.a = +prompt("a", 0);
		this.b = +prompt("b", 0);
	},

	add() {
		return this.a + this.b;
	},

	mul() {
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
	mul(b) {
		this.total *= b;
		return this;
	},
	sub(c) {
		this.total -= c;
		return this;
	}
}

const res = calc.add(10).mul(10).sub(20).add(5);
console.log(res);