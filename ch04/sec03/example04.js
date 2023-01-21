let msg = 'Everything is practice.'

console.log(msg[3]);
console.log(msg[msg.length - 1]);

// 배열처럼 값을 대입할 수 없음.
msg[3] = 'R';
console.log(msg);

let s = '📖'
console.log(s.codePointAt(0).toString(16));
console.log(s[0].codePointAt(0).toString(16));
console.log(s[1].codePointAt(0).toString(16));
console.log(s[0] + s[1]);