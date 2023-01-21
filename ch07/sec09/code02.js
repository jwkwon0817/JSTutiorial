function* createNumbers(from, to) {
	while (from <= to) {
		yield from++;
	}
}

let iter = createNumbers(10, 20);
for (let v of iter) {
	console.log(v);
}