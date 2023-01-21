let a = [ 1, 2, 3 ];
let b = [ 1, 2, 3 ];
let c = a;
console.log(a == b);
console.log(a == c);

// 동일 연산자
console.log(null == undefined);
console.log(1 == '1');
console.log('0xff' == 255);
console.log(true == 1);
console.log(true == '1');
console.log((new String('a')) == 'a');
console.log((new Number(2)) == 2);
console.log([2] == 2);

// 일치 연산자
console.log(NaN === NaN);

console.log(null === undefined);
console.log(1 === '1');
console.log('0xff' === 255);
console.log(true === 1);
console.log(true === '1');
console.log((new String('a')) === 'a');
console.log((new Number(2)) === 2);
console.log([2] === 2);