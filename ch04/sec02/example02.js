function polarToDescartes(r, theta) {
	let angle = Math.PI * theta / 180;
	return { x: r * Math.cos(angle), y: r * Math.sin(angle) };
}

// Math Object Properties
console.log(Math.E);        // 자연 로그의 밑수
console.log(Math.LN2);      // 2의 자연 로그
console.log(Math.LN10);     // 10의 자연 로그
console.log(Math.LOG2E);    // 2를 밑으로 한 e의 로그
console.log(Math.LOG10E);   // 10을 밑으로 한 e의 로그
console.log(Math.PI);       // 원주율
console.log(Math.SQRT1_2);  // 1/2의 제곱근
console.log(Math.SQRT2);    // 2의 제곱근

// Math Object Methods
console.log(`
Math.abs(x)               -> |x|
Math.acos(x)              -> arccos(x)
Math.acosh(x)             -> arccosh(x)
Math.asin(x)              -> arcsin(x)
Math.asinh(x)             -> arcsinh(x)
Math.atan(x)              -> arctan(x)
Math.atan2(x, y)          -> arctan2(x, y)
Math.atanh(x)             -> arctanh(x)
Math.cbrt(x)              -> x의 세제곱근
Math.ceil(x)              -> x 이상의 최소 정수
Math.clz32(x)             -> x를 32비트 부호 없는 정수로 표현했을 때 앞에 있는 0비트의 수
Math.cos(x)               -> cos(x)
Math.cosh(x)              -> cosh(x)
Math.exp(x)               -> e의 x제곱
Math.expm1(x)             -> e의 x제곱에서 1을 뺀 값
Math.floor(x)             -> x 이하의 최대 정수
Math.fround(x)            -> x에 가장 가까운 단정밀도 부동소수점 값
Math.hypot(x1, x2, ...)   -> 인수의 제곱함의 제곱근
Math.imul(a, b)           -> 32비트 부호 있는 정수로 처리되는 a와 b의 곱
Math.log(x)               -> log(x)
Math.log2(x)              -> x의 밑이 2인 로그
Math.log10(x)             -> x의 밑이 10인 로그
Math.log1p(x)             -> log(x+1)
Math.max(x, y)            -> x와 y 중에서 큰 값
Math.min(x, y)            -> x와 y 중에서 작은 값
Math.pow(x, p)            -> x의 p제곱
Math.random()             -> 0 이상 1 미만의 난수
Math.round(x)             -> x의 반올림
Math.sign(x)              -> x의 부호
Math.sin(x)               -> sin(x)
Math.sinh(x)              -> sinh(x)
Math.sqrt(x)              -> x의 제곱근
Math.tan(x)               -> tan(x)
Math.trunc(x)             -> x의 정수부
`);