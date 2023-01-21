let s = '2';
console.log(s - 2);
console.log(+s);

console.log();

console.log(parseInt('3.14'));
console.log(parseFloat('3.14'));
console.log(parseInt('3.14 meters')); // 숫자 다음에 등장하는 문자열은 무시
console.log(parseFloat('3.14 meters')); // 숫자 다음에 등장하는 문자열은 무시
console.log(parseInt('0xFF'));
console.log(parseInt('0.5'));
console.log(parseInt('.5'));
console.log(parseInt('abc'));
console.log(parseFloat('\100'));

console.log();

console.log(parseInt('101', 2));
console.log(parseInt('ff', 16));

console.log();

// Number function
console.log(Number('2.71828'));

console.log(Number(123));
console.log(Number(true));
console.log(Number(false));
console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number({ x: 1, y: 2 }));
console.log(Number([ 1, 2, 3 ]));