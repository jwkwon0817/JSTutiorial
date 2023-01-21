function partial(f) {
	// 중첩 함수에서 arguments를 사용하기 위해 저장
	let args = arguments;
	return function() {
		// 외부 함수의 두 번째 인수를 변수 a에 복사
		let a = Array.prototype.slice.call(args, 1);
		for (let i = 0, j = 0; i < a.length; i++) {
			// 외부 함수의 두 번째 인수가 undefined면 이 함수의 arguments를 사용
			if (a[i] === undefined) {
				a[i] = arguments[j++];
			}
		}
		return f.apply(this, a);
	};
}

let square = partial(Math.pow, undefined, 2);
let sqrt = partial(Math.pow, undefined, .5);
let cubicroot = partial(Math.pow, undefined, 1 / 3);
let exp = partial(Math.pow, Math.E, undefined);