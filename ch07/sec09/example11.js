let sum = (...args) => {
	for (var i = 0, s = 0; i < args.length; i++) {
		s += args[i];
	}
	return s;
};
console.log(sum(1, 2, 3, 4, 5));