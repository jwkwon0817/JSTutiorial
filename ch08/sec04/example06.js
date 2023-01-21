let person = Object.defineProperties({}, {
	_name: {
		value: 'Tom',
		writable: true,
		enumerable: true,
		configurable: true
	},
	name: {
		get: function() {
			return this._name;
		},
		set: function(value) {
			let str = value.charAt(0).toUpperCase() + value.substring(1);
			this._name = str;
		},
		enumerable: true,
		configurable: true
	}
});
console.log(Object.getOwnPropertyDescriptor(person, 'name'));