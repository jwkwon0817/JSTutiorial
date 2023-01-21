let a = 'A';
function f() {
	let b = 'B';
	function g() {
		let c = 'C';
		console.log(a + b + c);
	}
	g();
}
f();