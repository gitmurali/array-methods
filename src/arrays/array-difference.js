// [1,2]
// [1,2,3,4]
const diff = (a, b) => {
  return a.filter((v) => !b.includes(v));
};

console.log(diff([1, 2], [1, 2, 3, 4]));
