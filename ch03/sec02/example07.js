let a = 'global';

function f1() {
	let a = 'local';
	console.log(a);
	return a;
}
f1();
console.log(a);

function f2() {
	console.log(a); // -> undefined
	let a = 'local';
	console.log(a); // -> local
	return a;
}

function f3() {
	a = 'local';
	console.log(a); // -> local

	return a;
}
f3();
console.log(a);