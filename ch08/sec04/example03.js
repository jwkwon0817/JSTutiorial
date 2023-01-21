let person = { name: 'Tom' };
Object.defineProperty(person, 'name', {
	writable: false
});
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
person.name = 'Huck';
console.log(person.name);