const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
const min = Math.min(...arr);
console.log(min);

//solution 2
[14, 58, 20, 77, 66, 82, 42, 67, 42, 4].reduce((a, b) => Math.min(a, b));
