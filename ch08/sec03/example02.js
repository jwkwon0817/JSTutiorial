let person = (function() {
	let _name = 'Tom';
	return {
		get name() {
			return _name;
		},
		set name(value) {
			let str = value.charAt(0).toUpperCase() + value.substring(1);
			_name = value;
		}
	};
})();

console.log(person.name);
person.name = 'huck';
console.log(person.name);