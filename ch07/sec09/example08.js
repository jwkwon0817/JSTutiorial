let f = function() {
	console.log(this.name);
}

let g = () => console.log(this.name);

let tom = { name: 'Tom' };

f.call(tom);
g.call(tom);