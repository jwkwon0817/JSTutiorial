/**
 * 빠른 정렬
 * @param x 정렬할 배열
 * @param first 첫 번째 요소의 위치
 * @param last 정렬할 마지막 요소의 위치
 */
function quicksort(x, first, last) {
	let p = x[Math.floor((first + last) / 2)];
	for (var i = first, j = last; ; i++, j--) {
		while (x[i] < p) {
			i++;
		}
		while (p < x[j]) {
			j--;
		}
		if (i >= j) {
			break;
		}
		let w = x[i];
		x[i] = x[j];
		x[j] = w;
	}
	if (first < i - 1) {
		quicksort(x, first, i - 1);
	}
	if (j + 1 < last) {
		quicksort(x, j + 1, last);
	}
}

let a = [ 7, 2, 5, 1, 8, 9, 3 ];
quicksort(a, 0, a.length - 1);
console.log(a);