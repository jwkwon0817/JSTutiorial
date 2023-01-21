// new 연산자의 역할

function Circle(center, radius) {
	this.center = center;
	this.radius = radius;
}

Circle.prototype.area = function() {
	return Math.PI * this.radius * this.radius;
}