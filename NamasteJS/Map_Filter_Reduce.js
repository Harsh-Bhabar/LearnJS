// ------------- MAP 
// used to transform our array on some logic

let arr = [1, 2, 3, 4, 5];

let double = function(x){
	return x * x;
}
let outputDouble = arr.map(double);
console.log(outputDouble);
//OR
let outputTriple = arr.map((x) => {
	return x *3;
})
console.log(outputTriple);


// ----------- FILTER
// used to filter our arr

const oddArr = arr.filter((x) => {
	return x % 2;
})
console.log(oddArr);
//OR
const evenArr = function(x){
	return x%2 == 0; 
}
console.log(arr.filter(evenArr));


// ------------- REDUCE
// used to come up with a single value from the array
// reduce(function(accumulator , curr), initialValueOfAccumulator) 

const sumArr = arr.reduce(function(acc, curr){
	acc += curr;
	return acc;
}, 0);
console.log(sumArr);

const maxArr = arr.reduce(function(acc, curr){
	if(curr > acc){
		acc = curr;
	}
	return acc;
}, 0)
console.log(maxArr);



// --- question

// count same names from list of objects

let users = [
	{ firstName: "Harsh", age: 24 },
	{ firstName: "Harsh", age: 24 },
	{ firstName: "Harsh", age: 24 },
	{ firstName: "Ayush", age: 24 },
	{ firstName: "Mrinal", age: 24 }
]

const nameCnt = users.reduce(function(acc, curr){
	if(acc[curr.firstName]){
		acc[curr.firstName] = ++acc[curr.firstName];
	}else{
		acc[curr.firstName] = 1;
	}
	return acc;
}, {})


console.log(nameCnt);

// get firstname whose age is less than 54

let users2 = [
	{ firstName: "Harsh1", age: 54 },
	{ firstName: "Harsh2", age: 26 },
	{ firstName: "Harsh3", age: 76 },
	{ firstName: "Ayush", age: 44 },
	{ firstName: "Mrinal", age: 44 }
]

const namesWithAge = users2.filter((x) => x.age < 50).map((x) => x.firstName);
console.log(namesWithAge);