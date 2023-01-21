let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2); // -> false (객체가 다르기 때문)

let HEART = Symbol("하트");
console.log(HEART.toString());

// Othello game
let NONE = 0; // 칸에 돌이 놓여 있지 않은 상태
let BLACK = -1; // 칸에 검은 돌이 놓여 있는 상태
let WHITE = 1; // 칸에 흰 돌이 놓여 있는 상태

let NONE_S = Symbol("none");
let BLACK_S = Symbol("black");
let WHITE_S = Symbol("white");

let sym3 = Symbol.for("club");
let sym4 = Symbol.for("club")
console.log(sym3 === sym4);

let sym5 = Symbol.for("club");
let sym6 = Symbol("club");
console.log(Symbol.keyFor(sym5)); // -> club
console.log(Symbol.keyFor(sym6)) // -> undefined