// Example
function Card(suit, rank) {
	this.suit = suit;
	this.rank = rank;
}

let card1 = new Card('하트', 'A');

console.log(card1);

// Constructor
let card2 = {};
card2.suit = '하트';
card2.rank = 'A';

let trump1 = new Card('하트', 'A');
let trump2 = new Card('클럽', 'K');
let trump3 = new Card('스페이드', '2');

function Particle(x, y, vx, vy) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.velocity = Math.sqrt((vx * vx) + (vy * vy))
}

let p = new Particle(0, 0, 3, 4);
console.log(p);