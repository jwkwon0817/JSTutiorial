console.log(`
String.length           -> 항상 1
String.fromCharCode()   -> 인수로 넘긴 문자 코드 목록으로 문자열을 만들어 반환
String.fromCodePoint()  -> 인수로 넘긴 코드 포인트 목록으로 문자열을 만들어 반환
String.prototype        -> String의 프로토타입 객체
String.raw()            -> 템플릿 문자열의 원시 문자열 형식을 반환
`);

console.log(String.fromCharCode(0xAE38));
console.log(String.fromCharCode(65, 66, 67));

console.log(String.fromCharCode(0xd83d, 0xdcd6));

console.log(String.fromCharCode(0x1f4d6));

console.log(String.fromCharCode(0xd83d, 0xdcd6));
console.log(String.fromCodePoint(0x1f4d6));

console.log('\u{1f4d6}');