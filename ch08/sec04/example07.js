let group = {
	groupName: 'Tennis circle',
	sayGroupName: function() {
		console.log('belong to ' + this.groupName);
	}
};

let person = Object.create(group, {
	name: {
		value: 'Tom',
		writable: true,
		enumerable: true,
		configurable: true
	},
	age: {
		value: 18,
		writable: true,
		enumerable: true,
		configurable: true
	},
	sayName: {
		value: function() {
			console.log('I\'m ' + this.name + '.');
		},
		writable: true,
		enumerable: false,
		configurable: true
	}
});

console.log(person);
console.log(person.groupName);
person.sayGroupName();
person.sayName();