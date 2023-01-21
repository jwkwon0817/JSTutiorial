let person = { name: 'Tom', age: 17, sex: '남' };
Object.defineProperty(person, 'age', {
	configurable: false
});
delete person.age;
console.log(person.age);

Object.defineProperty(person, 'age', {  // TypeError: Cannot redefine property: age
	enumerable: false
});
Object.defineProperty(person, 'age', {	// TypeError: Cannot redefine property: age
	writable: false
});