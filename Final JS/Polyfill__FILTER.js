// ------------------------ FILTER

Array.prototype.myFiler = function (cb) {
	let temp = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) temp.push(this[i]);
	}
	return temp;
};
const polyFiler = arr1.myFiler((num, i, arr1) => {
	return num % 2 == 0;
});