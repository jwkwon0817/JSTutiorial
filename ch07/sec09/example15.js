let a = [ 5, 4, 3 ];
let iter = a[Symbol.iterator]();
while (true) {
	let iteratorResult = iter.next();
	if (iteratorResult.done === true) {
		break;
	}
	let v = iteratorResult.value;
	console.log(v);
}