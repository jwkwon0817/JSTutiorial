var Module = Module || {};
(function(_Module) {
	let name = 'NoName';
	function getName() {  // private 함수
		return name;
	}
	_Module.showName = function() { // public 함수
		console.log(getName());
	};
	_Module.setName = function(x) { // public 함수
		name = x;
	};
})(Module);

Module.setName('Tom');
Module.showName();