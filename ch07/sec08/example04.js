let pow = function(exponent) {
	return function(base) {
		return Math.pow(base, exponent);
	};
};

let square = pow(2);
let sqrt = pow(.5);
let cubicroot = (1 / 3);

let sum = function(a, b) {
	return a + b;
};

let a = [ 1, 2, 3, 4 ];
let abs_a = pow(.5)(a.map(pow(2)).reduce(sum));