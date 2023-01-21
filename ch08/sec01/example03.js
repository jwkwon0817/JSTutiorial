// Object.create
let card = Object.create(Object.prototype, {
	suit: {
		value: '하트',
		writable: true,
		enumerable: true,
		configurable: true
	},
	rank: {
		value: 'A',
		writable: true,
		enumerable: true,
		configurable: true
	}
});