function fact(n) {
	let k = 1;
	let i = n;
	do {
		k *= i--;
	} while ( i > 0);
	return k;
}

console.log(fact(5));