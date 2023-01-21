function dist(p, q) {
	let dx = q.x - p.x;
	let dy = q.y - p.y;
	return Math.sqrt((dx * dx) + (dy * dy));
}

let p1 = { x: 1, y: 1 };
console.log(p1);

let p2 = { x: 4, y: 5 };
console.log(p2);

let d = dist(p1, p2);
console.log(d);

let bark = function() {
	console.log('Bow-wow');
}
bark();

console.log(bark()); // -> undefined