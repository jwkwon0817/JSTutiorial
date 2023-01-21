function fact(n) {
	let k = 1;
	let i = 1;
	while (i < n) {
		k *= (++i);
	}
	return k;
}
console.log(fact(5));