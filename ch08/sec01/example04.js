// 생성자 안에서 메서드를 정의하는 방식의 문제점
function Circle(center, radius) {
	this.center = center;
	this.radius = radius;
	this.area = function() {
		return Math.PI * this.radius * this.radius
	};
}

let c1 = new Circle({ x: 0, y: 0 }, 2.0);
let c2 = new Circle({ x: 0, y: 1 }, 3.0);
let c3 = new Circle({ x: 1, y: 0 }, 1.0);