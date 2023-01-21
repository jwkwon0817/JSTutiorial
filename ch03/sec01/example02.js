let card = { suit: '하트', rank: 'A' }

card.value = 14;
console.log(card);

delete card.rank;
console.log(card);