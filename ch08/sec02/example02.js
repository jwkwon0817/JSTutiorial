let objA = {
	name: 'Tom',
	sayHello: function() {
		console.log('Hello! ' + this.name);
	}
};

let objB = {
	name: 'Huck'
};

objB.__proto__ = objA;
let objC = {};
objC.__proto__ = objB;
objC.sayHello();