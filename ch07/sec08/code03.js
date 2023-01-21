function memorize(f) {
	let cache = {};
	return function() {
		// 인수를 쉼표로 연결한 문자열을 만들어 캐시의 키 값으로 사용
		let key = '';
		for (let i = 0; i < arguments.length; i++) {
			key += arguments[i] + ', ';
			if (cache[key] === undefined) {
				cache[key] = f.apply(null, arguments);
			}
			return cache[key];
		}
	};
}