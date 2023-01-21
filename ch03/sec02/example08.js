// let
let x;
let a, b, c;
let var1 = 5, var2 = 7;

// console.log(y); -> ReferenceError: y is not defined
let y = 5;

let z;
// let z; -> Uncaught SyntaxError

// const
const const1 = 2;
// const1 = 5; -> Uncaught TypeError

const origin = { x: 1, y: 2 };
console.log(origin);

origin.x = 3;
console.log(origin);
