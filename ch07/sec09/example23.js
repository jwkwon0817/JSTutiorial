function list() {
	return arguments;
}

let t = list`a${1}b${2}c${3}`;
console.log(t);