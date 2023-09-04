// Higher order function - 
// function returning antoher funciton or taking another func as an argument

let radiuses = [1, 2, 3, 4];

const area = function (r) {
	return Math.PI * r * r;
}

const diameter = function (r) {
	return 2 * Math.PI * r;
}

const calculate = function (radiuses, logic) {
	let output = [];
	for(let i=0; i<radiuses.length; i++){
		output.push(logic(radiuses[i]));
	}
	return output;
}


console.log(calculate(radiuses, area));
console.log(calculate(radiuses, diameter));