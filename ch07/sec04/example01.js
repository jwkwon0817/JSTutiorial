let tom = {
	name: 'Tom',
	sayHello: function() {
		console.log('Hello! ' + this.name);
	}
};

tom.sayHello();

let huck = { name: 'Huck' };
huck.sayHello = tom.sayHello;

huck.sayHello();