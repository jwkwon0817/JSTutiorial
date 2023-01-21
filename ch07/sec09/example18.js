v = [ 3, 4, 5 ];
iter = v[Symbol.iterator];

for (let v of iter) {
	console.log(v);
}

// TypeError: iter is not iterable