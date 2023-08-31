
function subscribe(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("subscribed by " + username);
		}, 1000);
	})
}

function like(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("liked by " + username);
		}, 1000);
	})
}

function share(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("shared by " + username);
		}, 1000);
	})
}

const res = async () => {
	try {
		const msg1 = await subscribe("harsh"); // waits untill the promise returns its state
  		const msg2 = await like("ayush");
		const msg3 = await share("mrinal");
		console.log({ msg1, msg2, msg3 });
	} catch (error) {
		console.error("Failed " + error);
	}
}
console.log(res());


// ques 
console.log("start"); // sync
	
const pro1 = new Promise((resolve, reject)=>{
	console.log(2); // sync
	resolve(3); // async
	console.log(4); // sync
})

pro1.then((res)=>{
	console.log(res); // sync
})

console.log("end");

// output - start 2 4 end 3


// convert func using async await

function loadJson(url){
	return fetch(url).then((response)=>{
		if(response.status == 200){
			return response.json();
		}else{
			throw new Error(response.status);
		}
	});
}

// ans 

async function loadJSON(url) {
	let response = await fetch(url);
	if(response.status == 200){
		let json = response.json();
		return json;
	}else{
		throw new Error("Failed to fetch " + response); 
	}
}

loadJson("some-url").catch((err)=>{
	console.log(err);
})

// create a promiseRecurse
function promRecurse(funcs) {
	if(funcs.length === 0){
		return ;
	}

	const currProm = funcs.shift();

	currProm.then((res)=>{
		console.log(res);
	}).catch((err)=>{
		console.log(err);
	});

	promRecurse(funcs);
}

const funcs = ([
	subscribe("Harsh"),
	like("Ayush"),
	share("Mrinal")
]);

