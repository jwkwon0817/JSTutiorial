function joinString(n, f) {
	let s = '';
	for (let i = 0; i < n; i++) {
		s += f(i);
	}
	return s;
}

let digits = joinString(10, function(i) {
	return i;
});
let randomChars = joinString(8, function(i) {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
});
console.log(digits);
console.log(randomChars);