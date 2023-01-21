let msgObj1 = new String('Everything is practice.');
console.log(msgObj1);

console.log(`
codePointAt(n)          -> 대상 문자열 n 번째 문자의 코드 포인트의 스칼라 값을 10진수로 표기한 값
charAt(n)               -> 대상 문자열의 n 번째 문자
charCodeAt(n)           -> 대상 문자열 n 번째 문자의 UTF-16 코드를 10진수로 표기한 값
concat([ s1, s2, ... ]) -> 대상 문자열과 인수의 문자열을 연결해서 반환
endsWith(s [ , n ])     -> 대상 문자열의 n 번째 문자부터 문자열 s로 끝나는지를 판별한 논리값 / n을 생략하면 문자열의 끝부터 검색함.
includes(s [ , n ])     -> 대상 문자열의 n 번째 문자부터 문자열 s를 포함하는지를 판별한 논리값 / n을 생략하면 문자열의 끝부터 검색함.
indexOf(s)              -> 대상 문자열에서 s가 처음 나오는 위치
lastIndexOf(s)          -> 대상 문자열에서 s가 마지막으로 나오는 위치
localeCompare(s)        -> 대상 문자열이 문자의 정렬 순서어ㅔ 따라 s의 앞뒤에 있는지 또는 같은 위치에 있는지 표시
match(r)                -> 대상 문자열에 정규 표현식 r을 매칭한 결과값
normalize(form)         -> form이 제시한 방식으로 유니코드 문자를 정규화
repeat(an)              -> 대상 문자열을 n개 연결한 문자열
replace(s1, s2)         -> 대상 문자열에 포함된 문자열 s1을 문자열 s2로 치환한 결과값
search(r)               -> 대상 문자열에서 정규식 r이 일치한 위치의 인덱스 값
slice(m, n)             -> 대상 문자열이 m 번째 이후 n 번째 미만의 부분 문자열을 반환 / m과 n이 음수면 문자열이 끝이 시작 위치가 됨.
split(s [ , n ])        -> 대상 문자열을 문자열 s로 분할한 문자열 배열을 반환 / n은 발견된 문자열의 개수를 제한
startsWith(s [ , n ])   -> 대상 문자열의 n 번째 문자부터 문자열 s로 시작하는지를 판별한 논리값 / n이 생략되어 있으면 문자열의 처음부터 검색
substring(m, n)         -> 대상 문자열의 n 번째 문자부터 문자열 s로 시작하는지를 판별한 논리값 / n이 생략되어 있으면 문자열의 처음부터 검색
toLocaleLowerCase()     -> 대상 문자열을 Locale(언어)에 맞는 소문자로 변환
toLocalUpperCase()      -> 대상 문자열을 Locale(언어)에 맞는 대문자로 변환
toLowerCase()           -> 대상 문자열을 소문자로 변환
toString()              -> String 객체를 문자열 값으로 변환
toUpperCase()           -> 대상 문자열을 대문자로 변환
trim()                  -> 대상 문자열에서 앞뒤 공백을 제거
valueOf()               -> String 객체를 문자열 값으로 변환
`);

console.log(msgObj1.length);

console.log(msgObj1.charAt(3));

let msg1 = 'Everything is practice.';
console.log(msg1);

console.log(msg1.length);
console.log(msg1.charAt(3));

let c1 = msg1.charAt(3)
console.log(c1);

let msgObj2 = new String(msg1);
console.log(msgObj2);

let c2 = msgObj2.charAt(3)
console.log(c2);

let msg2 = 'Everything is practice.';
console.log(msg2);

let msg3 = new String('Everything is practice')
console.log(msg3);

let msg4 = new String('Everything is practice.').valueOf();
console.log(msg4);

let msg = new String('Everything is practice');
console.log(msg);

console.log(msg.substring(7, 10));
console.log(msg.slice(7, 10));
console.log(msg.slice(-3));
console.log(msg.slice(-9, -6));
console.log(msg.indexOf('t'));
console.log(msg.indexOf('i', 10));
console.log(msg.lastIndexOf('t'));
console.log(msg.split(' '));
console.log(msg.replace('p', 'P'));
console.log(msg.toUpperCase());
console.log(msg.endsWith('.'));
console.log(msg.includes('thing'));
console.log(msg.charCodeAt(0));
console.log(msg.codePointAt(0));
