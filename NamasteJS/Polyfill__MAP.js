// -------------------- MAP
// Array.map((num, i, arr)=>{});

Array.prototype.myMap = function (cb) {
	let temp = [];
	for (let i = 0; i < this.length; i++) {
		temp.push(cb(this[i], i, this));
	}
	return temp;
};

let arr1 = [1, 2, 2, 3];

const polyMap = arr1.myMap((num, i, arr1) => {
	return num * 5;
});
