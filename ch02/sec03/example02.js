console.log(`I'm going to learn Javascript.`);

let a = `Man errs as long as
he strives.`;
console.log(a);

let b = "Man errs as long as\nhe strives.";
console.log(b);

let c = `Man errs as long as\nhe strives.`;
console.log(c);

let d = String.raw`Man errs as long as\nhe strives.`;
console.log(d);

let e = "Man errs as long as\\nhe strives.";
console.log(e);

let var1 = 2;
let var2 = 3;
console.log(`${var1} + ${var2} = ${var1 + var2}`); // -> 2 + 3 = 5
let now = new Date();
console.log(`오늘은 ${now.getMonth() + 1}월 ${now.getDate()}일입니다.`);