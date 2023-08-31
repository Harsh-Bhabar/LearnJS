// synchronous vs asynchronous 

// JS runs sync code first then async code 

// sync code 
console.log("start");

// async 
function getMsg(name) {
	setTimeout(() => {
  		console.log("promises - ", name);
	}, 1000);
}
const msg = getMsg("harsh");

console.log(msg); // gives undefined 
// sync code
console.log("end");


// to fix we make use of Callbacks, BUT it leads to Callback HELL, so we use Promises

// PROMISE 

// const ans = new Promise( (resolve, reject) => {
// 	setTimeout(()=>{
// 		const result = true;
// 		if(result){
// 			resolve("accepted promise");
// 		}else{
// 			reject(new Error("rejected"));
// 		}
// 	}, 1000);
// });

// then()-> if promise is fullfilled 
// catch -> is not fulfilled

// console.log(ans);

// ans
// .then( (res) => {
// 	console.log(res);
// })
// .catch( (err) => {
// 	console.log(err);
// });

// or simply 

// const sub = Promise.resolve("resolved.");
// console.log(sub);
// sub.then("accrepted promise")
// .catch("rejected promise");


// removing callback HELL

function importantAction(username){
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			reject("promise resolved for " + username);
		}, 1000);
	})
}

function likeMe(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("promise resolve for likeMe " + username);
    }, 1000);
  });
}

function likeYou(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("promise resolve for likeYou " + username);
    }, 1000);
  });
}

// PROMISE HELL - so we use promise chaining

// importantAction("Harsh").then((res) => {
// 	console.log(res);
// 	likeMe("Ayush").then((res)=>{
// 		console.log(res);
// 	})	
// 	.catch((err)=>{
// 		console.log(err);
// 	})
// })
// .catch((err)=>{
// 	console.log(err);
// });

// PROMISES CHAINING -- still lengthy

// importantAction("Harsh").then((res)=>{
// 	console.log(res);
// 	return likeMe("Ayush");
// }).then((res)=>{
// 	console.log(res);
// })

// PROMISE COMBINATORS - 
// 1. PROMISE.ALL - if any one fails, all fails
// 2. PROMISE.RACE - based on time, whichever completes first it will give that
// 3. PROMISE.ALLSETTLED - returns resolved as well as failed
// 4. PROMISE.ANY - return the first fullfilled and ignores all rejects

console.log(
	Promise.any([
		likeYou("Mrinal"),
		importantAction("Harsh"),
		likeMe("Ayush"),
	]).then((res)=>{
		console.log(res);
	}).catch((err)=>{
		console.error(err);
	})
);