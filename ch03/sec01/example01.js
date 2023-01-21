let card1 = { suit: '하트', rank: 'A' };
console.log(card1);

let card2 = { 'suit': '하트', 'rank': 'A'};
console.log(card2);
console.log();

console.log('card2.suit: ' + card2.suit);
console.log('card2[\'rank\']: ' + card2['rank']);

console.log('card2.color: ' + card2.color); // -> undefined

let obj = {};
console.log('obj: ' + obj); // -> Object{}