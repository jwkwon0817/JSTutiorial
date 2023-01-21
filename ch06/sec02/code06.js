function sumArray(a) {
	let sum = 0;
	for (let i = 0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}
let a = [ 3, 5, 1, 2, 6, 7 ];
console.log(sumArray(a));