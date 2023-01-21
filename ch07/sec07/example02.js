function say(greetings, honorifics) {
	console.log(greetings + ' ' + honorifics + this.name);
}
let tom = { name: 'Tom Sawyer' };
let sayToTom = say.bind(tom);
sayToTom('Hello', 'Mr.');