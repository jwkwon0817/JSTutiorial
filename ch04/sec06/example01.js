console.log(10 + 'cookies');
console.log(100 + '');
console.log(('0000' + 12).slice(-4));

console.log();

// Number Object Methods
let n = 26;
console.log(n.toString());
console.log(n.toString(2));
console.log(n.toString(16));
console.log((26).toString(16));

console.log();

let x = 1234.567;
console.log(x.toString());
console.log(x.toString(16));
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toExponential(3));
console.log(x.toPrecision(3));
console.log(x.toPrecision(6));

// String function
console.log(String(26));
console.log(String(1234.567));
console.log(String(0x1a));

console.log();

console.log(String('ABC'));
console.log(String(true));
console.log(String(false));
console.log(String(NaN));
console.log(String(null));
console.log(String(undefined));
console.log(String({ x: 1, y: 2}));
console.log(String([ 1, 2, 3 ]));