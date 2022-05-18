const intersection = (a, b) => {
  return a.filter((v) => b.includes(v));
};

console.log(intersection([1, 2, 3], [3, 4]));
