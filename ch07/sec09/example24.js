function tag(strings, ...values) {
	console.log(strings);
	console.log(strings.raw);
}
tag`a\n${1}b\n${2}c${3}`;