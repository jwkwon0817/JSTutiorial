let iterable = {};
iterable[Symbol.iterator] = function() {
	return iter;
};

for (let v of iterable) {
	console.log(v);
}