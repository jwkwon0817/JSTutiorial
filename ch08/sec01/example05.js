function F() {
}

console.log(F.prototype);

F.prototype.prop = 'prototype value';
let obj = new F();
console.log(obj.prop);

obj.prop = 'instance value';
console.log(obj.prop);
console.log(F.prototype.prop);