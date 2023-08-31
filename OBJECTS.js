const user = {
	name : "Harsh",
	age: 24,
	"full name" : "AA"
}

user.name = "Ayuhs";
console.log(user) ;

delete user.name;
console.log(user);

console.log(user["full name"]);

const prop = "firstname";
const val = "Harsh";

const user2 = {
	[prop] : [val]
}
console.log(user2);

for(key in user){
	console.log(key, user[key]);
}

// multiply all int keys in obj by 2
const user3 = {
	num1 : 10,
	num2 : 20,
	name : "Harhs"
}

function multiplyByTwo(obj){
	for(key in obj){
		if(typeof(obj[key]) === "number"){
			obj[key] *= 2;
		}
	}
}

multiplyByTwo(user3);
console.log(user3);

const a = {};
const b = {key: "b"}
const c = {key: "c"}

a[b] = "123"; // b = [obj, obj]
a[c] = "456";

console.log(a);


// JSON.STRINGIFY VS JSON.PARSE

const str = JSON.stringify(user); // to string
console.log(str);
console.log(JSON.parse(str)) // to object 
console.log(..."Ayuhs");

let admin = {adminName: "ayush", ...user};
console.log(admin);


// destructuring 

// const name = "harsh";

const { adminName : myAdminName } = admin;
console.log(myAdminName);

let user4 = {
	name : {
		first : "mrinal",
		last : "satya"
	},
	age : 34
}

const { name: {first : firstName}} = user4;
console.log(firstName);

const value = {number : 10};

const multiply = (x = {...value}) => { // x is having default obj
	console.log(x.number *= 2);
}
multiply(); // 20
multiply(); // 20
multiply(value); // 20 -> obj gets modified  since we passed out object
multiply(value); // 40