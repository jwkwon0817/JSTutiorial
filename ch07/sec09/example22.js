function* f() {
	yield 'X';
	yield 'Y';
}

function* g() {
	yield 0;
	yield* [ 2, 4 ];
	yield* 'AB';
	yield* f();
}

let iter = g();
for (let v of iter) {
	console.log(v);
}