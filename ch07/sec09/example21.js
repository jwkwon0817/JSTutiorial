function* g() {
	yield 1;
	yield 2;
	yield 3;
}

let iter = g();

console.log(iter.next());
console.log(iter.return(10));
console.log(iter.next());