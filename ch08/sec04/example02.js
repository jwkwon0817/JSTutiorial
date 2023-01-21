let obj = {};
Object.defineProperty(obj, 'name', {
	value: 'Tom',
	writable: true,
	enumerable: false,
	configurable: true
});
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));