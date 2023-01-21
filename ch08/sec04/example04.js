let person = {
	name: 'Tom',
	age: 17,
	sayHello: function() {
		console.log('Hello! ' + this.name);
	}
};
Object.defineProperty(person, 'sayHello', {
	enumerable: false
});
for (let p in person) {
	console.log(p);
}