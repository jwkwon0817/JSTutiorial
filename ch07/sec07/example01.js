function say(greetings, honorifics) {
	console.log(greetings + ' ' + honorifics + this.name);
}
let tom = { name: 'Tom Sawyer' };
let becky = { name: ' Becky Tatcher' };
say.apply(tom, [ 'Hello!', 'Mr.' ])
say.apply(becky, [ 'Hi!', 'Ms.' ])
say.call(tom, 'Hello!', 'Mr.');
say.call(becky, 'Hi!', 'Ms.');