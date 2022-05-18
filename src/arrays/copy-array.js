//copy array from a to b
const copyArray = (a, b) => {
  while (a.length) {
    b.push(a.shift());
  }
  return b;
};

console.log(copyArray([1, 2, 3], [4, 5, 6]));
