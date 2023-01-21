let now = new Date();
console.log(now);

let then = new Date(2008, 8, 17);
console.log(then);

let elapsed = now - then;
console.log('차이: ' + elapsed + 'ms');

let start = new Date();
/* 실행 시간을 측정할 코드를 작성하는 위치 */
let end = new Date();
let time = end - start;
console.log(time);

console.log();

// Date()
console.log('Date()');
console.log('Year: ' + now.getFullYear());
console.log('Month: ' + now.getMonth());
console.log('Date: ' + now.getDate());
console.log('Day: ' + now.getDay());
console.log('Hours: ' + now.getHours());
console.log('Minutes: ' + now.getMinutes());
console.log('Seconds: ' + now.getSeconds());
console.log('Milliseconds: ' + now.getMilliseconds());
console.log('String: ' + now.toString());
console.log('to LocaleString: ' + now.toLocaleString());
console.log('to LocaleDateString: ' + now.toLocaleDateString());
console.log('to LocaleTimeString: ' + now.toLocaleTimeString());
console.log('UTC Hours: ' + now.getUTCHours());
console.log('to UTC String: ' + now.toUTCString());