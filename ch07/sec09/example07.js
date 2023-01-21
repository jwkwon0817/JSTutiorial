let obj = {
	say: function() {
		console.log(this);
		let f = function() {
			console.log(this);
		};
		f();
		let g = () => console.log(this);
		g();
	}
};

obj.say();