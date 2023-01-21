function add1(x) {
	return x + 1;
}

let a = 3;
let b = add1(a);
console.log("a = " + a + ", b = " + b);

function plus1(p) {
	p.x += 1;
	p.y += 1;
	return p;
}

let c = { x: 3, y: 4 };
let d = plus1(c); // -> Object { x = 4, y = 5 } Object { x = 4, y = 5 }

// 인수를 여러 개 받기
function setBallProperties1(x, y, vx, vy, radius) {
	return 0;
}

let parameters1 = {
	x: 0,
	y: 0,
	vx: 10,
	vy: 15,
	radius: 5
};

function setBallProperties2(params) {
	return 0;
}
setBallProperties2(parameters1);

let parameters2 = {
	x: 0,
	y: 0,
	vx: 10,
	vy: 15,
	radius: 5,
	color: 'blue'
};
setBallProperties2(parameters2);