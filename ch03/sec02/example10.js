let circle = {
	center: { x: 1.0, y: 2.0 },
	radius: 2.5,
	area: function () {
		return Math.PI * this.radius * this.radius;
	}
};

console.log(circle.area());

circle.translate = function(a, b) {
	this.center.x = this.center.x + a;
	this.center.y = this.center.y + b;
};

circle.translate(1, 2);
console.log(circle.center); // -> Object { x = 2, y = 4 }