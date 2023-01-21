function Circle(center, radius) {
	this.center = center;
	this.radius = radius;
}

let c = new Circle({ x: 0, y: 0 }, 2.0);
Circle.prototype.area = function() {
	return Math.PI * this.radius * this.radius;
};
console.log(c.area());