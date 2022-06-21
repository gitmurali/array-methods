const x = new Set([1, 2, 3, 4]);

const y = Array.from(x);
console.log(y); // = [ 1, 2, 3, 4 ]

const z = [...x];
console.log(z); // = [ 1, 2, 3, 4 ]
