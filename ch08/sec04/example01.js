let tom = { name: 'Tom' };
console.log(Object.getOwnPropertyDescriptor(tom, 'name'));

console.log(Object.getOwnPropertyDescriptor({}, 'name'));
console.log(Object.getOwnPropertyDescriptor(tom, 'toString'));