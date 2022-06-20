let a = new Set([1, 2, 3, 4]);
let b = new Set([5, 4, 3, 2]);

let a_minus_b = new Set([...a].filter((x) => !b.has(x)));
let b_minus_a = new Set([...b].filter((x) => !a.has(x)));
let a_intersect_b = new Set([...a].filter((x) => b.has(x)));

console.log([...a_minus_b]); // {1}
console.log([...b_minus_a]); // {5}
console.log([...a_intersect_b]); // {2,3,4}
