function multiply(a, b = 1) {
	return a * b;
}

console.log(multiply(2));
console.log(multiply(3, 2));

function add(a, b = a + 1) {
	return a + b;
}


console.log(add(2));
console.log(add(2, 1));