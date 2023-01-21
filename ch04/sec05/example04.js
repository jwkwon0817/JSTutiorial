let x = 1;
x++;

let formula = 'x * x';
eval('function f1(x) { return ' + formula + '; }');

function f2(x) {
	return x * x;
}