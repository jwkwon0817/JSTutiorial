function stringToArray(s) {
	return s.match(/[\uD800-\uDBff][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}

console.log(stringToArray('📖 모던 자바스크립트 입문'));