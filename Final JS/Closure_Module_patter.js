let module = (function () {
	function privateFun() {
		console.log("private");
	}

	return {
		publicFun: function () {
			privateFun();
			console.log("public");
		}
	}
})();