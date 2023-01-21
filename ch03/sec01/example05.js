let card = { suit: '하트', rank: 'A' };

let a = card;

console.log('a.suit: ' + a.suit);
a.suit = '스페이드';
console.log('a.suit: ' + a.suit);
console.log('card.suit: ' + card.suit);