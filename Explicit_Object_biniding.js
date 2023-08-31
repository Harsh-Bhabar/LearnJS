

// 1. what is Call 

const obj = {name : "Harsh"};

function fun() {
  return "Hello " + this.name;
}
function fun2(age) {
  return "Hello " + this.name + " age " + age;
}
function fun3(age, name) {
  return "Hello " + this.name + " age " + age + " " + name;
}

console.log(fun());
console.log(fun.call(obj));
console.log(fun2.call(obj, 24));

// 2. APPLY
// same as call  but needs arguments as list 

console.log(fun3.apply(obj, [24, "Ayus"]));

// 3. BIND 
// it return us a funtion to be called later 

const bindFunc = fun3.bind(obj);

console.log(bindFunc(24, "mrinal"));