let p = { x: 0, y: 0 };
let q = { x: 0, y: 1 };

p.next = q;
q.next = p;